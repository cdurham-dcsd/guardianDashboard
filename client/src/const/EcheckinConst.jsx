import { SERVICE_HOST } from "../utils/auth/config";

export const ECHECKIN_SERVICE = `${SERVICE_HOST}/echeckin-sb/v0`;
export const BUS_PASS_APPLICATION = `${ECHECKIN_SERVICE}/bus_pass_application`;
export const ECHECKIN_BUS_PASS_APPLICATIONS_CREATE = `${BUS_PASS_APPLICATION}/detail.json`;
export const BUS_PASS_APPLICATION_BY_STUDENT_NUMBER = `${BUS_PASS_APPLICATION}/by_student_number`;
export const HIST_BUS_PASS_APPLICATION_BY_STUDENT_NUMBER = `${BUS_PASS_APPLICATION}/hist`;
export const CHECKIN_WINDOW = `${ECHECKIN_SERVICE}/checkin_window/school_year`; // /<schoolYearKey>/index.json (params = checkinType, locationId, windowType)
export const CHECKIN_WINDOW_DETAIL = `${ECHECKIN_SERVICE}/checkin_window`; // /<schoolYearKey>/TRANSPORTATION/detail.json (params locationId)
export const CUSTOM_ATTRIBUTE_CREATE = `${ECHECKIN_SERVICE}/ic_remote/customAttribute`; // <mapId>/detail.json
export const CUSTOM_ATTRIBUTE_GET = `${ECHECKIN_SERVICE}/ic_remote/customAttribute`; // <studentNumber>/detail.json
export const GUARDIAN_STUDENT_MAP = `${ECHECKIN_SERVICE}/guardian_student_map`; // <mapId>/detail.json || <studentNumber>/<username>/detail.json?locKey=<locKey>
export const ELECTRONIC_SIGNATURE = `${ECHECKIN_SERVICE}/electronic_signature/index.json`; // ?mapId=<mapId>&type=<type> || ?busPassId=<busPassId>&type=<type>
export const ELECTRONIC_SIGNATURE_CREATE = `${ECHECKIN_SERVICE}/electronic_signature/detail.json`;
export const ELECTRONIC_SIGNATURE_UPDATE = `${ECHECKIN_SERVICE}/electronic_signature`; // /<key>/detail.json
export const SELECTED_VALUE = `${ECHECKIN_SERVICE}/selected_value/index.json`; // ?mapId=<mapID>&optionType=<optionType>
export const SELECTED_VALUES_READ = `${ECHECKIN_SERVICE}/selected_value/index.json`; // ?mapId=<mapId>&optionType=<optionType>
export const SELECTED_VALUE_UPDATE = `${ECHECKIN_SERVICE}/selected_value`; // <key>/detail.json
