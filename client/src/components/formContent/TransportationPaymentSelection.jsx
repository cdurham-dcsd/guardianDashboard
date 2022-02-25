import React, { useReducer } from "react";
import { useParams } from "react-router-dom";
import FormReducer from "../../utils/FormReducer";

const TransportationPaymentSelection = () => {
    const { status } = useParams();
    console.log(status);
    /**
     * @name initialFormState
     * @type {{PaymentSelection: string}}
     */
    const initialFormState = {
        PaymentSelection: "",
    };
    const [formState, dispatch] = useReducer(FormReducer, initialFormState);

    /**
     * FormReducer allows for simplified input control.
     * @name handleOnChange
     * @param {{}} e
     * @return true
     */
    const handleOnChange = e => {
        console.log(e.target.value);
        const { name, value } = e.target;
        dispatch({
            type: "text",
            field: name,
            payload: value
        });
        return true;
    };

    return (
        <div>
            {status !== "annualBilling" && (
            <div>
                <p>
                    Transportation fees are approved by the DCSD Board of Education. Rides are $1 each way per student. Students who receive speciallized transportation services or qualify for the free or reduced lunch program will have their fees waived.
                </p>
                {status !== "expired" && (
                <div>
                    <div>
                        There are two options to pay your fees:
                    </div>
                    <input type="radio" name="paymentSelection" value="Y" id="paymentSelectionAnnualy" defaultChecked={formState.paymentSelection} onChange={handleOnChange} /> 
                        {" "}
                        <label htmlFor="paymentSelectionAnnualy">Annual Prepayment of $250. (Applies to each eligible student)
                        </label>
                        <br />
                        <ul>
                            <li>
                                This option provides approximately 28% discount based on full time bus ridership.
                            </li>
                            <li>
                                This option if not payed by September 13, 2021 will revert to Quarterly Billing.
                            </li>
                        </ul> 
                    <input type="radio" name="paymentSelection" value="YQ" id="paymentSelectionQuarterly" defaultChecked={formState.paymentSelection}
                    onChange={handleOnChange} /> {" "}
                        <label htmlFor="paymentSelectionQuarterly">Quarterly Billing</label>
                        <ul>
                            <li>
                                Accumulated ride charges of $1 each way will be invoiced via MySchoolBucks.
                            </li>
                        </ul>
                </div> 
                )}
            </div> 
            )}

            <div className="mt-3">
                {formState.paymentSelection === "YQ" && (
                    <p>
                        If you would like to change your transportation payment selection, you may select the Annual Prepayment option until September 13, 2021
                    </p>
                )}
            </div>
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
                <p>
                    In an earlier session you have selected: Annual Billing
                </p>
                <p>
                    If you would like to change your transportation payment election, please contact Transportation at <a href= "http://www.k12insight.com/Lets-Talk/CustomWork/CustomDialogueDouglas.aspx?k=WK3Z6DLT@DG2T5DLT" target="_blank">Let's Talk</a> feedback tool. 
                </p>
            </div>)}
        </div>
    );
};

export default TransportationPaymentSelection;
