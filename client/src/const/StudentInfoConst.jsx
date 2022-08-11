import { SERVICE_HOST } from "../utils/auth/config";

export const STUDENT_INFO = `${SERVICE_HOST}/student-info/v1`;
export const STUDENT_INFO_CURRENT_ENROLLMENT = `${STUDENT_INFO}/currentEnrollment`; // {$studentNumber}/detail.json
export const STUDENT_INFO_CUSTOM_ATTRIBUTES = `${STUDENT_INFO}/attributes`; // {$studentNumber}/index.json
export const STUDENT_INFO_CUSTOM_ATTRIBUTE_CREATE = `${STUDENT_INFO}/addCustomAttribute`; // ${studentNumber}/detail.json
export const STUDENT_INFO_GET = `${STUDENT_INFO}/studentNumber`;
export const STUDENT_INFO_STUDENT = `${STUDENT_INFO}/student`;
export const STUDENT_INFO_GUARDIAN = `${STUDENT_INFO}/guardian`;
export const STUDENT_INFO_GUARDIAN_CONTACT_UPDATE = `${STUDENT_INFO_GUARDIAN}/updateContact/detail.json`;
export const STUDENT_INFO_GUARDIAN_HOUSEHOLD = `${STUDENT_INFO_GUARDIAN}/household`;
export const STUDENT_INFO_REFERENCE_DATA = `${STUDENT_INFO}/reference_data/campus_dictionary`; // {attributeName}/{objectName}/ index.json
export const STUDENT_INFO_INDIVIDUAL_PERSON_READ = `${STUDENT_INFO}/reference_data/individual`; // <personId> detail.json

export const GET_STUDENTS_BY_GUARDIAN = `${STUDENT_INFO}/guardian/students`; // <userName> index.json
