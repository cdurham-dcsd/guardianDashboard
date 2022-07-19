import React from "react";
import PropTypes from "prop-types";
import Fade from "react-reveal/Fade";
import T from "../../translations/Translations";

import "../../styles/ElectronicSignature.scss";

const ElectronicSignature = ({ formState, handleOnChange }) => {
    const firstName = T({ key: "trans_ElecSig_s4" }) || "";
    const middleName = T({ key: "trans_ElecSig_s5" }) || "";
    const lastName = T({ key: "trans_ElecSig_s6" }) || "";
    return (
        <div>
            <div className="mb-2">{T({ key: "trans_ElecSig_s1" })}</div>
            <div className="mb-2">{T({ key: "trans_ElecSig_s2" })}</div>
            {T({ key: "trans_ElecSig_s3" })}
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
                                    {firstName}
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
                        required
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
                                    {middleName}
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
                                    {lastName}
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
                        required
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
                    />{" "}
                    {T({ key: "trans_ElecSig_s7" })}
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
