import React from "react";
import PropTypes from "prop-types";

import "./loadingSvg2.scss";

const LoadingSvg2 = ({ height, width, style }) => {
    return (
        <div className="svg-background">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    );
};
LoadingSvg2.propTypes = {
    height: PropTypes.string,
    width: PropTypes.string,
    style: PropTypes.objectOf(PropTypes.any)
};

LoadingSvg2.defaultProps = {
    height: "200",
    width: "200",
    style: null
};

export default LoadingSvg2;
