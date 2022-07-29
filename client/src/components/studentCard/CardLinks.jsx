import React from "react";
import PropTypes from "prop-types";

import ActionButton from "../formInputs/buttons/ActionButton";
// import "../../styles/CardLinks.scss";
import "../../styles/StudentCard.scss";
import Icon from "../icon/Icon";

const CardLinks = ({className, title, description}) => {

    const handleClick = () => {
        console.log("testing the button");
        alert("This button is working..");
    };

    return (
        <>
            <div className="links-container">
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
