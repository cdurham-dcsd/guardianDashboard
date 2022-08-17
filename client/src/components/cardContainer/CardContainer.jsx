import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../contextProvider/ContextProvider";
import ActionButton from "../formInputs/buttons/ActionButton";
import Icon from "../icon/Icon";
import InstructionMessage from "../instructionMessage/InstructionMessage";
import StudentCardContainer from "../studentCardContainer/StudentCardContainer";
import AppCardContainer from "../appCardContainer/AppCardContainer";
import { formatDateMDY } from "../../utils/DateFormatter";
import StudentInfoDao from "../../dao/StudentInfoDao";
import UserDao from "../../dao/UserDao";

import "../../styles/StudentCard.scss";
import "../../styles/CardContainer.scss";

const CardContainer = () => {
    const { dispatch, state } = useContext(GlobalContext);
    const {
        locations,
        selectedStudent,
        schoolYearDto,
        token,
        username,
        studentListDto
    } = state || {};

    const [studentFlag, setStudentFlag] = useState(true);
    const [schoolYearFlag, setSchoolYearFlag] = useState(true);
    const [locationFlag, setLocationFlag] = useState(true);

    const handleClick = () => {
        alert("This button is working");
    };

    /**
     * Getting the students form guardian along with their info (StudentListDto)
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
                        dispatch({
                            type: "StudentListDto",
                            studentListDto: payload
                        });
                    }
                });
            }
        }
    }, [studentListDto, studentFlag, token, username, schoolYearDto, dispatch]);
    // ____________________________________________________________________________________________
    /**
     * Getting the locations
     */
    useEffect(() => {
        if (token && selectedStudent && !locations) {
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
    }, [dispatch, locations, locationFlag, selectedStudent, token]);

    // ____________________________________________________________________________________________
    /**
     * Getting the active school year. (SchoolYearDto)
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

    return (
        <div>
            <div className="action-button-container">
                <ActionButton
                    label="Add Student for Open Enrollment"
                    onClick={handleClick}
                />
                <Icon
                    className="button-icon"
                    iconName="ADD"
                    height="30"
                    fill="white"
                />
            </div>
            <div className="left-right-containers">
                <div className="left-container">
                    <StudentCardContainer />
                </div>
                <div className="right-container">
                    <div className="right-info">
                        <p>
                            Spicy jalapeno bacon ipsum dolor amet sirloin
                            pancetta pig pork belly capicola biltong jowl,
                            sausage strip steak beef ribs pastrami. Pork loin
                            chislic shoulder biltong ball tip andouille venison
                            pork belly ham hock tail. Burgdoggen cupim drumstick
                            beef ribs chuck hamburger landjaeger swine shankle
                            tenderloin leberkas fatback ribeye.
                        </p>
                        <p>
                            Meatloaf sirloin landjaeger meatball jerky sausage
                            bacon ham hock prosciutto. Porchetta turkey ham hock
                            picanha, t-bone filet mignon meatball jerky shoulder
                            doner drumstick corned beef shankle chuck. Shank
                            chicken burgdoggen, venison strip steak landjaeger
                            hamburger meatball beef boudin pork loin turducken
                            kevin corned beef bacon. Beef pork chop cupim
                            alcatra burgdoggen bacon.
                        </p>
                    </div>
                    {selectedStudent ? (
                        <AppCardContainer />
                    ) : (
                        <InstructionMessage />
                    )}
                </div>
            </div>
        </div>
    );
};

export default CardContainer;
