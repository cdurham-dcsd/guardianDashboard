import React from "react";
import Icon from "../../components/icon/Icon";
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
                iconName="TRANSPORTATION"
                title="Transportation Logo"
                viewBox="0 0 1024 155"
                width="250"
            />
            <div className="bc-location">
                <Icon
                    className="mb-2 ms-3"
                    fill="#19608f"
                    iconName="ARROW"
                    width="30"
                />
                <h6>Transportation</h6>
            </div>
        </div>
    );
};

export default BreadCrumb;