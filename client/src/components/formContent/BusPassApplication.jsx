import React from "react";
import PropTypes from "prop-types";
import T from "../../translations/Translations";

/**
 * Display the appropriate form elements depending on previous applications or
 * declinations
 * @name BusPassApplication
 * @param {{}} customStudent
 * @param {{}}formState
 * @param {func} handleOnChange
 * @param {{}} hasApplied
 * @param {boolean} lastYearProcessed
 * @returns {JSX.Element}
 * @constructor
 */
const BusPassApplication = ({
    customStudent,
    formState,
    handleOnChange,
    hasApplied,
    lastYearProcessed
}) => {
    const completedCardStatus = ["PROCESSED", "SYNCED"];
    const incompleteCardStatus = ["IN_PROGRESS", "UNPROCESSED"];

    let cardTypeMessage = "";
    if (
        hasApplied &&
        !lastYearProcessed &&
        incompleteCardStatus.includes(hasApplied.cardStatus)
    ) {
        cardTypeMessage = `On ${hasApplied.createdDate}, you submitted an application for a SMART tag bus pass. The DCSD Transportation Department will review and process your application.`;
        if (hasApplied.cardType === "REPLACEMENT_CARD") {
            cardTypeMessage = `On ${hasApplied.createdDate} you submitted an application for a replacement SMART tag bus pass. The DCSD Transportation Department will review and process your application.`;
        }
    }

    const hasCardComplete = () => {
        return (
            hasApplied && completedCardStatus.includes(hasApplied.cardStatus)
        );
    };

    const hasCardIncomplete = () => {
        return (
            !lastYearProcessed &&
            incompleteCardStatus.includes(hasApplied.cardStatus)
        );
    };
    const alreadyIssued = T({ key: "trans_BusPass_s5" });
    const notRiding = T({ key: "trans_BusPass_s6" });
    const ridingResponseTrue = T({ key: "trans_BusPass_s11" });
    const ridingResponseFalse = T({ key: "trans_BusPass_s12" });
    return (
        <>
            <div>
                {hasCardComplete() ? (
                    <span className="text-primary">
                        {/*You currently have a SMART tag card issued*/}
                        {T({ key: "trans_BusPass_s3" })}
                    </span>
                ) : (
                    <span className="text-danger">
                        {/*You do not currently have a SMART tag card issued*/}
                        {T({ key: "trans_BusPass_s4" })}
                    </span>
                )}
            </div>
            <hr />
            {hasApplied ? (
                <div>
                    {/*{hasCardIncomplete() ? (*/}
                    {/*    { cardTypeMessage }*/}
                    {/*) : (*/}
                    {/*    // <>*/}
                    {/*    //     Our system indicates you have already been issued a*/}
                    {/*    //     bus pass. Please contact the DCSD Transportation*/}
                    {/*    //     team at{" "}*/}
                    {/*    //     <a*/}
                    {/*    //         href="https://www.k12insight.com/Lets-Talk/DialogueCustom.aspx?k=WK3Z6DLT@DG2T5DLT"*/}
                    {/*    //         rel="noreferrer"*/}
                    {/*    //         target="_blank"*/}
                    {/*    //     >*/}
                    {/*    //         Let&apos;s Talk*/}
                    {/*    //     </a>*/}
                    {/*    //     to request a replacement SMART tag bus pass.*/}
                    {/*    // </>*/}
                    {/*)}*/}
                    {hasCardIncomplete()
                        ? { cardTypeMessage }
                        : { alreadyIssued }}
                </div>
            ) : (
                // eslint-disable-next-line react/jsx-no-useless-fragment
                <>
                    {customStudent && customStudent.value === "N" ? (
                        <div>
                            {/* {`<!--On ${customStudent.createdDate}, you indicated that this student would not be riding a bus this year. If you need to update your selection for the student, please contact the <a href="https://www.k12insight.com/Lets-Talk/DialogueCustom.aspx?k=WK3Z6DLT@DG2T5DLT" target="_blank">Transportation Department</a>.-->`} */}
                            {`On ${customStudent.createdDate}, ${notRiding} <a href="https://www.k12insight.com/Lets-Talk/DialogueCustom.aspx?k=WK3Z6DLT@DG2T5DLT" target="_blank">Transportation Department</a>`}
                        </div>
                    ) : (
                        <>
                            <div>
                                {/*Based on current school enrollment and your home*/}
                                {/*address, your student is eligible for*/}
                                {/*transportation services. In order to assign your*/}
                                {/*student to a route, please answer the following*/}
                                {/*question:*/}
                                {T({ key: "trans_BusPass_s7" })}
                            </div>
                            <br />
                            <div>
                                <h4>
                                    {/*Will your student be riding the bus this*/}
                                    {/*year?*/}
                                    {T({ key: "trans_BusPass_s8" })}
                                </h4>
                                <label htmlFor="ridingBusYes">
                                    <input
                                        type="radio"
                                        name="ridingBus"
                                        value="true"
                                        id="ridingBusYes"
                                        defaultChecked={formState.ridingBus}
                                        onChange={handleOnChange}
                                    />{" "}
                                    {/*Yes, my student will ride the bus this year*/}
                                    {T({ key: "trans_BusPass_s9" })}
                                </label>
                                <br />
                                <label htmlFor="ridingBusNo">
                                    <input
                                        type="radio"
                                        name="ridingBus"
                                        value="false"
                                        id="ridingBusNo"
                                        defaultChecked={formState.ridingBus}
                                        onChange={handleOnChange}
                                    />{" "}
                                    {/*No, my student will not ride the bus this*/}
                                    {/*year*/}
                                    {T({ key: "trans_BusPass_s10" })}
                                </label>
                            </div>
                            <div className="mt-3">
                                {formState.ridingBus === "true" && (
                                    <div>
                                        {/*Thank you for your response. By*/}
                                        {/*submitting this form, your student’s*/}
                                        {/*application for a SMART take bus pass*/}
                                        {/*will be sent to DCSD&apos;s*/}
                                        {/*Transportation Department for*/}
                                        {/*processing. Please register for an*/}
                                        {/*account in the Douglas County - SMART*/}
                                        {/*tag&#8482; Parent Portal*/}
                                        {/*(http://parent.smart-tag.net/) to sign*/}
                                        {/*up for Smart Alert text or email*/}
                                        {/*notifications for ridership*/}
                                        {/*confirmation.*/}
                                        {/*{T({ key: "trans_BusPass_s11" })}*/}
                                        {ridingResponseTrue}
                                    </div>
                                )}
                                {formState.ridingBus === "false" && (
                                    <div>
                                        {ridingResponseFalse}
                                    </div>
                                    // <div>
                                    //     Thank you for your response. By
                                    //     submitting this form, your student will
                                    //     not be issued a SMART tag bus pass. If
                                    //     you need to change your selection at a
                                    //     later date, please contact the{" "}
                                    //     <a
                                    //         href="https://www.k12insight.com/Lets-Talk/DialogueCustom.aspx?k=WK3Z6DLT@DG2T5DLT"
                                    //         rel="noreferrer"
                                    //         target="_blank"
                                    //     >
                                    //         Transportation Department
                                    //     </a>
                                    //     .
                                    // </div>
                                )}
                            </div>
                        </>
                    )}
                </>
            )}
        </>
    );
};

BusPassApplication.propTypes = {
    customStudent: PropTypes.objectOf(PropTypes.any),
    formState: PropTypes.objectOf(PropTypes.any).isRequired,
    handleOnChange: PropTypes.func.isRequired,
    hasApplied: PropTypes.objectOf(PropTypes.any),
    lastYearProcessed: PropTypes.bool.isRequired
};

BusPassApplication.defaultProps = {
    customStudent: null,
    hasApplied: null
};

export default BusPassApplication;
