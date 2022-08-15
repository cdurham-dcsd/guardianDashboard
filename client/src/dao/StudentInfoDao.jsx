import {
    STUDENT_INFO_CURRENT_ENROLLMENT,
    STUDENT_INFO_CUSTOM_ATTRIBUTES,
    STUDENT_INFO_GET,
    GET_STUDENTS_BY_GUARDIAN,
    STUDENT_INFO_GUARDIAN_HOUSEHOLD,
    STUDENT_INFO_STUDENT,
    STUDENT_INFO_INDIVIDUAL_PERSON_READ,
    STUDENT_INFO_CUSTOM_ATTRIBUTE_CREATE
} from "../const/StudentInfoConst";
import ServiceWrapper from "../utils/ServiceWrapper";

/**
 * Data Access for the User API
 * @name StudentInfoDao
 * @param props
 * @return {null|*}
 */
const StudentInfoDao = (props) => {
    const {
        action,
        attributeName,
        dto,
        objectName,
        params,
        personId,
        schoolYearKey,
        studentNumber,
        token,
        username
    } = props;
    const bearer = `Bearer ${token}`;
    const options = {
        headers: {
            Authorization: bearer
        },
        withCredentials: true
    };
    switch (action) {
        case "currentEnrollmentRead":
            options.method = "GET";
            options.url = `${STUDENT_INFO_CURRENT_ENROLLMENT}/${studentNumber}/detail.json`;
            break;
        case "customAttributeCreate":
            options.data = dto;
            options.method = "POST";
            options.url = `${STUDENT_INFO_CUSTOM_ATTRIBUTE_CREATE}/${studentNumber}/detail.json`;
            break;
        case "customAttributesRead":
            options.method = "GET";
            options.params = params;
            options.url = `${STUDENT_INFO_CUSTOM_ATTRIBUTES}/${studentNumber}/${attributeName}/${objectName}/detail.json`;
            break;
        case "getStudentsByGuardian":
            options.method = "GET";
            options.params = params;
            options.url = `${GET_STUDENTS_BY_GUARDIAN}/${username}/index.json`;
            break;
        case "guardianHouseholdFromUsernameRead":
            options.method = "GET";
            options.url = `${STUDENT_INFO_GUARDIAN_HOUSEHOLD}/${username}/detail.json`;
            break;
        case "studentImageRead":
            options.method = "GET";
            options.responseType = "blob";
            options.url = `${STUDENT_INFO_STUDENT}/${studentNumber}/${schoolYearKey}/image`;
            break;
        case "studentInfoRead":
            options.method = "GET";
            options.url = `${STUDENT_INFO_GET}/${studentNumber}/summary.json`;
            break;
        case "studentInfoIndividualPersonRead":
            options.method = "GET";
            options.url = `${STUDENT_INFO_INDIVIDUAL_PERSON_READ}/${personId}/detail.json`;
            break;
        default:
            return null;
    }

    return ServiceWrapper.serviceCall({
        options,
        ...props
    });
};

export default StudentInfoDao;
