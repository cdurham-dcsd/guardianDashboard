import React, { useContext, useEffect, useReducer, useState } from "react";
import { toast } from "react-toastify";
import { GlobalContext } from "../contextProvider/ContextProvider";
import UserDetails from "../../utils/UserDetails";
import FormReducer from "../../utils/FormReducer";
import TransportationInformation from "../formContent/TransportationInformation";
import BusPassApplication from "../formContent/BusPassApplication";
import ElectronicSignature from "../formContent/ElectronicSignature";
import FormContainer from "./FormContainer";
import TransportationPaymentSelection from "../formContent/TransportationPaymentSelection";
import SubmitAndGoBack from "../formContent/SubmitAndGoBack";
import EcheckinDao from "../../dao/EcheckinDao";
import StudentInfoDao from "../../dao/StudentInfoDao";
import { getToday } from "../../utils/DateFormatter";
import T from "../../translations/Translations";

import "../../styles/FormPage.scss";

const FormPage = () => {
    const { state } = useContext(GlobalContext);
    const {
        guardianStudentMap,
        locKey,
        mapId,
        schoolYearDto,
        studentInfoDto,
        studentNumber,
        token,
        username
    } = state || {};
    const userDetails = UserDetails();
    /*
    annualBilling - already applied for annual billing (done)
    inProcess - application is still in process (not working)
    applying - first time (default) (done)
    expired - date for annual pass has past (done)
    notRidingBus - already chose not to ride bus in the past (done)
    issued - already a SMART tag card issued (done)
    */

    const [annualPassEndDate, setAnnualPassEndDate] = useState(null);
    const [customStudent, setCustomStudent] = useState(null);
    const [displayBilling, setDisplayBilling] = useState(false);
    const [displayEsig, setDisplayEsig] = useState(false);
    const [enrollmentDto, setEnrollmentDto] = useState(null);
    const [hasApplied, setHasApplied] = useState(null);
    const [lastYearProcessed, setLastYearProcessed] = useState(false);
    const [selectedValueDto, setSelectedValueDto] = useState(null);
    const [studentZpass, setStudentZpass] = useState(null);

    /**
     * initialFormState
     * @type {{firstName: string, lastName: string, ridingBus: null, paymentSelection: string, middleName: string, affirmation: boolean}}
     */
    const initialFormState = {
        affirmation: false,
        firstName: "",
        lastName: "",
        middleName: "",
        paymentSelection:
            customStudent && customStudent.value !== "N"
                ? customStudent.value
                : "",
        ridingBus: null
    };
    const [formState, formDispatch] = useReducer(FormReducer, initialFormState);

    const TransportationHeader = T({ key: "trans_Info_header" });
    const BussPassHeader = T({ key: "trans_BusPass_header" });
    const PaymentHeader = T({ key: "trans_Pay_header" });
    const ESigHeader = T({ key: "trans_ESig_header" });
    const SubmitHeader = T({ key: "trans_Submit_header" });

    /**
     * FormReducer allows for simplified input control.
     * @name handleOnChange
     * @param {{}} e
     * @return true
     */
    const handleOnChange = (e) => {
        const { name, value } = e.target;
        let newValue = value;
        if (name === "affirmation") {
            newValue = e.target.checked;
        }
        formDispatch({
            type: "text",
            field: name,
            payload: newValue
        });

        return true;
    };

    const getBusPassApplicationDto = () => {
        return {
            applicationSubmissionAffirmFlag: 1,
            cardStatus: "UNPROCESSED",
            cardType: "NEW_CARD",
            createdBy: username,
            eligibilityCancellationAffirmFlag: false,
            grade: studentInfoDto.grade,
            lastUpdatedBy: username,
            locKey,
            lossOfPrivilegesAffirmFlag: false,
            ncFlag: false,
            noEmailFlag: false,
            outstandingFeeCollectionFlag: 1,
            replacementCardFeeFlag: 1,
            schoolId: studentInfoDto.schoolId,
            schoolYear: schoolYearDto.name,
            schoolYearKey: schoolYearDto.key,
            spedFlag: false,
            studentNumber,
            userGuid: userDetails.uid
        };
    };

    const createBusPassApplication = () => {
        const dto = getBusPassApplicationDto();
        const options = {
            action: "busPassApplicationCreate",
            dto,
            subject: "Bus Pass Application",
            token
        };
        return EcheckinDao(options).then((response) => {
            if (response) {
                const { payload } = response.data;
                if (payload) {
                    return payload.key;
                }
            }

            return null;
        });
    };

    const getCustomStudentAttributeDto = (value) => {
        return {
            attributeId: null,
            element: "TransportationOption",
            enrollmentId: enrollmentDto.key,
            objectName: "Enrollment",
            personId: guardianStudentMap.studentPersonId,
            value
        };
    };

    const createSelectedValue = () => {
        // Current Drupal code populates a new selectedValueDto with a mapId = 0? WHY?
        // init new selectedValue
        const selectedValue = {
            optionType: "TRANSPORTATION_ELECTION",
            createdBy: username,
            mapId
        };
        const svDto = selectedValueDto || selectedValue;
        svDto.lastUpdatedBy = username;
        svDto.studentNumber = studentNumber;
        svDto.value = formState.ridingBus;
        const options = {
            action: "selectedValue",
            dto: [svDto],
            subject: "Selected Value",
            token
        };
        EcheckinDao(options).then((response) => {
            if (response) {
                const { payload } = response.data;
                if (Object.keys(payload).length) {
                    setSelectedValueDto(payload);
                }
            }
        });
    };

    const createCustomStudentAttribute = (value) => {
        if (guardianStudentMap && enrollmentDto) {
            const customStudentDto = getCustomStudentAttributeDto(value);
            const options = {
                action: "customStudentAttributeCreate",
                customStudentDto,
                mapId,
                subject: "Transportation Selection",
                token
            };
            EcheckinDao(options).then((response) => {
                if (response) {
                    const { payload } = response.data;
                    if (payload) {
                        setCustomStudent(payload);
                    }
                }
            });
        }

        return true;
    };

    const createElectronicSignature = (busPassId = 0) => {
        const eSig = {
            ageAffirmFlag: true,
            busPassId,
            createdBy: username,
            firstName: formState.firstName,
            lastName: formState.lastName,
            lastUpdatedBy: username,
            middleName: formState.middleName,
            selectedValueId: selectedValueDto ? selectedValueDto.key : 0,
            signatureType: "TRANSPORTATION_AFFIRM"
        };
        const options = {
            actions: "eSignatureCreate",
            dto: eSig,
            token
        };
        EcheckinDao(options).then();
    };

    const handleSubmit = (e) => {
        // Scenarios:
        // 1. Not Riding Bus && !hasApplied - no previous applications
        //    validate formState.ridingBus
        //    setCustomStudentAttribute (N)
        //    setSelectedValue (N)
        //    hide Payment Selection
        //    hide Electronic Signature
        //    display Submit and Exit
        // 2. Riding Bus && !hasApplied - no previous applications
        //    validate formState.ridingBus
        //    validate formState.paymentSelection (except after annualPassEndDate)
        //    create a BusPassApplication
        //    createCustomStudentAttribute(formState.paymentSelection);
        //    createSelectedValue();
        //    createElectronicSignature(busPassId);
        //    display Submit and Exit
        // 3. hasApplied previously
        //    hide riding bus
        //    if cardStatus = PROCESSED
        //        display - you have a Bus Pass
        //        display issued on date
        //        if (now < annualPassEndDate)
        //            if (customStudent.value = "YQ")
        //                validate formState.paymentSelection
        //                display formState.paymentSelection
        //                display Submit and Exit
        //                createCustomStudentAttribute(formState.paymentSelection);
        //                createSelectedValue();
        //            else
        //                display annualPass Info and mySchoolBucks link
        //                hide paymentSelection
        //                hide Submit Button
        //        else
        //            display quarterly info and msb link
        //            hide paymentSelection
        //            hide Submit Button
        //    if cardStatus = UNPROCESSED
        //        display unprocessed message
        //        if (now < annualPassEndDate)
        //            if (customStudent.value = "YQ"
        //                validate formState.paymentSelection
        //                display formState.payment
        //                display Submit and Exit
        //                createCustomStudentAttribute(formState.paymentSelection);
        //                createSelectedValue();
        //            else
        //                display annualPass selected info and msb link
        //                hide Submit Button
        //        else
        //            display quarterly info and msb link
        //            hide paymentSelection
        //            hide Submit Button
        // riding bus (if exists)
        if (!hasApplied && !formState.ridingBus) {
            toast.error(
                "Please indicate if your student is going to ride the bus this year",
                { autoClose: 10000 }
            );
            return false;
        }
        // NOT RIDING BUS
        if (formState.ridingBus === "N") {
            createCustomStudentAttribute("N");
            createSelectedValue();
            return true;
        }
        if (formState.ridingBus === "Y") {
            if (!formState.paymentSelection) {
                toast.error("Please select a Billing Option", {
                    autoClose: 10000
                });
                return false;
            }
            const transportForm = e.target.form;
            const checkStatus = transportForm.checkValidity();
            transportForm.reportValidity();
            if (checkStatus) {
                const busPassId = createBusPassApplication();
                createCustomStudentAttribute(formState.paymentSelection);
                createSelectedValue();
                createElectronicSignature(busPassId);
            }
        }
        if (hasApplied) {
            if (
                getToday() < annualPassEndDate &&
                customStudent.value === "YQ"
            ) {
                if (!formState.paymentSelection) {
                    toast.error("Please select a Billing Option", {
                        autoClose: 10000
                    });
                    return false;
                }
                createCustomStudentAttribute(formState.paymentSelection);
            }
        }

        return true;
    };

    /**
     * @TODO:
     * getAnnualPassEndDate,
     * getHasApplied(latest)
     * if (hasApplied(latest) is empty, did they apply last year?
     *    getLatestHistoricalApplication
     * getStudentZpass
     * getCustomStudentAttribute(TransportationOption, Enrollment, true)
     */

    useEffect(() => {
        if (schoolYearDto && token && !annualPassEndDate) {
            const options = {
                action: "checkinWindowTransportation",
                params: {
                    locationId: 0
                },
                schoolYearKey: schoolYearDto.key,
                token
            };
            EcheckinDao(options).then((response) => {
                if (response) {
                    const { payload } = response.data;
                    if (Object.keys(payload).length) {
                        setAnnualPassEndDate(payload.annualPassOfferEndDate);
                    } else {
                        // if we don't have an annualPassEndDate - default it to
                        // September 15th of this year
                        const today = new Date();
                        const year = today.getFullYear();
                        setAnnualPassEndDate(`${year}-09-15 00:00:00`);
                    }
                }
            });
        }
    }, [annualPassEndDate, schoolYearDto, token]);

    useEffect(() => {
        if (schoolYearDto && token && !hasApplied) {
            const options = {
                action: "busPassApplicationsByStudentNumber",
                schoolYearKey: schoolYearDto.key,
                studentNumber,
                token
            };
            EcheckinDao(options).then((response) => {
                if (response) {
                    const { payload } = response.data;
                    if (payload.length) {
                        payload.sort((a, b) => {
                            return parseInt(a.key, 10) > parseInt(b.key, 10)
                                ? 1
                                : -1;
                        });
                        setHasApplied(payload[0]);
                    } else {
                        // get Historical data
                        const hOptions = {
                            action: "histBusPassApplicationsByStudentNumber",
                            schoolYearKey: schoolYearDto.key,
                            studentNumber,
                            token
                        };
                        EcheckinDao(hOptions).then((hResponse) => {
                            if (hResponse) {
                                const hPayload = hResponse.data.payload;
                                if (hPayload.length) {
                                    hPayload.sort((a, b) => {
                                        return parseInt(a.key, 10) <
                                            parseInt(b.key, 10)
                                            ? 1
                                            : -1;
                                    });
                                    setHasApplied(hPayload[0]);
                                    setLastYearProcessed(true);
                                }
                            }
                        });
                    }
                }
            });
        }
    }, [hasApplied, schoolYearDto, studentNumber, token]);

    useEffect(() => {
        if (studentNumber && token && !studentZpass) {
            const options = {
                action: "customAttributesRead",
                attributeName: "bus_pass_id",
                objectName: "ZPass",
                params: {
                    currentEnrollment: true
                },
                studentNumber,
                token
            };
            StudentInfoDao(options).then((response) => {
                if (response) {
                    const { payload } = response.data;
                    setStudentZpass(payload);
                }
            });
        }
    }, [studentNumber, studentZpass, token]);

    useEffect(() => {
        if (studentNumber && token && !customStudent) {
            const options = {
                action: "customAttributesRead",
                attributeName: "TransportationOption",
                objectName: "Enrollment",
                params: {
                    currentEnrollment: true
                },
                studentNumber,
                token
            };
            StudentInfoDao(options).then((response) => {
                if (response) {
                    const { payload } = response.data;
                    setCustomStudent(payload);
                }
            });
        }
    }, [customStudent, studentNumber, token]);

    useEffect(() => {
        if (annualPassEndDate) {
            console.log("aped: ", annualPassEndDate);
            if (
                (customStudent && customStudent.value === "N") ||
                formState.ridingBus === "N"
            ) {
                setDisplayBilling(false);
            } else {
                console.log("evaluate - ", getToday() < annualPassEndDate);
                if (getToday() < annualPassEndDate) {
                    setDisplayBilling(true);
                }
            }
        }
    }, [annualPassEndDate, customStudent, formState]);

    useEffect(() => {
        if (mapId && !selectedValueDto) {
            const options = {
                action: "selectedValueByMapIdAndTypeRead",
                mapId,
                optionType: "TRANSPORTATION_ELECTION",
                setResults: setSelectedValueDto,
                token
            };
            EcheckinDao(options).then();
        }
    }, [mapId, selectedValueDto, token]);

    useEffect(() => {
        if ((customStudent && customStudent.value === "N") || hasApplied) {
            setDisplayEsig(false);
        } else {
            setDisplayEsig(true);
        }
    }, [customStudent, displayEsig, hasApplied]);

    /**
     * CURRENT ENROLLMENT GET
     * If we don't have a Current Enrollment, get it
     */
    useEffect(() => {
        if (!enrollmentDto) {
            const options = {
                action: "currentEnrollmentRead",
                token,
                studentNumber,
                setResults: setEnrollmentDto
            };
            StudentInfoDao(options).then();
        }
    }, [enrollmentDto, token, studentNumber]);

    return (
        <div className="form-page-container">
            <form id="transportation-form">
                <FormContainer title={TransportationHeader}>
                    <TransportationInformation />
                </FormContainer>
                <FormContainer title={BussPassHeader}>
                    <BusPassApplication
                        customStudent={customStudent}
                        formState={formState}
                        handleOnChange={handleOnChange}
                        hasApplied={hasApplied}
                        lastYearProcessed={lastYearProcessed}
                    />
                </FormContainer>
                {displayBilling && (
                    <FormContainer title={PaymentHeader}>
                        <TransportationPaymentSelection
                            annualPassEndDate={annualPassEndDate}
                            customStudent={customStudent}
                            formState={formState}
                            handleOnChange={handleOnChange}
                        />
                    </FormContainer>
                )}
                {displayEsig && (
                    <FormContainer title={ESigHeader}>
                        <ElectronicSignature
                            formState={formState}
                            handleOnChange={handleOnChange}
                        />
                    </FormContainer>
                )}
                <FormContainer title={SubmitHeader}>
                    <SubmitAndGoBack
                        annualPassEndDate={annualPassEndDate}
                        customStudent={customStudent}
                        handleOnChange={handleOnChange}
                        handleSubmit={handleSubmit}
                        hasApplied={hasApplied}
                    />
                </FormContainer>
            </form>
        </div>
    );
};

export default FormPage;
