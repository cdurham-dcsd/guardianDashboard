import React, { useContext, useEffect, useState } from "react";
import StudentCard from "../studentCard/StudentCard";
import { GlobalContext } from "../contextProvider/ContextProvider";
import StudentInfoDao from "../../dao/StudentInfoDao";
import LoadingSvg2 from "../loadingSvg/LoadingSvg2";
import UserDao from "../../dao/UserDao";
import { formatDateMDY } from "../../utils/DateFormatter";

const StudentCardContainer = () => {
    const { dispatch, state } = useContext(GlobalContext);
    const { selectedStudent, schoolYearDto, studentListDto, token, username } =
        state || {};

    // flag set to stop calling the API service
    const [studentFlag, setStudentFlag] = useState(true);
    const [schoolYearFlag, setSchoolYearFlag] = useState(true);
    const [locationFlag, setLocationFlag] = useState(true);

    const [loader, setLoader] = useState(true);

    // console.log("token =>", token);
    // console.log("username =>", username);
    // console.log("Student ListDTO", studentListDto);
    // console.log("School Year DTO", schoolYearDto);

    /**
     * @todo need to
     * @param studentInfoDto
     */
    const handleClick = (studentInfoDto) => {
        // console.log("studentInfo", studentInfoDto);
        const { key } = studentInfoDto;
        console.log("cardId", key);

        dispatch({
            type: "SelectedStudent",
            selectedStudent: studentInfoDto
        });
    };

    /**
     * Getting the locations
     */
    useEffect(() => {
        if (token && selectedStudent) {
            if (locationFlag) {
                setLocationFlag(false);
                const options = {
                    action: "searchableLocationRead",
                    icId: selectedStudent.schoolId,
                    token
                };
                UserDao(options).then((response) => {
                    if (response) {
                        const { payload } = response.data;
                        if (payload) {
                            dispatch({
                                type: "Locations",
                                locations: payload.results[0]
                            });
                            setLocationFlag(true);
                        }
                    }
                });
            }
        }
    }, [dispatch, selectedStudent, token]);

    /**
     * Getting the active school year.
     */
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
                        // console.log("SCHOOL YEAR DTO=>", response.data.payload);
                        const { payload } = response.data;
                        if (payload) {
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
                    }
                });
            }
        }
    }, [dispatch, schoolYearDto, schoolYearFlag, token]);

    /**
     * Getting the students form guardian along with their info (list of students)
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
                        // console.log("StudentListDto =>", response.data.payload);
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
                        <div
                            key={uniqueIndex}
                            onClick={(e) => {
                                handleClick(item);
                            }}
                        >
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
