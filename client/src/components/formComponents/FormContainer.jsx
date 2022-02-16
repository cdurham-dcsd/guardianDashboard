import React from "react";
import PropTypes from "prop-types";

import "../../styles/FormContainer.scss";

const FormContainer = ({ children, className, title, titleColor, }) => {
    return (
        // <div className="test-background">
        <div>
            <div className="form-container">
                <div className="form-title-bar">
                    <h6 className="ms-3">{title}</h6>
                </div>
                <div className="form-content-container p-3">
                    {children}
                </div>
            </div>    
        </div>
    )
};

FormContainer.propTypes = {
    children: PropTypes.node, 
    className: PropTypes.string,
    title: PropTypes.string.isRequired,
    titleCololr: PropTypes.string
};

FormContainer.defaultProps = {
    children: null,
    className: "",
    titleColor: "#febf31"
};

export default FormContainer;