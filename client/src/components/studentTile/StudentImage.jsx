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
 * @param {string} schoolYearKey
 * @param {{}} studentInfoDto
 * @param {string} width
 * @param studentNumber
 * @return {JSX.Element}
 */
const StudentImage = ({
                          className,
                          height,
                          schoolYearKey,
                          studentInfoDto,
                          width
                      }) => {
    const [imageUrl, setImageUrl] = useState(null);

    // inMemoryToken is stored in the GlobalContext as state
    const { state } = useContext(GlobalContext);
    const { token } = state || {};

    /**
     * get the student's picture
     */
    useEffect(() => {
        if (schoolYearKey && studentInfoDto) {
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
                    setImageUrl(
                        urlCreator.createObjectURL(
                            new Blob([response.data], { type: "image/jpeg" })
                        )
                    );
                }
            });
        }
    }, [schoolYearKey, studentInfoDto, token]);

    return (
        <div className="d-flex flex-row me-2">
            {imageUrl ? (
                <img
                    alt={`${studentInfoDto.firstName} ${studentInfoDto.lastName}`}
                    className={className}
                    height={height}
                    src={imageUrl}
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
    schoolYearKey: PropTypes.string.isRequired,
    studentInfoDto: PropTypes.objectOf(PropTypes.any).isRequired,
    width: PropTypes.string
};

StudentImage.defaultProps = {
    className: "",
    height: "90px",
    width: "90px"
};

export default StudentImage;
