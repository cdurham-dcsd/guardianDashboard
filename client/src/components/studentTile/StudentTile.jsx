import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../contextProvider/ContextProvider";
import StudentImage from "./StudentImage";
import StudentInfoDao from "../../dao/StudentInfoDao";
import UserDao from "../../dao/UserDao";

import "../../styles/StudentTile.scss";

const StudentTile = () => {
    const { dispatch, state } = useContext(GlobalContext);
    const { schoolYearKey, studentInfoDto, studentNumber, token } = state || {};

    /**
     * GETTING STUDENT INFO DTO & ACTIVE SCHOOL YEAR KEY
     * Grab the StudentInfoDto using studentNumber
     */
    useEffect(() => {
        if (studentNumber && token && !studentInfoDto) {
            // get the student's info
            const options = {
                action: "studentInfoRead",
                studentNumber,
                token
            };
            StudentInfoDao(options).then((response) => {
                if (response) {
                    const { payload } = response.data;
                    if (payload && Object.keys(payload).length) {
                        dispatch({
                            type: "StudentInfoDto",
                            studentInfoDto: payload
                        });
                    }
                }
            });
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

    if (studentInfoDto && studentNumber && schoolYearKey) {
        console.log("pop - studentInfoDto: ", studentInfoDto);
        console.log("pop - studentNumber: ", studentNumber);
        console.log("pop - schoolYearKey: ", schoolYearKey);
        return (
            <div className="student-container mt-4 mb-4">
                <div className="student-photo ms-3">
                    <StudentImage
                        className=""
                        height="60px"
                        schoolYearKey={schoolYearKey}
                        studentInfoDto={studentInfoDto}
                        studentNumber={studentNumber}
                    />
                </div>
                <div className="student-text-container ms-3">
                    <p>{`${studentInfoDto.firstName} ${studentInfoDto.lastName} (#${studentNumber})`}</p>
                    <p>{`${studentInfoDto.schoolName}`}</p>
                    <p>{`Grade: ${studentInfoDto.gradeName}`}</p>
                </div>
            </div>
        );
    }

    return null;
};

export default StudentTile;
