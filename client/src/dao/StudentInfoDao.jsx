import {
    STUDENT_INFO_CURRENT_ENROLLMENT,
    STUDENT_INFO_CUSTOM_ATTRIBUTES,
    STUDENT_INFO_END_RELATIONSHIP,
    STUDENT_INFO_GET,
    STUDENT_INFO_GUARDIAN_CONTACT_UPDATE,
    STUDENT_INFO_GUARDIAN_HOUSEHOLD,
    STUDENT_INFO_GUARDIAN_HOUSEHOLD_PHONE_UPDATE,
    STUDENT_INFO_GUARDIAN_SMS_UPDATE,
    STUDENT_INFO_NON_HOUSEHOLD_CONTACTS,
    STUDENT_INFO_STUDENT,
    STUDENT_INFO_INDIVIDUAL_PERSON_READ,
    STUDENT_INFO_REFERENCE_DATA,
    STUDENT_INFO_HEALTH_CONDITIONS,
    STUDENT_INFO_HEALTH_CONDITION_UPDATE,
    STUDENT_INFO_LEP_CREATE,
    STUDENT_INFO_LEP_READ,
    STUDENT_INFO_GUARDIAN_MILITARY_CONNECTION_CREATE,
    STUDENT_INFO_GUARDIAN_MILITARY_CONNECTION_READ
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
        householdDto,
        individualDto,
        objectName,
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
        case "customAttributesRead":
            options.method = "GET";
            options.url = `${STUDENT_INFO_CUSTOM_ATTRIBUTES}/${studentNumber}/index.json`;
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
