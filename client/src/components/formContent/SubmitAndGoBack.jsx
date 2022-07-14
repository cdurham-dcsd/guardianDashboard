import React from "react";
import PropTypes from "prop-types";
import { ECHECKIN_SCHOOL_DOMAIN } from "../../utils/auth/config";
import ActionButton from "../formInputs/buttons/ActionButton";
import T from "../../translations/Translations";

import "../../styles/SubmitAndGoBack.scss";

/**
 * Submit the Bus Pass Application
 * @name SubmitAndGoBack
 * @param {func} handleOnChange
 * @param {func} handleSubmit
 * @return {JSX.Element}
 * @constructor
 */
const SubmitAndGoBack = ({ handleOnChange, handleSubmit }) => {
    const closeTab = () => {
        // remove all sessionStorage
        sessionStorage.clear();
        window.opener = null;
        window.open(ECHECKIN_SCHOOL_DOMAIN, "_self");
        window.close();
    };
    // const submitButton = T({ key: "SubmitButton" })

    return (
        <div className="button-container pt-3 pb-3">
            <ActionButton
                label={T({ key: "SubmitButton" })}
                onClick={handleSubmit}
            />
            <ActionButton
                className="delete-button"
                label={T({ key: "ExitButton" })}
                onClick={handleSubmit}
            />
            {/*<div*/}
            {/*    className="submit-button"*/}
            {/*    onKeyDown={handleSubmit}*/}
            {/*    onClick={handleSubmit}*/}
            {/*    role="button"*/}
            {/*    tabIndex={0}*/}
            {/*>*/}
            {/*    <p>Submit</p>*/}
            {/*</div>*/}
            {/*<div*/}
            {/*    className="go-back-button"*/}
            {/*    onClick={() => {*/}
            {/*        closeTab();*/}
            {/*    }}*/}
            {/*    onKeyDown={() => {*/}
            {/*        closeTab();*/}
            {/*    }}*/}
            {/*    role="button"*/}
            {/*    tabIndex={0}*/}
            {/*>*/}
            {/*    <p>Exit</p>*/}
            {/*</div>*/}
        </div>
    );
};

SubmitAndGoBack.propTypes = {
    handleOnChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired
};

export default SubmitAndGoBack;
