import React, { useState } from "react";
import PropTypes from "prop-types";
import Icon from "../icon/Icon";
import ActionButton from "../formInputs/buttons/ActionButton";

import "../../styles/AppCard.scss";


const AppCard = ({ description, title }) => {
    const [showEnterButton, setShowEnterButton] = useState("hidden");

    const disabledClass = showEnterButton === "hidden" ? "" : "not-hidden";

    // const handleEnter = () => {
    //     console.log("Enter");
    // };
    // const handleExit = () => {
    //     console.log("Leaving");
    // };
    return (
        <>
            <div
                className="app-card-container"
                // onMouseEnter={() => {
                //     console.log("Enter");
                //     setShowEnterButton("not-hidden");
                // }}
                // onMouseLeave={() => {
                //     console.log("Leaving");
                //     setShowEnterButton("hidden");
                // }}
            >
                <Icon iconName="TRANSPORTATION_SQUARE" width="50" fill="grey" />
                <div className="move-right">
                    <div className="top-section">
                        <div className="app-name">{title}</div>
                        <div className="app-description">{description}</div>
                    </div>
                </div>
                <div className="middle-section">
                    Date Window:
                    <h6>1.05.2022 - 1.05.2022</h6>
                </div>
                {/* <div className="completed-by">Completed by Name of person here</div> */}
                <div className="application-note">
                    The window for Express Check-In is now open for your student
                    Please be sure to complete all of the steps required and
                    submit your electronic signature at the end to verify.
                </div>
                {/* {disabledClass && ( */}
                {/*    <div className="hover-enter-container" id="test"> */}
                {/*        <ActionButton className="hover-enter" label="Enter" /> */}
                {/*    </div> */}
                {/* )} */}
                <div className="up-arrow">
                    <Icon iconName="UP_ARROW" width="30" fill="grey" />
                </div>

                <div className="hover-container">
                    <ActionButton className="hover-enter" label="Enter" />
                </div>
            </div>
        </>
    );
};

AppCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string
};

AppCard.defaultProps = {
    description: ""
};

export default AppCard;
