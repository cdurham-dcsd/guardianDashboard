import React, { useReducer } from "react";
import FormReducer from "../../utils/FormReducer";

const BusPassApplication = () => {
    /**
     * @name initialFormState
     * @type {{ridingBUs: boolean}}
     */
    const initialFormState = {
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
            <span className="text-danger">You do not currently have a SMART take card issued
            </span>
            <hr />
            <p>Based on current school enrollment and your home address, your student is eligible for transportation services. In order to assign your student to a route, please answer the following question:
            </p>
            <div>
                <legend>
                    Will your student be riding the bus this year?
                </legend>
                <input type="radio" name="ridingBus" value="true" id="ridingBusYes" defaultChecked={formState.ridingBus} onChange={handleOnChange} />
                    <label htmlFor="ridingBusYes">Yes, my student will ride the bus this year</label> 
                    <br />
                <input type="radio" name="ridingBus" value="false" id="ridingBusNo" defaultChecked={formState.ridingBus}
                onChange={handleOnChange} />
                    <label htmlFor="ridingBusNo">No, my student will not ride the bus this year</label>
            </div>
            
            <div className="mt-3">
                {formState.ridingBus === "true" && (
                    <p>
                        Thank you for your response. By submitting this form, your student’s application for a SMART take bus pass will be sent to DCSD’s Transportation Department for processing. Please register for an account in the Douglas County - SMART tag (tm=&#8482;) Parent Portal (http://parent.smart-tag.net/) to sign up for Smart Alert text or email notifications for ridership confirmation.
                    </p>
                )}
                {formState.ridingBus === "false" && (
                    <p>
                        On 2/22/22 you indicated that this student would not be riding a bus this year. If you need to update your selection for the student, please contact the <a href="https://www.k12insight.com/Lets-Talk/DialogueCustom.aspx?k=WK3Z6DLT@DG2T5DLT" target="_blank">Transportation Department</a>. 
                    </p>
                )}
            </div>
            {/*On yes,

            Thank you for your response. By submitting this form, your student’s application for a SMART take bus pass will be sent to DCSD’s Transportation Department for processing. Please register for an account in the Douglas County - SMART tag (tm=&#8482;) Parent Portal (http://parent.smart-tag.net/) to sign up for Smart Alert text or email notifications for ridership confirmation.



            On no,

            On <some date> you indicated that this student would not be riding a bus this year. If you need to update your selection for the student, please contact the <a href="https://www.k12insight.com/Lets-Talk/DialogueCustom.aspx?k=WK3Z6DLT@DG2T5DLT" target="_blank">Transportation Department.*/}
        </div>
    );
};

export default BusPassApplication;
