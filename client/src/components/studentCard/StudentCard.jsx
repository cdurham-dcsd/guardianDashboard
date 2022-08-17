import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";
import StudentImage from "../studentTile/StudentImage";

import "../../styles/StudentCard.scss";

const StudentCard = ({ studentInfo }) => {
    const [middleNameEmpty, setMiddleNameEmpty] = useState(null);
    const middleName = middleNameEmpty ? "" : studentInfo.middleName;

    useEffect(() => {
        if (!studentInfo.middleName || studentInfo.middleName === null) {
            setMiddleNameEmpty("testing");
        }
    });

    return (
        <div className="cards">
            <div className="center-container">
                <div className="photo-container">
                    <StudentImage
                        className=""
                        height="160px" // shows overall size of the photo inside the circle.
                        studentInfoDto={studentInfo}
                    />
                </div>
                <div className="info-container">
                    <div>
                        <div className="name-container">
                            <h5>{`${studentInfo.firstName} ${middleName} ${studentInfo.lastName}`}</h5>
                            <h6>{studentInfo.studentNumber}</h6>
                        </div>
                        <div className="boxes">
                            <div id="grade">
                                {studentInfo.gradeName}
                                <div id="value">Grade</div>
                            </div>
                            <div id="school">{studentInfo.schoolName}</div>
                            <div id="absent">
                                {studentInfo.numAbsenceByDay}
                                <div id="value">Absent</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

StudentCard.propTypes = {
    studentInfo: PropTypes.objectOf(PropTypes.any)
};

StudentCard.defaultProps = {
    studentInfo: null
};

export default StudentCard;
