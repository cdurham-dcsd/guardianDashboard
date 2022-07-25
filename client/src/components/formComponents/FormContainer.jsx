import React from "react";
import PropTypes from "prop-types";

import "../../styles/FormContainer.scss";

const FormContainer = ({ children, title }) => {
    return (
        <div>
            <div className="form-container">
                <div className="form-title-bar">
                    <h6 className="ms-3">{title}</h6>
                </div>
                <div className="form-content-container p-3">{children}</div>
            </div>
        </div>
    );
};

FormContainer.propTypes = {
    children: PropTypes.node,
    title: PropTypes.string.isRequired
};

FormContainer.defaultProps = {
    children: null
};

export default FormContainer;
