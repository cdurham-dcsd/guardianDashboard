import React from "react";
import PropTypes from "prop-types";
import { formatDate, getToday } from "../../utils/DateFormatter";

import "../../styles/TransportationPaymentSelection.scss";
import T from "../../translations/Translations";

const TransportationPaymentSelection = ({
    annualPassEndDate,
    customStudent,
    formState,
    handleOnChange
}) => {
    const showBoth = () => {
        if (getToday() > annualPassEndDate) {
            return false;
        }
        return !customStudent || (customStudent && customStudent.value !== "Y");
    };

    return (
        <div>
            {showBoth() && (
                <div>
                    <div>
                        Transportation fees are approved by the DCSD Board of
                        Education. Rides are $1 each way per student. Students
                        who receive specialized transportation services or
                        qualify for the free or reduced lunch program will have
                        their fees waived.
                    </div>
                    <br />
                    {getToday() < annualPassEndDate && (
                        <div>
                            <div>There are two options to pay your fees:</div>
                            <label htmlFor="paymentSelectionAnnually">
                                <input
                                    type="radio"
                                    name="paymentSelection"
                                    value="Y"
                                    id="paymentSelectionAnnually"
                                    defaultChecked={formState.paymentSelection}
                                    onChange={handleOnChange}
                                />{" "}
                                Annual Prepayment of $250. (Applies to each
                                eligible student)
                            </label>
                            <br />
                            <ul>
                                <li>
                                    This option provides approximately 28%
                                    discount based on full time bus ridership.
                                </li>
                                <li>
                                    This option if not payed by{" "}
                                    {formatDate(annualPassEndDate)} will revert
                                    to Quarterly Billing.
                                </li>
                            </ul>
                            <label htmlFor="paymentSelectionQuarterly">
                                <input
                                    type="radio"
                                    name="paymentSelection"
                                    value="YQ"
                                    id="paymentSelectionQuarterly"
                                    defaultChecked={formState.paymentSelection}
                                    onChange={handleOnChange}
                                />{" "}
                                Quarterly Billing
                            </label>
                            <ul>
                                <li>
                                    Accumulated ride charges of $1 each way will
                                    be invoiced via MySchoolBucks.
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            )}
            <div className="mt-3">
                {formState.paymentSelection === "YQ" && (
                    <p>
                        If you would like to change your transportation payment
                        selection, you may select the Annual Prepayment option
                        until {formatDate(annualPassEndDate)}
                    </p>
                )}
            </div>
            {getToday() > annualPassEndDate && (
                <div>
                    <ul>
                        <li>
                            Rides are billed at $1 each way on a quarterly
                            basis. Transportation ride charges accumulated in
                            each billing cycle will be posted to your
                            student&apos;s account, which can be payed through
                            MySchoolBucks.
                        </li>
                        <li>
                            Students who are approved for free and reduced
                            lunches and those that receive require special needs
                            transportation services will have fees waived.
                        </li>
                    </ul>
                </div>
            )}
            {customStudent && customStudent.value === "Y" && (
                <div>
                    <div>
                        In an earlier session you have selected: Annual Billing
                    </div>
                    <div className="mb-2">
                        {T({ key: "trans_Pay_s8" })}
                    </div>
                </div>
            )}
        </div>
    );
};

TransportationPaymentSelection.propTypes = {
    annualPassEndDate: PropTypes.string.isRequired,
    customStudent: PropTypes.objectOf(PropTypes.any),
    formState: PropTypes.objectOf(PropTypes.any).isRequired,
    handleOnChange: PropTypes.func.isRequired
};

TransportationPaymentSelection.defaultProps = {
    customStudent: null
};

export default TransportationPaymentSelection;
