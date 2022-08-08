import React from "react";
import PropTypes from "prop-types";
import Icon from "../icon/Icon";

import "../../styles/AppCard.scss";

const AppCard = ({ description, title }) => {
    return (
        <div className="app-card-container">
            <Icon className="test-border" iconName="TRANSPORTATION_SQUARE" width="50" fill="grey"/>
            <div className="move-right">
                <div className="top-section">
                    <div className="app-name">{title}</div>
                    <div className="app-description">{description}</div>
                </div>
            </div>
        </div>
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
