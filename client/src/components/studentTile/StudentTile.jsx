import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
//import { GlobalContext } from "../contextProvider/ContextProvider";
import StudentImage from "./StudentImage";
//import StudentInfoDao from "../../dao/StudentInfoDao";
//import UserDao from "../../dao/UserDao";
import { dummyData } from "./dummyData/dummyData.js"

import "../../styles/StudentTile.scss";

const StudentTile = ({ studentNumber }) => {
    const [activeSchoolYearKey, setActiveSchoolYearKey] = useState(0);
    const [studentInfoDto, setStudentInfoDto] = useState(null);
    //const { state } = useContext(GlobalContext);
    //const { token } = state || {};
    // console.log("studentNumber=", studentNumber);
    /**
     * Grab the StudentInfoDto using studentNumber
     */


    useEffect(() => {
        if (!studentInfoDto) {
            setStudentInfoDto(dummyData.payload);
            setActiveSchoolYearKey("16");
        }
        // if (token && !studentInfoDto) {
        //     // get the student's info
        //     const options = {
        //         action: "studentInfoRead",
        //         setResults: setStudentInfoDto,
        //         studentNumber,
        //         token
        //     };
        //     StudentInfoDao(options).then();
        //     // get the active school year
        //     options.action = "activeSchoolYearRead";
        //     options.setResults = null;
        //     UserDao(options).then((response) => {
        //         setActiveSchoolYearKey(response.data.payload.key);
        //     });
        //}
    }, [studentInfoDto, studentNumber]);
    console.log("studentInfoDto",studentInfoDto)
    console.log("studentNumber", studentNumber);
    console.log("activeSchoolYearKey", activeSchoolYearKey);

    // if (studentInfoDto && studentNumber && activeSchoolYearKey) {
    return (
        (studentInfoDto && studentNumber && activeSchoolYearKey) && (
            <>
                <div className="student-container ms-4 mt-4">
                    <div className="student-photo ms-3">
                        <StudentImage
                            className=""
                            height="60px"
                            schoolYearKey={activeSchoolYearKey}
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
            </>
        )
    );

};

StudentTile.propTypes = {
    studentNumber: PropTypes.string.isRequired
};

export default StudentTile;