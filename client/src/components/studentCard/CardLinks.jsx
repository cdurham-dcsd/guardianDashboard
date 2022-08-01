import React from "react";
import PropTypes from "prop-types";

import ActionButton from "../formInputs/buttons/ActionButton";
import "../../styles/StudentCard.scss";
import Icon from "../icon/Icon";

const CardLinks = ({className, title, description}) => {
    /* SCSS for this file is found in StudentCard.scss */

    const handleClick = () => {
        alert("This button is working..");
    };

    return (
        <>
            <div className="link-container">
                <section className="pb-3 pt-3">
                    <div className="link-content-container">
                        <div>
                            <Icon
                                iconName="ECHECKIN"
                                width="50"
                                height="50"
                                fill="#39B54A"
                            />
                        </div>
                        <div className="link-description-container">
                            <h5 className="link-title">{title}</h5>
                            <p className="link-description">{description}</p>
                        </div>
                    </div>
                    <div>
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
