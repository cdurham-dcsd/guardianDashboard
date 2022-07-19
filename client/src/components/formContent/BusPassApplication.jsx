import React from "react";
import PropTypes from "prop-types";
import { formatDate } from "../../utils/DateFormatter";
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
    // hasApplied = null;
    const completedCardStatus = ["PROCESSED", "SYNCED"];
    const incompleteCardStatus = ["IN_PROGRESS", "UNPROCESSED"];

    const ridingResponseTrue = T({ key: "trans_BusPass_s11" });
    const ridingResponseFalse = T({ key: "trans_BusPass_s12" });
    const appliedDate = hasApplied ? formatDate(hasApplied.createdDate) : "";

    let cardTypeMessage = "";
    if (
        hasApplied &&
        !lastYearProcessed &&
        incompleteCardStatus.includes(hasApplied.cardStatus)
    ) {
        cardTypeMessage = `${T({
            key: "trans_BusPass_s0"
        })} ${appliedDate}, ${T({
            key: "trans_BusPass_s1"
        })} ${T({ key: "trans_BusPass_s1_and_s2_follow_on" })}`;
        if (hasApplied.cardType === "REPLACEMENT_CARD") {
            cardTypeMessage = `${T({
                key: "trans_BusPass_s0"
            })} ${appliedDate}, ${T({
                key: "trans_BusPass_s2"
            })} ${T({ key: "trans_BusPass_s1_and_s2_follow_on" })}`;
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

    return (
        <>
            <div>
                {hasCardComplete() ? (
                    <span className="text-primary">
                        {T({ key: "trans_BusPass_s3" })}
                    </span>
                ) : (
                    <span className="text-danger">
                        {T({ key: "trans_BusPass_s4" })}
                    </span>
                )}
            </div>
            <hr />
            {hasApplied && Object.keys(hasApplied).length ? (
                <div>
                    {hasCardIncomplete()
                        ? cardTypeMessage
                        : T({ key: "trans_BusPass_s5" })}
                </div>
            ) : (
                // eslint-disable-next-line react/jsx-no-useless-fragment
                <>
                    {customStudent && customStudent.value === "N" ? (
                        <div>
                            {`${T({
                                key: "trans_BusPass_s0"
                            })} ${appliedDate}, ${T({
                                key: "trans_BusPass_s6"
                            })}`}
                        </div>
                    ) : (
                        <>
                            <div>{T({ key: "trans_BusPass_s7" })}</div>
                            <br />
                            <div>
                                <h4>{T({ key: "trans_BusPass_s8" })}</h4>
                                <label htmlFor="ridingBusYes">
                                    <input
                                        type="radio"
                                        name="ridingBus"
                                        value="Y"
                                        id="ridingBusYes"
                                        defaultChecked={formState.ridingBus}
                                        onChange={handleOnChange}
                                    />{" "}
                                    {T({ key: "trans_BusPass_s9" })}
                                </label>
                                <br />
                                <label htmlFor="ridingBusNo">
                                    <input
                                        type="radio"
                                        name="ridingBus"
                                        value="N"
                                        id="ridingBusNo"
                                        defaultChecked={formState.ridingBus}
                                        onChange={handleOnChange}
                                    />{" "}
                                    {T({ key: "trans_BusPass_s10" })}
                                </label>
                            </div>
                            <div className="mt-3">
                                {formState.ridingBus === "Y" && (
                                    <div>{ridingResponseTrue}</div>
                                )}
                                {formState.ridingBus === "N" && (
                                    <div>{ridingResponseFalse}</div>
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
