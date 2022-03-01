import React, { useCallback, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import Icon from "../icon/Icon";
// import { GlobalContext } from "../contextProvider/ContextProvider";
// import StudentInfoDao from "../../dao/StudentInfoDao";

/**
 * Return a student's picture, or if it doesn't exist, return a default placeholder
 * @name StudentImage
 * @param {string} className
 * @param {string} height
 * @param {string} schoolYearKey
 * @param {{}} studentInfoDto
 * @param {string} width
 * @return {JSX.Element}
 */
const StudentImage = ({
    className,
    height,
    schoolYearKey,
    studentInfoDto,
    width,
    studentNumber
}) => {
    const [studentImage, setStudentImage] = useState(null);

    // inMemoryToken is stored in the GlobalContext as state
    // const { state } = useContext(GlobalContext);
    // const { token } = state || {};
    /**
     * Retrieve a StudentImageDto from student-info service
     * @name getStudentImage
     * @callback
     * @type {(function(): void)|*}
     */
    // const getStudentImage = useCallback(() => {
    //     const options = {
    //         action: "studentImageRead",
    //         schoolYearKey,
    //         setResults: setStudentImage,
    //         studentNumber,
    //         token
    //     };
    //     StudentInfoDao(options).then();
    // }, [schoolYearKey, studentNumber, token]);

    /**
     * get the student's picture
     */
    // useEffect(() => {
    //     if (schoolYearKey && studentNumber && !studentImage) {
    //         //getStudentImage();
    //         setStudentImage({});
    //     }
    // }, [schoolYearKey, studentImage, studentNumber]);

    return (
        <div className="d-flex">
            {studentImage ? (
                <img
                    alt={`${studentInfoDto.firstName} ${studentInfoDto.lastName}`}
                    className={className}
                    src={studentImage}
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
    studentNumber: PropTypes.string.isRequired,
    width: PropTypes.string
};

StudentImage.defaultProps = {
    className: "",
    height: "90px",
    width: "90px"
};

export default StudentImage;
