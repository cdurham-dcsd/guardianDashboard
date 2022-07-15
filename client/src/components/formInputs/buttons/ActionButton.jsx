import React from "react";
import PropTypes from "prop-types";

import "../../../styles/ActionButton.scss";

/**
 * A button for performing various actions (submit, open, close, cancel, etc)
 * @name ActionButton
 * @param className
 * @param id
 * @param label
 * @param onClick
 * @return {JSX.Element}
 * @constructor
 */
const ActionButton = ({ className, id, label, onClick }) => {
    return (
        <button
            className={className}
            id={id}
            onClick={onClick}
            tabIndex={0}
            type="button"
        >
            {label}
        </button>
    );
};

ActionButton.propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func,
    id: PropTypes.string,
    label: PropTypes.string
};

ActionButton.defaultProps = {
    className: "action-button",
    onClick: null,
    id: "",
    label: ""
};

export default ActionButton;
