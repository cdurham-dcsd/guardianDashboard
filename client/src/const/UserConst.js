import { SERVICE_HOST } from "../utils/auth/config";

export const USER_SERVICE = `${SERVICE_HOST}/user/v1`;
export const USER_ACTIVE_SCHOOL_YEAR = `${USER_SERVICE}/schoolyear/active/detail.json`;
export const USER_ROLES = `${USER_SERVICE}/roles`;
export const USERS_SUMMARY = `${USER_SERVICE}/users/summary.json`;
export const USER_LOCATION_SEARCHABLE_GET = `${USER_SERVICE}/location/searchable/index.json`;
