import React from "react";
import PropTypes from "prop-types";
import { ECHECKIN_SCHOOL_DOMAIN } from "../../utils/auth/config";
import ActionButton from "../formInputs/buttons/ActionButton";
import T from "../../translations/Translations";
import { getToday } from "../../utils/DateFormatter";

import "../../styles/SubmitAndGoBack.scss";

/**
 * Submit the Bus Pass Application
 * @name SubmitAndGoBack
 * @param {string} annualPassEndDate
 * @param {{}} customStudent
 * @param {func} handleSubmit
 * @param {{}} hasApplied
 * @return {JSX.Element}
 * @constructor
 */
const SubmitAndGoBack = ({
    annualPassEndDate,
    customStudent,
    handleSubmit,
    hasApplied
}) => {
    const closeTab = () => {
        // remove all sessionStorage
        sessionStorage.clear();
        window.opener = null;
        window.open(ECHECKIN_SCHOOL_DOMAIN, "_self");
        window.close();
    };

    const showSubmit = () => {
        if (!customStudent && getToday() < annualPassEndDate) {
            return true;
        }
        if (customStudent && customStudent.value === "N") {
            return false;
        }
        return (
            !hasApplied ||
            (hasApplied &&
                customStudent &&
                customStudent.value === "YQ" &&
                getToday() < annualPassEndDate)
        );
    };

    return (
        <div className="button-container pt-3 pb-3">
            {showSubmit() && (
                <ActionButton
                    label={T({ key: "SubmitButton" })}
                    onClick={handleSubmit}
                />
            )}
            <ActionButton
                className="delete-button"
                label={T({ key: "ExitButton" })}
                onClick={() => {
                    closeTab();
                }}
            />
        </div>
    );
};

SubmitAndGoBack.propTypes = {
    annualPassEndDate: PropTypes.string,
    customStudent: PropTypes.objectOf(PropTypes.any),
    handleSubmit: PropTypes.func.isRequired,
    hasApplied: PropTypes.objectOf(PropTypes.any)
};

SubmitAndGoBack.defaultProps = {
    annualPassEndDate: null,
    customStudent: null,
    hasApplied: null
};

export default SubmitAndGoBack;
