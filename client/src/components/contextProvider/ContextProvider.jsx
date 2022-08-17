import React, { useReducer } from "react";
import PropTypes from "prop-types";

// Set up our reducer function to act on Previous and Next selections
function reducer(state, action) {
    switch (action.type) {
        case "Get Username":
            return {
                ...state,
                username: action.username
            };
        case "Lang":
            return {
                ...state,
                lang: action.lang
            };
        case "Locations":
            return {
                ...state,
                locations: action.locations
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
        case "SelectedStudent":
            return {
                ...state,
                selectedStudent: action.selectedStudent
            };
        case "StudentListDto":
            return {
                ...state,
                studentListDto: action.studentListDto
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
