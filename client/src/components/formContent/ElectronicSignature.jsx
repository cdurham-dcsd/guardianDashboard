import React from "react";
import PropTypes from "prop-types";
import Fade from "react-reveal/Fade";

import "../../styles/ElectronicSignature.scss";

const ElectronicSignature = ({ formState, handleOnChange }) => {
    return (
        <div>
            <div className="mb-2">
                By entering my name below, I understand that I am providing an
                electronic signature which will serve as authorization and
                verification of the accuracy and completeness of the information
                I have provided for my student.
            </div>
            <div className="mb-2">
                I understand that outstanding transportation fees may be sent to
                a collection agency for non-payment and/or may initiate further
                legal action.
            </div>
            <div className="mb-2">
                My signature indicates that I have read and understand all the
                above terms of the application for a bus pass and have reviewed
                the district policies and procedures in regards to
                transportation in the{" "}
                <a
                    href="https://www.dcsdk12.org/schools_academics/academics/code_of_conduct"
                    rel="noreferrer"
                    target="_blank"
                >
                    Student Code of Conduct document
                </a>
                .
            </div>
            <div className="input-container">
                <div className="e-sig-input">
                    <div>
                        <span>&nbsp;</span>
                        {formState.firstName.length > 0 && (
                            <Fade bottom>
                                <label
                                    className="hidden-label"
                                    htmlFor="firstName"
                                >
                                    First Name
                                </label>
                            </Fade>
                        )}
                    </div>
                    <input
                        type="text"
                        name="firstName"
                        id="firstName"
                        onChange={handleOnChange}
                        placeholder="First Name"
                        value={formState.firstName}
                    />
                </div>
                <div className="e-sig-input">
                    <div>
                        <span>&nbsp;</span>
                        {formState.middleName.length > 0 && (
                            <Fade bottom>
                                <label
                                    className="hidden-label"
                                    htmlFor="middleName"
                                >
                                    Middle Name
                                </label>
                            </Fade>
                        )}
                    </div>
                    <input
                        type="text"
                        name="middleName"
                        id="middleName"
                        onChange={handleOnChange}
                        placeholder="Middle Name"
                        value={formState.middleName}
                    />
                </div>
                <div className="e-sig-input">
                    <div>
                        <span>&nbsp;</span>
                        {formState.lastName.length > 0 && (
                            <Fade bottom>
                                <label
                                    className="hidden-label"
                                    htmlFor="lastName"
                                >
                                    Last Name
                                </label>
                            </Fade>
                        )}
                    </div>
                    <input
                        type="text"
                        name="lastName"
                        id="lastName"
                        onChange={handleOnChange}
                        placeholder="Last Name"
                        value={formState.lastName}
                    />
                </div>
            </div>
            <div>
                <br />
                <label htmlFor="affirmation">
                    <input
                        type="checkbox"
                        name="affirmation"
                        id="affirmation"
                        onChange={handleOnChange}
                        defaultChecked={formState.affirmation}
                        value={formState.affirmation}
                    />
                    &nbsp;By checking this box, I certify that I am the parent or legal gaurdian
                </label>
            </div>
        </div>
    );
};

ElectronicSignature.propTypes = {
    formState: PropTypes.objectOf(PropTypes.any).isRequired,
    handleOnChange: PropTypes.func.isRequired
};

export default ElectronicSignature;
