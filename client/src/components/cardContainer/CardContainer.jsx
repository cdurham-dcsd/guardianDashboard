import React from "react";
import StudentCard from "../studentCard/StudentCard";

import "../../styles/StudentCard.scss";

const CardContainer = () => {
    return (
        <div className="left-container">
            <StudentCard />
            {/*<StudentCardV2 />*/}
        </div>
    );
};

export default CardContainer;
