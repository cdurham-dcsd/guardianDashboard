import React from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";

import "../../styles/TransportationPaymentSelection.scss";

const TransportationPaymentSelection = ({ formState, handleOnChange }) => {
    const { status } = useParams();
    console.log(status);

    return (
        <div>
            {status !== "annualBilling" && (
            <div>
                {status !== "expired" && (
                <div>
                    <div>
                    Transportation fees are approved by the DCSD Board of Education. Rides are $1 each way per student. Students who receive speciallized transportation services or qualify for the free or reduced lunch program will have their fees waived.
                    </div>
                    <br />
                    <h4>
                        There are two options to pay your fees:
                    </h4>
                    <label htmlFor="paymentSelectionAnnualy">
                        <input type="radio" name="paymentSelection" value="Y" id="paymentSelectionAnnualy" defaultChecked={formState.paymentSelection} onChange={handleOnChange} /> 
                        {" "}
                        Annual Prepayment of $250. (Applies to each eligible student)
                        </label>
                        <ul>
                            <li>
                                This option provides approximately 28% discount based on full time bus ridership.
                            </li>
                            <li>
                                This option if not payed by September 13, 2021 will revert to Quarterly Billing.
                            </li>
                        </ul> 
                    <label htmlFor="paymentSelectionQuarterly">
                        <input type="radio" name="paymentSelection" value="YQ" id="paymentSelectionQuarterly" defaultChecked={formState.paymentSelection} onChange={handleOnChange} /> 
                        {" "}
                        Quarterly Billing</label>
                        <ul>
                            <li>
                                Accumulated ride charges of $1 each way will be invoiced via MySchoolBucks.
                            </li>
                        </ul>
                </div> 
                )}
            </div> 
            )}
            {formState.paymentSelection === "YQ" && (
            <div className="mt-3">
                If you would like to change your transportation payment selection, you may select the Annual Prepayment option until September 13, 2021
            </div>
            )}
            {status === "expired" && (
            <div>
                <ul>
                    <li>
                        Rides are billed at $1 each way on a quarterly basis. Transportation ride charges accumulated in each billing cycle will be posted to your student's account, which can be payed through MySchoolBucks.
                    </li>
                    <li>
                        Students who are approved for free and reduced lunches and those that receive require special needs transportation services will have fees waived. 
                    </li>
                </ul>
            </div>)}
            {status === "annualBilling" && (
            <div>
                <div>
                    In an earlier session you have selected: <strong>Annual Billing</strong>
                </div>
                <div>
                    If you would like to change your transportation payment election, please contact Transportation at <a href= "http://www.k12insight.com/Lets-Talk/CustomWork/CustomDialogueDouglas.aspx?k=WK3Z6DLT@DG2T5DLT" rel="noreferrer" target="_blank">Let's Talk</a> feedback tool. 
                </div>
            </div>)}
        </div>
    );
};

TransportationPaymentSelection.propTypes = {
    formState: PropTypes.objectOf(PropTypes.any).isRequired,
    handleOnChange: PropTypes.func.isRequired
}

export default TransportationPaymentSelection;
