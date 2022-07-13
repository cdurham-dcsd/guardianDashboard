import {USER_ACTIVE_SCHOOL_YEAR, USER_LOCATION_SEARCHABLE_GET, USER_SERVICE} from "../const/UserConst";
import ServiceWrapper from "../utils/ServiceWrapper";

/**
 * Data Access for the User API
 * @name UserDao
 * @param props
 * @return {null|*}
 */
const UserDao = (props) => {
    const { action, searchString, token, username } = props;
    const bearer = `Bearer ${token}`;
    const options = {
        headers: {
            Authorization: bearer
        },
        withCredentials: true
    };
    switch (action) {
        case "activeSchoolYearRead":
            options.method = "GET";
            options.url = USER_ACTIVE_SCHOOL_YEAR;
            return ServiceWrapper.serviceCall({
                options,
                ...props
            });
        case "searchableLocationRead":
            options.method = "GET";
            options.url = USER_LOCATION_SEARCHABLE_GET;
            options.params = {
                searchString
            };
            return ServiceWrapper.serviceCall({
                options,
                ...props
            });
        case "userDetailsRead":
            options.method = "GET";
            options.url = `${USER_SERVICE}/${username}/details.json`;
            return ServiceWrapper.serviceCall({
                options,
                ...props
            });
        default:
            return null;
    }
};

export default UserDao;
