import React, { useReducer } from "react";
import FormReducer from "../../utils/FormReducer";

const ElectronicSignature = () => {
    /**
     * @name initialFormState
     * @type {{affirmation: boolean, firstName: string, lastName: string, middleName: string}}
     */
     const initialFormState = {
        affirmation: false,
        firstName: "",
        lastName: "",
        middleName: "",
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
        let newValue = value;
        if (name === "affirmation") {
            if (newValue) {
                newValue = false;
            }
        }
        dispatch({
            type: "text",
            field: name,
            payload: newValue
        });
        return true;
    };
    return (
        <div>
            <div>
                <span>&nbsp;</span>
                {formState.firstName.length > 0 && (<label htmlFor="firstName">First Name</label>)}
            </div>
            <input type="text" name="firstName" id="firstName" onChange={handleOnChange} placeholder="First Name" value={formState.firstName} />
            <div>
                <span>&nbsp;</span>
                {formState.middleName.length > 0 && (<label htmlFor="middleName">Middle Name</label>)}
            </div>
            <input type="text" name="middleName" id="middleName" onChange={handleOnChange} placeholder="Middle Name" value={formState.middleName} />
            <div>
                <span>&nbsp;</span>
                {formState.lastName.length > 0 && (<label htmlFor="lastName">Last Name</label>)}
            </div>
            <input type="text" name="lastName" id="lastName" onChange={handleOnChange} placeholder="Last Name" value={formState.lastName} />
            <div>
                <br />
                <input type="checkbox" name="affirmation" id="affirmation" onChange={handleOnChange} defaultChecked={formState.affirmation} value={true} />

                <label htmlFor="affirmation">
                    &nbsp;By checking this box, I certify that I am the parent or legal gaurdian
                </label>                  
            </div>
        </div>
    );
};

export default ElectronicSignature;
