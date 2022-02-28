import React from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";

import "../../styles/SubmitAndGoBack.scss";

/**
 * A simulated button specifically for formContainer title bars
 * @name SubmitAndGoBack
 * @param {func} handleOnChange
 * @param {string} title
 * @return {JSX.Element}
 * @constructor
 */
const SubmitAndGoBack = ({ formState, handleOnChange }) => {
    const {status} = useParams();

    return (
        <div className="button-container pt-3 pb-3">
            <div
                className="go-back-button"
                onClick={handleOnChange}
                onKeyDown={handleOnChange}
                role="button"
                tabIndex={0}
            >
                <p>Back To Dashboard</p>
            </div>
            {status !== "notRidingBus" && (
                <div
                    className="submit-button"
                    onClick={handleOnChange}
                    onKeyDown={handleOnChange}
                    role="button"
                    tabIndex={0}
                >
                    <p>Submit</p>
                </div>
            )}
        </div>
    );
};

SubmitAndGoBack.propTypes = {
    formState: PropTypes.objectOf(PropTypes.any).isRequired,
    handleOnChange: PropTypes.func.isRequired
};

export default SubmitAndGoBack;
