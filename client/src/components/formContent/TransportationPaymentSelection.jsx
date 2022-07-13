import React from "react";

import "../../styles/TransportationPaymentSelection.scss";
import PropTypes from "prop-types";

const TransportationPaymentSelection = ({ annualPassEndDate }) => {
    const formatDate = (dateString) => {
        if (dateString) {
            const myDate = new Date(dateString);
            const Y = myDate.getFullYear();
            const month = myDate.toLocaleString("default", { month: "long" });
            const dd = myDate.getDate();
            return `${month} ${dd}, ${Y}`;
        }
        return dateString;
    };

    return (
        <>
            <div>
                <div>
                    Transportation fees are approved by the DCSD Board of
                    Education. Rides are $1 each way per student. Students who
                    receive specialized transportation services or qualify for
                    the free or reduced lunch program will have their fees
                    waived.
                </div>
                <br />
                <h4>There are two options to pay your fees:</h4>
                <ul>
                    <li>
                        Annual Prepayment of $250. (Applies to each eligible
                        student)
                        <ul>
                            <li>
                                This option provides approximately 28% discount
                                based on full time bus ridership.
                            </li>
                            <li>
                                This option - if not paid by{" "}
                                {formatDate(annualPassEndDate)} - will revert to
                                Quarterly Billing.
                            </li>
                        </ul>
                    </li>
                    <li>
                        Quarterly Billing
                        <ul>
                            <li>
                                Accumulated ride charges of $1 each way will be
                                invoiced via MySchoolBucks.
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div>
                If you would like to change your transportation payment
                election, please visit{" "}
                <a
                    href="https://www.myschoolbucks.com/ver2/prdembd?ref=ZZHVZS5TX305OUU_ZZ5UJEZ2IPOUCEP"
                    rel="noreferrer"
                    target="_blank"
                >
                    My School Bucks
                </a>
                .
            </div>
        </>
    );
};

TransportationPaymentSelection.propTypes = {
    annualPassEndDate: PropTypes.string.isRequired
};

export default TransportationPaymentSelection;
