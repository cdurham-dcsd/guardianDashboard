import React, { useContext, useEffect, useReducer, useState } from "react";
import { GlobalContext } from "../contextProvider/ContextProvider";
import FormReducer from "../../utils/FormReducer";
import TransportationInformation from "../formContent/TransportationInformation";
import BusPassApplication from "../formContent/BusPassApplication";
import ElectronicSignature from "../formContent/ElectronicSignature";
import FormContainer from "./FormContainer";
import TransportationPaymentSelection from "../formContent/TransportationPaymentSelection";
import SubmitAndGoBack from "../formContent/SubmitAndGoBack";
import EcheckinDao from "../../dao/EcheckinDao";
import T from "../../translations/Translations";

import StudentInfoDao from "../../dao/StudentInfoDao";
import "../../styles/FormPage.scss";

const FormPage = () => {
    const { state } = useContext(GlobalContext);
    const { mapId, schoolYearDto, studentNumber, token } = state || {};
    /*
    annualBilling - already applied for annual billing (done)
    inProcess - application is still in process (not working)
    applying - first time (default) (done)
    expired - date for annual pass has past (done)
    notRidingBus - already chose not to ride bus in the past (done)
    issued - already a SMART tag card issued (done)
    */

    /**
     * @name initialFormState
     * @type {{affirmation: boolean, firstName: string, lastName: string, middleName: string, paymentSelection: string, ridingBus: boolean}}
     */
    const initialFormState = {
        affirmation: false,
        firstName: "",
        lastName: "",
        middleName: "",
        paymentSelection: "",
        ridingBus: null
    };
    const [formState, formDispatch] = useReducer(FormReducer, initialFormState);

    const [annualPassEndDate, setAnnualPassEndDate] = useState(null);
    const [customStudent, setCustomStudent] = useState(null);
    const [displayBilling, setDisplayBilling] = useState(false);
    const [displayEsig, setDisplayEsig] = useState(false);
    const [hasApplied, setHasApplied] = useState(null);
    const [lastYearProcessed, setLastYearProcessed] = useState(false);
    const [studentZpass, setStudentZpass] = useState(null);

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

    const handleSubmit = () => {
        console.log("formState: ", formState);
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
                                        return parseInt(a.key, 10) >
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
            if (
                (customStudent && customStudent.value === "N") ||
                formState.ridingBus === "false"
            ) {
                setDisplayBilling(false);
            } else {
                const now = new Date();
                const YYYY = now.getFullYear();
                // month is zero-based
                const mm = now.getMonth() + 1;
                const dd = now.getDate();
                const today = `${YYYY}-${mm.toString().padStart(2, "0")}-${dd
                    .toString()
                    .padStart(2, "0")} 00:00:00`;
                console.log("today = ", today);
                console.log("aped: ", annualPassEndDate);
                console.log("evaluate - ", today < annualPassEndDate);
                if (today < annualPassEndDate) {
                    setDisplayBilling(true);
                }
            }
        }
    }, [annualPassEndDate, customStudent, formState]);

    useEffect(() => {
        if (customStudent && customStudent.value === "N") {
            setDisplayEsig(false);
        } else {
            setDisplayEsig(true);
        }
    }, [customStudent, displayEsig]);
    const TransportationHeader = T({ key: "trans_Info_header" });
    const BussPassHeader = T({ key: "trans_BusPass_header" });
    const PaymentHeader = T({ key: "trans_Pay_header" });
    const ESigHeader = T({ key: "trans_ESig_header" });
    const SubmitHeader = T({ key: "trans_Submit_header" });

    return (
        <div className="form-page-container">
            {/*<FormContainer title="Transportation Information">*/}
            <FormContainer title={TransportationHeader}>
                <TransportationInformation />
            </FormContainer>
            {/*<FormContainer title="Bus Pass Application">*/}
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
                // <FormContainer title="Transportation Payment Selection">
                <FormContainer title={PaymentHeader}>
                    <TransportationPaymentSelection
                        annualPassEndDate={annualPassEndDate}
                    />
                </FormContainer>
            )}
            {displayEsig && (
                <>
                    {/*<FormContainer title="Electronic Signature of Parent/Legal Guardian">*/}
                    <FormContainer title={ESigHeader}>
                        <ElectronicSignature
                            formState={formState}
                            handleOnChange={handleOnChange}
                        />
                    </FormContainer>
                    {/*<FormContainer title="Submit Or Exit">*/}
                    <FormContainer title={SubmitHeader}>
                        <SubmitAndGoBack
                            handleOnChange={handleOnChange}
                            handleSubmit={handleSubmit}
                        />
                    </FormContainer>
                </>
            )}
        </div>
    );
};

export default FormPage;
