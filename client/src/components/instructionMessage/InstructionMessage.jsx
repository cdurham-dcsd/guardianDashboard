import React from "react";
// import PropTypes from "prop-types";

import "../../styles/InstructionMessage.scss";

const InstructionMessage = () => {
    return (
        <div className="message-container">
            <div>
                <h4 className="message1">Welcome to the Guardian Dashboard</h4>
            </div>
            <div className="message2">
                To get started, please select a student from the left side
                column. This will show the available applications for your
                student that you may access.
            </div>
        </div>
    );
};

// InstructionMessage.propTypes = {
//     message1: PropTypes.string.isRequired
// };

export default InstructionMessage;
