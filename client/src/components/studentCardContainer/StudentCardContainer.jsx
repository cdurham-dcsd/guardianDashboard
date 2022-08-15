import React, { useContext, useEffect, useState } from "react";
import StudentCard from "../studentCard/StudentCard";
import { GlobalContext } from "../contextProvider/ContextProvider";
import StudentInfoDao from "../../dao/StudentInfoDao";
import LoadingSvg2 from "../loadingSvg/LoadingSvg2";
import UserDao from "../../dao/UserDao";
import { formatDateMDY } from "../../utils/DateFormatter";

const StudentCardContainer = () => {
    const { dispatch, state } = useContext(GlobalContext);
    const { schoolYearDto, studentListDto, token, username } = state || {};

    // flag set to stop calling the API service
    const [studentFlag, setStudentFlag] = useState(true);
    const [schoolYearFlag, setSchoolYearFlag] = useState(true);
    const [loader, setLoader] = useState(true);
    // const [showApps, setShowApps] = useState(false);

    // console.log("token =>", token);
    // console.log("username =>", username);
    // console.log("School Year DTO", schoolYearDto);

    // console.log("Show Apps Initial", showApps);
    const handleClick = () => {
        dispatch({
            type: "ShowApps",
            showApps: true
        });
    };

    // !!!!!!! need to get the school year DTO first in useEffect
    useEffect(() => {
        if (token && !schoolYearDto) {
            if (schoolYearFlag) {
                setSchoolYearFlag(false);
                const options = {
                    action: "activeSchoolYearRead",
                    token
                };
                UserDao(options).then((response) => {
                    if (response) {
                        // console.log("RESPONSE", response.data.payload);
                        const { payload } = response.data;
                        dispatch({
                            type: "SchoolYearDto",
                            schoolYearDto: payload
                        });
                        dispatch({
                            type: "SchoolYearKey",
                            schoolYearKey: payload.key
                        });
                        setSchoolYearFlag(true);
                    }
                });
            }
        }
    }, [dispatch, schoolYearDto, schoolYearFlag, token]);

    /**
     * Getting the students form guardian along with their info
     */
    useEffect(() => {
        if (schoolYearDto && token && username && !studentListDto) {
            if (studentFlag) {
                setStudentFlag(false);
                const options = {
                    action: "getStudentsByGuardian",
                    params: {
                        afterDate: formatDateMDY(schoolYearDto.startDate),
                        checkForActiveEnrolment: true
                    },
                    token,
                    username
                };
                StudentInfoDao(options).then((response) => {
                    if (response) {
                        const { payload } = response.data;
                        console.log("StudentListDto =>", response.data.payload);
                        dispatch({
                            type: "StudentListDto",
                            studentListDto: payload
                        });
                        setStudentFlag(true);
                    }
                });
            }
        }
    }, [studentListDto, studentFlag, token, username, schoolYearDto, dispatch]);

    if (studentListDto) {
        return (
            <>
                {studentListDto.map((item, index) => {
                    const uniqueIndex = `student-card-${index}`;
                    // console.log("index", uniqueIndex);
                    return (
                        // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
                        <div key={uniqueIndex} onClick={handleClick}>
                            <StudentCard studentInfo={item} />
                        </div>
                    );
                })}
            </>
        );
    }
    return (
        <LoadingSvg2 />
    );
};

export default StudentCardContainer;
