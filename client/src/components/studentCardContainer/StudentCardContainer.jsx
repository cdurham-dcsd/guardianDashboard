import React, { useContext } from "react";
import StudentCard from "../studentCard/StudentCard";
import { GlobalContext } from "../contextProvider/ContextProvider";
import LoadingSvg2 from "../loadingSvg/LoadingSvg2";

const StudentCardContainer = () => {
    const { dispatch, state } = useContext(GlobalContext);
    const {
        locations,
        modifiedStudents,
        selectedStudent,
        schoolYearDto,
        schoolYearKey,
        studentListDto,
        token,
        username
    } = state || {};

    const handleClick = (studentInfoDto) => {
        // const { key } = studentInfoDto;
        // console.log("cardId", key);

        dispatch({
            type: "SelectedStudent",
            selectedStudent: studentInfoDto
        });
    };

    if (studentListDto) {
        return (
            <>
                {studentListDto.map((item, index) => {
                    const uniqueIndex = `student-card-${index}`;
                    // console.log("index", uniqueIndex);
                    return (
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
    return <LoadingSvg2 />;
};

export default StudentCardContainer;
