import React from "react";
import PropTypes from "prop-types";
import ActionButton from "../formInputs/buttons/ActionButton";
import Icon from "../icon/Icon";

import "../../styles/StudentCard.scss";
import {renderIntoDocument} from "react-dom/test-utils";

const CardLinks = ({className, description, fillColor, iconName, title,}) => {
    /* SCSS for this file is found in StudentCard.scss */

    /**
     * @todo need to open correct route for individual "Enter" onCLick
     */
    const handleClick = () => {
        alert("This button is working..");
    };

    const testStatus = "COMPLETE";
    /**
     * @todo need to call correct service to update status (complete / incomplete)
     */
    return (
        <>
            <div className="link-container">
                <section className="pb-3 pt-3">
                    <div className="link-content-container">
                        <div>
                            {testStatus === "COMPLETE" ? (
                                <Icon
                                    className="icon-top"
                                    iconName={iconName}
                                    width="40"
                                    height="40"
                                    fill="#39B54A"
                                />
                            ) : (
                                <Icon
                                    className="icon-top"
                                    iconName={iconName}
                                    width="40"
                                    height="40"
                                    fill="#A7A9AC"
                                />
                            )}
                        </div>
                        <div className="link-description-container">
                            <h5 className="link-title">{title}</h5>
                            <p className="link-description">{description}</p>
                        </div>
                    </div>
                    <div className="action-button-container">
                        <ActionButton label="Enter" onClick={handleClick} />
                    </div>
                </section>
                {/* this is where the next one will go */}
            </div>
        </>
    );
};

CardLinks.propTypes = {
    className: PropTypes.string,
    description: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
};

CardLinks.defaultProps = {
    className: ""
};

export default CardLinks;
