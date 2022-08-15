import React, { useContext, useEffect, useState } from "react";
import StudentCard from "../studentCard/StudentCard";
import { GlobalContext } from "../contextProvider/ContextProvider";
import StudentInfoDao from "../../dao/StudentInfoDao";
import LoadingSvg2 from "../loadingSvg/LoadingSvg2";
import UserDao from "../../dao/UserDao";

const StudentCardContainer = () => {
    const { dispatch, state } = useContext(GlobalContext);
    const { schoolYearDto, studentListDto, token, username } = state || {};

    // flag set to stop calling the API service
    const [studentFlag, setStudentFlag] = useState(true);
    const [schoolYearFlag, setSchoolYearFlag] = useState(true);
    const [loader, setLoader] = useState(true);

    // console.log("token =>", token);
    // console.log("username =>", username);

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
    }, [dispatch, schoolYearDto, token]);

    /**
     * Getting the students form guardian along with their info
     */
    useEffect(() => {
        if (token && username && !studentListDto) {
            if (studentFlag) {
                setStudentFlag(false);
                const options = {
                    action: "getStudentsByGuardian",
                    params: {
                        afterdate: schoolYearDto.startDate
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
    }, [studentListDto, studentFlag, token, username]);

    if (studentListDto) {
        return (
            <>
                {studentListDto.map((item, index) => {
                    const uniqueIndex = `student-card-${index}`;
                    return (
                        <div key={uniqueIndex}>
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
