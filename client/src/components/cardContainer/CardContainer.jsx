import React from "react";
import StudentCard from "../studentCard/StudentCard";
import ActionButton from "../formInputs/buttons/ActionButton";
import Icon from "../icon/Icon";

import "../../styles/StudentCard.scss";
import "../../styles/CardContainer.scss";
import AppCard from "../appCard/AppCard";

const CardContainer = () => {
    return (
        <div>
            <div className="action-button-container">
                <ActionButton label="Add Student for Open Enrollment" />
                <Icon
                    className="button-icon"
                    iconName="ADD"
                    height="30"
                    fill="white"
                />
            </div>
            <div className="left-right-containers">
                <div className="left-container">
                    <StudentCard />
                </div>
                <div className="right-container">
                    <div className="right-info">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur radicalising
                            elit. Aliquid dicta dignissimos eum exercitationem
                            facilis fugit ipsam maiores minima non numquam
                            praesentium provident quae, quia quisquam quod totam
                            ullam voluptate voluptatem?
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur radicalising
                            elit. Aperiam consequatur deleniti eos fuga fugit
                            fugit in ipsum laboriosam molestiae, neque
                            praesentium quaerat qui quis ratione sint sunt
                            temporibus voluptas.
                        </p>
                    </div>
                    <div className="right-app-container">
                        <AppCard
                            description="Online Student Check-in"
                            title="Express Check-In"
                        />
                        <AppCard
                            description="Online Student Check-in"
                            title="Express Check-In"
                        />
                        <AppCard
                            description="Online Student Check-in"
                            title="Express Check-In"
                        />
                        <AppCard
                            description="Online Student Check-in"
                            title="Express Check-In"
                        />
                        <AppCard
                            description="Online Student Check-in"
                            title="Express Check-In"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardContainer;
