import React, { useReducer } from "react";
import { useParams } from "react-router-dom";
import FormReducer from "../../utils/FormReducer";
import TransportationInformation from "../formContent/TransportationInformation";
import BusPassApplication from "../formContent/BusPassApplication";
import ElectronicSignature from "../formContent/ElectronicSignature";
import FormContainer from "./FormContainer";
import TransportationPaymentSelection from "../formContent/TransportationPaymentSelection";
import SubmitAndGoBack from "../formContent/SubmitAndGoBack";

import "../../styles/FormPage.scss";

const FormPage = () => {
    const { status } = useParams();
    /*
    annualBilling - already applied for annual billing (done)
    inProcess - application is still in process (not working)
    applying - first time (default) (done)
    expired - date for annual pass has past (done)
    notRidingBus - already chosed not to ride bus in the past (done)
    issued - already a SMART tag card issued (done)
    */

    /**
     * @name initialFormState
     * @type {{affirmation: boolean, firstName: string, lastName: string, middleName: string, paymentSelection: string, ridingBus: boolean}}
     */
     const initialFormState = {
        affirmation: false,
        firstName: "",
        lastName: "",
        middleName: "",
        paymentSelection: "",
        ridingBus: null, 
    };
    const [formState, dispatch] = useReducer(FormReducer, initialFormState);

    /**
     * FormReducer allows for simplified input control.
     * @name handleOnChange
     * @param {{}} e
     * @return true
     */
     const handleOnChange = e => {
        // console.log(e.target.value);
        const { name, value } = e.target;
        let newValue = value;
        if (name === "affirmation") {       
            newValue = e.target.checked;
            // console.log(newValue);
        }
        dispatch({
            type: "text",
            field: name,
            payload: newValue
        });
        return true;
    };

    return (
        <div className="form-page-container">
            <FormContainer title="Transportation Information">
                <TransportationInformation />
            </FormContainer>
            <FormContainer title="Bus Pass Application">
                <BusPassApplication formState={formState} handleOnChange={handleOnChange} />
            </FormContainer>
            {status !== "notRidingBus" && (
                <>
                    {(formState.ridingBus === "true" || status === "issued" || status === "annualBilling" || status === "inProcess" || status === "expired") && (
                    <FormContainer title="Transportation Payment Selection">
                        <TransportationPaymentSelection formState={formState}  handleOnChange={handleOnChange} />
                    </FormContainer>)}
                    {status !== "annualBilling" && status !== "expired" && (
                    <FormContainer title="Electronic Signature of Parent/Legal Guardian">
                        <ElectronicSignature formState={formState}  handleOnChange={handleOnChange} />
                    </FormContainer>)}
                </>
            )}   
            <FormContainer title="Submit Or Go Back">
                <SubmitAndGoBack formState={formState}  handleOnChange={handleOnChange} />
            </FormContainer>  
        </div>
    );
};

export default FormPage;