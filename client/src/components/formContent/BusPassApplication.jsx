import React from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";

const BusPassApplication = ({ formState, handleOnChange }) => {
    const {status} = useParams();

    return (
        <div>
            {status !== "notRidingBus" ? 
            (
                <>
                    {(status === "applying" || !status) && (
                        <span className="text-danger">
                        You do not currently have a SMART tag card issued
                        </span>
                    )}
                    {(status === "inProcess" || status === "expired" || status === "annualBilling") && (
                        <>
                            <span className="text-primary">
                            Your student currently has a SMART tag card issued
                            </span>
                            <hr />
                            {status === "inProcess" ? (
                                <div>
                                    On February 11, 2022, you submitted an application for a SMART tag bus pass. The DCSD Transportation Department will review and process your application
                                </div>
                            ) : (
                                <div>
                                    Please contact the DCSD Transportation Department to obtain a replacement SMART tag card.
                                </div>
                            )}
                        </>
                    )}
                    {status === "issued" && (
                        <span>
                        Our system indicates you have already been issued a bus pass. Please contact the DCSD Transportation team at <a href="https://www.k12insight.com/Lets-Talk/DialogueCustom.aspx?k=WK3Z6DLT@DG2T5DLT" rel="noreferrer" target="_blank">Let&apos;s Talk</a> to request a replacement SMART tag bus pass.
                        </span>
                    )}
                    {status !== "expired" && status !=="annualBilling" && status !== "inProcess" && status !== "issued" && (
                    <>
                    <hr />
                    <div>Based on current school enrollment and your home address, your student is eligible for transportation services. In order to assign your student to a route, please answer the following question:
                    </div>
                    <br />
                    <div>
                        <h4>
                            Will your student be riding the bus this year?
                        </h4>
                        <label htmlFor="ridingBusYes">
                            <input type="radio" 
                                name="ridingBus" 
                                value="true" 
                                id="ridingBusYes" 
                                defaultChecked={formState.ridingBus} 
                                onChange={handleOnChange} 
                            /> {" "}
                            Yes, my student will ride the bus this year
                            </label> 
                        <br />
                        <label htmlFor="ridingBusNo">
                            <input type="radio" name="ridingBus" value="false" id="ridingBusNo" defaultChecked={formState.ridingBus}onChange={handleOnChange} /> 
                            {" "}
                            No, my student will not ride the bus this year
                        </label>
                    </div>
                
                    <div className="mt-3">
                        {formState.ridingBus === "true" && (
                            <div>
                                Thank you for your response. By submitting this form, your student’s application for a SMART take bus pass will be sent to DCSD’s Transportation Department for processing. Please register for an account in the Douglas County - SMART tag&#8482; Parent Portal (http://parent.smart-tag.net/) to sign up for Smart Alert text or email notifications for ridership confirmation.
                            </div>
                        )}
                        {formState.ridingBus === "false" && (
                            <div>
                                Thank you for your response. By submitting this form, your student will not be issued a SMART tag bus pass. If you need to change your selection at a later date, please contact the <a href="https://www.k12insight.com/Lets-Talk/DialogueCustom.aspx?k=WK3Z6DLT@DG2T5DLT" rel="noreferrer" target="_blank"> Transportation Department</a>.
                            </div>
                        )}
                    </div>
                    </>
                    )}
                </>
            ) : (
                <div>
                On 2/22/22 you indicated that this student would not be riding a bus this year. If you need to update your selection for the student, please contact the <a href="https://www.k12insight.com/Lets-Talk/DialogueCustom.aspx?k=WK3Z6DLT@DG2T5DLT" rel="noreferrer" target="_blank">Transportation Department</a>. 
                </div>
            )
        }
        </div>
    );
};

BusPassApplication.propTypes = {
    formState: PropTypes.objectOf(PropTypes.any).isRequired,
    handleOnChange: PropTypes.func.isRequired
}

export default BusPassApplication;
