import React from "react";
import Icon from "../icon/Icon";

import "../../styles/BreadCrumb.scss";

/*
 * @todo language options need to be created
 */
const BreadCrumb = () => {
    return (
        <div>
            <Icon
                className="ms-3 mt-3 mb-3"
                fill="#19608f"
                iconName="GUARDIAN_DASHBOARD_WORD"
                title="Transportation Logo"
                viewBox="0 0 1885.79 155"
                width="450"
                height="40"
            />
            <div className="bc-location">
                <Icon
                    className="mb-2 ms-3"
                    fill="#19608f"
                    iconName="ARROW"
                    width="30"
                />
                <h6>Guardian Dashboard</h6>
            </div>
        </div>
    );
};

export default BreadCrumb;
