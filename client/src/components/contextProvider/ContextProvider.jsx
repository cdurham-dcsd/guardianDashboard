import React, { useReducer } from "react";
import PropTypes from "prop-types";

// Set up our reducer function to act on Previous and Next selections
function reducer(state, action) {
    switch (action.type) {
        case "EnrollmentDto":
            return {
                ...state,
                enrollmentDto: action.enrollmentDto
            };
        case "CustomStudentAttributesDto":
            return {
                ...state,
                customStudentAttributesDto: action.customStudentAttributesDto
            };
        case "Get Username":
            return {
                ...state,
                username: action.username
            };
        case "GuardianStudentMap":
            return {
                ...state,
                guardianStudentMap: action.guardianStudentMap
            };
        case "HouseholdDto":
            return {
                ...state,
                householdDto: action.householdDto
            };
        case "Lang":
            return {
                ...state,
                lang: action.lang
            };
        case "MapId":
            return {
                ...state,
                mapId: action.mapId
            };
        case "Locations":
            return {
                ...state,
                loacations: action.locations
            };
        case "LocKey":
            return {
                ...state,
                locKey: action.locKey
            };
        case "SchoolYearDto":
            return {
                ...state,
                schoolYearDto: action.schoolYearDto
            };
        case "SchoolYearKey":
            return {
                ...state,
                schoolYearKey: action.schoolYearKey
            };
        case "SelectedValuesDto":
            return {
                ...state,
                selectedValuesDto: action.selectedValuesDto
            };
        case "ShowApps":
            return {
                ...state,
                showApps: action.showApps
            };
        case "StudentInfoDto":
            return {
                ...state,
                studentInfoDto: action.studentInfoDto
            };
        case "StudentListDto":
            return {
                ...state,
                studentListDto: action.studentListDto
            };
        case "StudentNumber":
            return {
                ...state,
                studentNumber: action.studentNumber
            };
        case "Token Update":
            return {
                ...state,
                token: action.token
            };
        default:
            return { token: null };
    }
}

// Set the count to 0
const initialState = { token: null, username: null };
// Create a counter context, initially storing the initialState
const GlobalContext = React.createContext(initialState);
// Create a counter-provider to pass down the
const ContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        /**
         * Pass an object with the current state and dispatch values as props
         * to the context provider and allow all children of <CounterProvider/>
         * component to have these context values
         */
        // eslint-disable-next-line react/jsx-no-constructed-context-values
        <GlobalContext.Provider value={{ state, dispatch }}>
            {children}
        </GlobalContext.Provider>
    );
};

ContextProvider.propTypes = {
    children: PropTypes.node
};

ContextProvider.defaultProps = {
    children: null
};

export { GlobalContext, ContextProvider };
