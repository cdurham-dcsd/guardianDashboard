import React from 'react';
import text from "../../StudentSeedData";
import Icon from "../icon/Icon";

import "../../styles/StudentCard.scss";
import CardLinks from "./CardLinks";
import ActionButton from "../formInputs/buttons/ActionButton";

const Dashboard = () => {
    const studentSeed = text.studentInfo[0];
    console.log("Student Seed Info ->", studentSeed);

    const handleClick = () => {
        console.log("testing the button");
    }
    return (
        <div className="cards-container">
            <section>
                <div className="card">
                    <div className="student-number-container">
                        <h6 className="student-number">
                            {studentSeed.studentNumber}
                        </h6>
                    </div>
                    <div className="student-information-container">
                        <div className="student-information">
                            <p id="name">
                                {studentSeed.firstName}, {studentSeed.lastName}
                            </p>
                            <p id="grade">{`Grade: ${studentSeed.grade}`}</p>
                            <p id="schoolName">{studentSeed.schoolName}</p>
                            <p id="daysAbsent">
                                {`${studentSeed.daysAbsent} Day(s) absent`}
                            </p>
                        </div>
                    </div>
                    <div className="photo-container">
                        <div className="photo">
                            <img
                                src="data:image/jpeg;base64,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"
                                alt="cute dog"
                            />
                        </div>
                    </div>
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
                            <CardLinks
                                className="title"
                                title="Transportation"
                                description="Bus Route Payment System"
                            />
                        </div>
                        <div className="actionButton-container">
                            <ActionButton label="Enter" onClick={handleClick} />
                        </div>
                    </div>
                </div>
            </section>



            <section>
                <div className="card">
                    <div className="student-number-container">
                        <h6 className="student-number">
                            {studentSeed.studentNumber}
                        </h6>
                    </div>
                    <div className="student-information-container">
                        <div className="student-information">
                            <p id="name">
                                {studentSeed.firstName}, {studentSeed.lastName}
                            </p>
                            <p id="grade">{`Grade: ${studentSeed.grade}`}</p>
                            <p id="schoolName">{studentSeed.schoolName}</p>
                            <p id="daysAbsent">
                                {`${studentSeed.daysAbsent} Day(s) absent`}
                            </p>
                        </div>
                    </div>
                    <div className="photo-container">
                        <div className="photo">
                            <img
                                src="data:image/jpeg;base64,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"
                                alt="cute dog"
                            />
                        </div>
                    </div>
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
                            <CardLinks
                                className="title"
                                title="Transportation"
                                description="Bus Route Payment System"
                            />
                        </div>
                        <div className="actionButton-container">
                            <ActionButton label="Enter" onClick={handleClick} />
                        </div>
                    </div>
                </div>
            </section>



            <section>
                <div className="card">
                    <div className="student-number-container">
                        <h6 className="student-number">
                            {studentSeed.studentNumber}
                        </h6>
                    </div>
                    <div className="student-information-container">
                        <div className="student-information">
                            <p id="name">
                                {studentSeed.firstName}, {studentSeed.lastName}
                            </p>
                            <p id="grade">{`Grade: ${studentSeed.grade}`}</p>
                            <p id="schoolName">{studentSeed.schoolName}</p>
                            <p id="daysAbsent">
                                {`${studentSeed.daysAbsent} Day(s) absent`}
                            </p>
                        </div>
                    </div>
                    <div className="photo-container">
                        <div className="photo">
                            <img
                                src="data:image/jpeg;base64,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"
                                alt="cute dog"
                            />
                        </div>
                    </div>
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
                            <CardLinks
                                className="title"
                                title="Transportation"
                                description="Bus Route Payment System"
                            />
                        </div>
                        <div className="actionButton-container">
                            <ActionButton label="Enter" onClick={handleClick} />
                        </div>
                    </div>
                </div>
            </section>


            <section>
                <div className="card">
                    <div className="student-number-container">
                        <h6 className="student-number">
                            {studentSeed.studentNumber}
                        </h6>
                    </div>
                    <div className="student-information-container">
                        <div className="student-information">
                            <p id="name">
                                {studentSeed.firstName}, {studentSeed.lastName}
                            </p>
                            <p id="grade">{`Grade: ${studentSeed.grade}`}</p>
                            <p id="schoolName">{studentSeed.schoolName}</p>
                            <p id="daysAbsent">
                                {`${studentSeed.daysAbsent} Day(s) absent`}
                            </p>
                        </div>
                    </div>
                    <div className="photo-container">
                        <div className="photo">
                            <img
                                src="data:image/jpeg;base64,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"
                                alt="cute dog"
                            />
                        </div>
                    </div>
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
                            <CardLinks
                                className="title"
                                title="Transportation"
                                description="Bus Route Payment System"
                            />
                        </div>
                        <div className="actionButton-container">
                            <ActionButton label="Enter" onClick={handleClick} />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Dashboard;
