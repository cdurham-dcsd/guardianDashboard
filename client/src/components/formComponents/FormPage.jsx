import React from "react";
import TransportationInformation from "../formContent/TransportationInformation";
import BusPassApplication from "../formContent/BusPassApplication";
import ElectronicSignature from "../formContent/ElectronicSignature";
import FormContainer from "./FormContainer";
import "../../styles/FormPage.scss";

const FormPage = () => {
    return (
        <div className="form-page-container">
            <FormContainer title="Transportation Information">
                <TransportationInformation />
            </FormContainer>
            <FormContainer title="Bus Pass Application">
                <BusPassApplication />
            </FormContainer>
            <FormContainer title="Electronic Signature">
                <ElectronicSignature />
            </FormContainer>           
        </div>
    );
};

export default FormPage;