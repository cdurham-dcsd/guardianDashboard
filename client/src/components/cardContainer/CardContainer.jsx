import React, { useContext, useState } from "react";
import { GlobalContext } from "../contextProvider/ContextProvider";
// import StudentCard from "../studentCard/StudentCard";
import ActionButton from "../formInputs/buttons/ActionButton";
import Icon from "../icon/Icon";
// import AppCard from "../appCard/AppCard";
import InstructionMessage from "../instructionMessage/InstructionMessage";
import StudentCardContainer from "../studentCardContainer/StudentCardContainer";
import AppCardContainer from "../appCardContainer/AppCardContainer";

import "../../styles/StudentCard.scss";
import "../../styles/CardContainer.scss";

const CardContainer = () => {
    const { dispatch, state } = useContext(GlobalContext);
    const { selectedStudent } = state || {};

    // const [show, setShow] = useState(false);
    // const hideApps = showApps === false ? "" : "not-hidden";
    const hideApps = selectedStudent ? "not-hidden" : "";

    const handleClick = () => {
        console.log("the button is working");
    };

    return (
        <div>
            <div className="action-button-container">
                <ActionButton
                    label="Add Student for Open Enrollment"
                    onClick={handleClick}
                />
                <Icon
                    className="button-icon"
                    iconName="ADD"
                    height="30"
                    fill="white"
                />
            </div>
            <div className="left-right-containers">
                <div className="left-container">
                    <StudentCardContainer />
                </div>
                <div className="right-container">
                    <div className="right-info">
                        <p>
                            Spicy jalapeno bacon ipsum dolor amet sirloin
                            pancetta pig pork belly capicola biltong jowl,
                            sausage strip steak beef ribs pastrami. Pork loin
                            chislic shoulder biltong ball tip andouille venison
                            pork belly ham hock tail. Burgdoggen cupim drumstick
                            beef ribs chuck hamburger landjaeger swine shankle
                            tenderloin leberkas fatback ribeye.
                        </p>
                        <p>
                            Meatloaf sirloin landjaeger meatball jerky sausage
                            bacon ham hock prosciutto. Porchetta turkey ham hock
                            picanha, t-bone filet mignon meatball jerky shoulder
                            doner drumstick corned beef shankle chuck. Shank
                            chicken burgdoggen, venison strip steak landjaeger
                            hamburger meatball beef boudin pork loin turducken
                            kevin corned beef bacon. Beef pork chop cupim
                            alcatra burgdoggen bacon.
                        </p>
                    </div>
                    {selectedStudent ? (
                        <AppCardContainer />
                    ) : (
                        <InstructionMessage />
                    )}
                </div>
            </div>
        </div>
    );
};

export default CardContainer;
