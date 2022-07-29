import React from 'react';

import "../../styles/CardLinks.scss";

const CardLinks = ({className, title, description}) => {
    return (
        <div className="link-description-container">
            <h5 className="link-title">{title}</h5>
            <p className="link-description">{description}</p>
        </div>
    );
};

export default CardLinks;
