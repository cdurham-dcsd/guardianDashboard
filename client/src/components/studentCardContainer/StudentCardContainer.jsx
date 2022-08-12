import React, {useContext, useEffect, useState} from "react";
import StudentCard from "../studentCard/StudentCard";
import { GlobalContext } from "../contextProvider/ContextProvider";
import StudentInfoDao from "../../dao/StudentInfoDao";

const StudentCardContainer = () => {
    const {dispatch, state } = useContext(GlobalContext);
    const { token, username } = state || {};

    const [studentListDto, setStudentListDto] = useState(null);

    // console.log("token =>", token);
    // console.log("username =>", username);

    /**
     * Getting the students form guardian along with their info
     */
    useEffect(() => {
        if (!studentListDto) {
            const options = {
                action: "getStudentsByGuardian",
                token,
                username
            };
            StudentInfoDao(options).then((response) => {
                if (response) {
                    console.log("StudentListDto =>", response.data.payload);
                }
            });
        }
    });

    return (
        <div>
            {/*<StudentCard />*/}
        </div>
    );
};

export default StudentCardContainer;
