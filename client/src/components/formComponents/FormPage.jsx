import React from "react";
import { useParams } from "react-router-dom";
import TransportationInformation from "../formContent/TransportationInformation";
import BusPassApplication from "../formContent/BusPassApplication";
import ElectronicSignature from "../formContent/ElectronicSignature";
import FormContainer from "./FormContainer";
import TransportationPaymentSelection from "../formContent/TransportationPaymentSelection";

import "../../styles/FormPage.scss";

const FormPage = () => {
    const { status } = useParams();

    return (
        <div className="form-page-container">
            <FormContainer title="Transportation Information">
                <TransportationInformation />
            </FormContainer>
            <FormContainer title="Bus Pass Application">
                <BusPassApplication />
            </FormContainer>
            {status !== "notRidingBus" && (
                <>
                    <FormContainer title="Transportation Payment Selection">
                        <TransportationPaymentSelection />
                    </FormContainer>    
                    <FormContainer title="Electronic Signature of Parent/Legal Guardian">
                        <ElectronicSignature />
                    </FormContainer>
                </>
            )}   
        </div>
    );
};

export default FormPage;