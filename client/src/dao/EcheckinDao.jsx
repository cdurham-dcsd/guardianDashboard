import ServiceWrapper from "../utils/ServiceWrapper";
import {
    BUS_PASS_APPLICATION_BY_STUDENT_NUMBER,
    CHECKIN_WINDOW,
    CHECKIN_WINDOW_DETAIL,
    CUSTOM_ATTRIBUTE_GET,
    ECHECKIN_BUS_PASS_APPLICATIONS_CREATE,
    ELECTRONIC_SIGNATURE,
    ELECTRONIC_SIGNATURE_CREATE,
    ELECTRONIC_SIGNATURE_UPDATE,
    GUARDIAN_STUDENT_MAP,
    HIST_BUS_PASS_APPLICATION_BY_STUDENT_NUMBER,
    SELECTED_VALUE
} from "../const/EcheckinConst";

/**
 * Data Access for the Echeckin Service
 * @name EcheckinDao
 * @param props
 * @return {null|*}
 */
const EcheckinDao = (props) => {
    const {
        action,
        dto,
        mapId,
        params,
        schoolYearKey,
        selectedFile,
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
        case "busPassApplicationCreate":
            options.method = "POST";
            options.data = dto;
            options.url = ECHECKIN_BUS_PASS_APPLICATIONS_CREATE;
            break;
        case "busPassApplicationsByStudentNumber":
            options.method = "GET";
            options.url = `${BUS_PASS_APPLICATION_BY_STUDENT_NUMBER}/${studentNumber}/${schoolYearKey}/index.json`;
            break;
        case "histBusPassApplicationsByStudentNumber":
            options.method = "GET";
            options.url = `${HIST_BUS_PASS_APPLICATION_BY_STUDENT_NUMBER}/${studentNumber}/index.json`;
            break;
        case "checkinWindowTransportation":
            options.method = "GET";
            options.params = params;
            options.url = `${CHECKIN_WINDOW_DETAIL}/${schoolYearKey}/TRANSPORTATION/detail.json`;
            break;
        case "checkinWindowBySchoolYearAndType":
            options.method = "GET";
            options.params = params;
            options.url = `${CHECKIN_WINDOW}/${schoolYearKey}/index.json`;
            break;
        case "customStudentAttributeRead":
            options.params = params;
            options.method = "GET";
            options.url = `${CUSTOM_ATTRIBUTE_GET}/${studentNumber}/detail.json`;
            break;
        case "eSignatureCreate":
            options.data = dto;
            options.method = "POST";
            options.url = ELECTRONIC_SIGNATURE_CREATE;
            break;
        case "eSignatureRead":
            options.method = "GET";
            options.params = params;
            options.url = ELECTRONIC_SIGNATURE;
            break;
        case "eSignatureUpdate":
            options.data = dto;
            options.method = "PUT";
            options.url = `${ELECTRONIC_SIGNATURE_UPDATE}/${dto.key}/detail.json`;
            break;
        case "guardianStudentMapByStudentNumberRead":
            options.method = "GET";
            options.params = params;
            options.url = `${GUARDIAN_STUDENT_MAP}/${studentNumber}/${username}/detail.json`;
            break;
        case "guardianStudentMapCreate":
            options.data = dto;
            options.method = "POST";
            options.url = `${GUARDIAN_STUDENT_MAP}/detail.json`;
            break;
        case "guardianStudentMapRead":
            options.method = "GET";
            options.url = `${GUARDIAN_STUDENT_MAP}/${mapId}/detail.json`;
            break;
        case "guardianStudentMapUpdate":
            options.data = dto;
            options.method = "PUT";
            options.url = `${GUARDIAN_STUDENT_MAP}/${dto.key}/detail.json`;
            break;
        case "selectedValuesRead":
            options.method = "GET";
            options.params = params;
            options.url = SELECTED_VALUE;
            break;
        case "selectedValue": // BE java service will determine this case
            options.method = "POST";
            options.data = dto; // must be an ARRAY of DTOs !!
            options.url = SELECTED_VALUE;
            break;
        default:
            return null;
    }

    return ServiceWrapper.serviceCall({
        options,
        ...props
    });
};

export default EcheckinDao;
