import React, { useCallback, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { GlobalContext } from "./contextProvider/ContextProvider";
import RbA from "./rba/RbA";
import BreadCrumb from "./breadcrumb/BreadCrumb";
import FormPage from "./formComponents/FormPage";
import Header from "./header/Header";
import StudentTile from "./studentTile/StudentTile";
import Spoofer from "./spoofer/Spoofer";
import StudentInfoDao from "../dao/StudentInfoDao";
import UserDao from "../dao/UserDao";
import EcheckinDao from "../dao/EcheckinDao";
import UserDetails from "../utils/UserDetails";
import TranslationButton from "./formInputs/buttons/TranslationButton";

import "react-toastify/dist/ReactToastify.css";
import "../styles/Main.scss";

/**
 * Scaffolding page
 * @name Main
 * @return {JSX.Element}
 * @constructor
 */
const Main = () => {
    const { studentNumber } = useParams();

    const { dispatch, state } = useContext(GlobalContext);
    const { householdDto, schoolYearDto, token, username } = state || {};

    const [entryFlag] = useState(true);
    const [guardianStudentMap, setGuardianStudentMap] = useState(null);
    const [locations, setLocations] = useState(null);
    const [locKey, setLocKey] = useState(null);
    const [studentInfoDto, setStudentInfoDto] = useState(null);

    const allowedRolesArray =
        process.env.NODE_ENV !== "production"
            ? ["EMPLOYEE", "EXTERNAL_GUARDIAN", "GUARDIAN"]
            : ["EXTERNAL_GUARDIAN", "GUARDIAN"];

    const userDetails = UserDetails();

    const createGuardianStudentMap = useCallback(() => {
        if (studentInfoDto && userDetails && householdDto) {
            const { householdMembersDto } = householdDto;
            if (Object.keys(householdMembersDto).length) {
                const guardianMatch = householdMembersDto.filter(
                    (obj) => obj.key === userDetails.employeeNumber
                );
                const studentMatch = householdMembersDto.filter(
                    (obj) => obj.key === studentInfoDto.key
                );
                if (guardianMatch.length && studentMatch.length) {
                    const dto = {
                        createdBy: username,
                        grade: studentInfoDto.gradeName,
                        guardianPersonId: guardianMatch[0].key,
                        householdId: householdDto.key,
                        lastUpdatedBy: username,
                        locKey,
                        primSecFlag: studentMatch[0].memberType,
                        schoolId: studentInfoDto.schoolId,
                        schoolYear: schoolYearDto.label,
                        schoolYearKey: schoolYearDto.key,
                        setIcFlag: "false",
                        studentNumber,
                        studentPersonId: studentInfoDto.key,
                        userGuid: userDetails.uid
                    };
                    const options = {
                        action: "guardianStudentMapCreate",
                        dto,
                        setResults: setGuardianStudentMap,
                        token
                    };
                    EcheckinDao(options).then((response) => {
                        if (response) {
                            const { payload } = response.data;
                            if (!payload || !Object.keys(payload).length) {
                                toast.error(
                                    "Unable to verify Guardian Information. Please contact ITSC at (303) 387-0001",
                                    { autoClose: false }
                                );
                            }
                        } else {
                            toast.error(
                                "Unable to verify Guardian Information. Please contact ITSC at (303) 387-0001",
                                { autoClose: false }
                            );
                        }
                    });
                } else {
                    // Set a toast error
                    toast.error(
                        "Unable to verify Guardian Information. Please contact ITSC at (303) 387-0001",
                        { autoClose: false }
                    );
                }
            }
        } else {
            toast.error(
                <div>
                    Household and/or Student Information is missing!
                    <br />
                    Please Contact your Student&apos;s school or Log Out and Log
                    In again.
                </div>,
                { autoClose: false }
            );
        }
    }, [
        householdDto,
        locKey,
        schoolYearDto,
        studentInfoDto,
        studentNumber,
        token,
        userDetails,
        username
    ]);

    /**
     * If we do not have the householdDto, go get it;
     * Otherwise, if it still does not exist, we will post message
     * telling them to contact the district
     */
    useEffect(() => {
        if (token && entryFlag && !householdDto) {
            const options = {
                action: "guardianHouseholdFromUsernameRead",
                token,
                username
            };
            StudentInfoDao(options).then((response) => {
                if (response) {
                    const { payload } = response.data;
                    dispatch({
                        type: "HouseholdDto",
                        householdDto: payload
                    });
                }
            });
            // setEntryFlag(false);
        }
    }, [dispatch, entryFlag, householdDto, token, username]);

    /**
     * STUDENT NUMBER > CONTEXT
     * Push the studentNumber into context
     */
    useEffect(() => {
        if (studentNumber) {
            dispatch({
                type: "StudentNumber",
                studentNumber
            });
        }
    }, [dispatch, studentNumber]);

    /**
     * Retrieve or create the guardianStudentMap
     */
    useEffect(() => {
        if (
            locKey &&
            studentNumber &&
            token &&
            username &&
            !guardianStudentMap
        ) {
            const options = {
                action: "guardianStudentMapByStudentNumberRead",
                params: {
                    locKey
                },
                setResults: setGuardianStudentMap,
                studentNumber,
                token,
                username
            };
            EcheckinDao(options).then((response) => {
                if (response) {
                    const { payload } = response.data;
                    if (!payload || !Object.keys(payload).length) {
                        createGuardianStudentMap();
                    }
                } else {
                    createGuardianStudentMap();
                }
            });
        }
    }, [
        createGuardianStudentMap,
        guardianStudentMap,
        locKey,
        studentNumber,
        token,
        username
    ]);

    /**
     * GETTING STUDENT INFO DTO & ACTIVE SCHOOL YEAR KEY
     * Grab the StudentInfoDto using studentNumber
     */
    useEffect(() => {
        if (studentNumber && token && !studentInfoDto) {
            // get the student's info
            const options = {
                action: "studentInfoRead",
                setResults: setStudentInfoDto,
                studentNumber,
                token
            };
            StudentInfoDao(options).then();
            // get the active school year
            options.action = "activeSchoolYearRead";
            options.setResults = null;
            UserDao(options).then((response) => {
                if (response) {
                    const { payload } = response.data;
                    if (Object.keys(payload).length) {
                        dispatch({
                            type: "SchoolYearKey",
                            schoolYearKey: payload.key
                        });
                        dispatch({
                            type: "SchoolYearDto",
                            schoolYearDto: payload
                        });
                    }
                }
            });
        }
    }, [dispatch, studentInfoDto, studentNumber, token]);

    /**
     * GUARDIAN STUDENT MAP > CONTEXT (DISPATCH)
     * MAP ID > CONTEXT (DISPATCH)
     */
    useEffect(() => {
        if (guardianStudentMap) {
            dispatch({
                type: "GuardianStudentMap",
                guardianStudentMap
            });
            dispatch({
                type: "MapId",
                mapId: guardianStudentMap.key
            });
        }
    }, [dispatch, guardianStudentMap]);

    /**
     * LOCATIONS GET
     * Populate locations from the schoolId. This will net us a location key
     */
    useEffect(() => {
        if (studentInfoDto && token && !locations) {
            const options = {
                action: "searchableLocationRead",
                searchString: `IcId=${studentInfoDto.schoolId}`,
                token
            };
            UserDao(options).then((response) => {
                if (response) {
                    setLocations(response.data.payload.results);
                }
            });
        }
    }, [locations, studentInfoDto, token]);

    /**
     * LOCATION KEY > CONTEXT
     * Push the location key into context
     */
    useEffect(() => {
        if (locations && locations.length) {
            dispatch({
                type: "LocKey",
                locKey: locations[0].key
            });
            setLocKey(locations[0].key);
        }
    }, [dispatch, locations]);

    useEffect(() => {

    }, []);

    return (
        <RbA allowedRoles={allowedRolesArray} redirect="/notFound">
            <ToastContainer />
            <Header />
            <section className="translation-buttons-container">
                <TranslationButton
                    label="English"
                    onClick={() => {
                        console.log("English");
                        dispatch({
                            type: "Lang",
                            lang: "en"
                        });
                    }}
                />
                <TranslationButton
                    label="Español"
                    onClick={() => {
                        console.log("Spanish");
                        dispatch({
                            type: "Lang",
                            lang: "es"
                        });
                    }}
                />
                <TranslationButton
                    label="普通話"
                    onClick={() => {
                        console.log("Mandarin");
                        dispatch({
                            type: "Lang",
                            lang: "zh"
                        });
                    }}
                />
                <TranslationButton
                    label="Русский"
                    onClick={() => {
                        console.log("Russian");
                        dispatch({
                            type: "Lang",
                            lang: "ru"
                        });
                    }}
                />
            </section>
            <BreadCrumb />
            <div className="gutter">
                <StudentTile />
                <FormPage />
            </div>
            <hr />
            <br />
            {process.env.NODE_ENV !== "production" && <Spoofer />}
        </RbA>
    );
};

export default Main;
