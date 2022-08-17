import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import Icon from "../icon/Icon";
import { GlobalContext } from "../contextProvider/ContextProvider";
import StudentInfoDao from "../../dao/StudentInfoDao";

/**
 * Return a student's picture, or if it doesn't exist, return a default placeholder
 * @name StudentImage
 * @param {string} className
 * @param {string} height
 * @param studentInfoDto
 * @param {string} width
 * @return {JSX.Element}
 */
const StudentImage = ({ className, height, studentInfoDto, width }) => {
    // inMemoryToken is stored in the GlobalContext as state
    const { state } = useContext(GlobalContext);
    const { schoolYearKey, token } = state || {};

    const [retrievedUrl, setRetrievedUrl] = useState(true);
    const [studentImageUrl, setStudentImageUrl] = useState(null);

    /**
     * get the student's picture
     */
    useEffect(() => {
        if (schoolYearKey && studentInfoDto && !studentImageUrl) {
            if (retrievedUrl) {
                setRetrievedUrl(false);
                const options = {
                    action: "studentImageRead",
                    ignoreError: true,
                    schoolYearKey,
                    studentNumber: studentInfoDto.studentNumber,
                    token
                };
                StudentInfoDao(options).then((response) => {
                    if (response) {
                        const urlCreator = window.URL || window.webkitURL;
                        setStudentImageUrl(
                            urlCreator.createObjectURL(
                                new Blob([response.data], {
                                    type: "image/jpeg"
                                })
                            )
                        );
                    }
                });
            }
        }
    }, [retrievedUrl, schoolYearKey, studentImageUrl, studentInfoDto, token]);

    return (
        <div className="d-flex flex-row me-2">
            {studentImageUrl ? (
                <img
                    alt={`${studentInfoDto.firstName} ${studentInfoDto.lastName}`}
                    className={className}
                    height={height}
                    src={studentImageUrl}
                />
            ) : (
                <Icon
                    iconName="NO_STUDENT_IMAGE"
                    fill="#19608F"
                    height={height}
                    width={width}
                />
            )}
        </div>
    );
};

StudentImage.propTypes = {
    className: PropTypes.string,
    height: PropTypes.string,
    width: PropTypes.string
};

StudentImage.defaultProps = {
    className: "",
    height: "90px",
    width: "90px"
};

export default StudentImage;
