import React from "react";
import Button from "../../../components/shared/Button/Button";
const StepPhoneEmail = ({onNext}) => {
     
    return (
        <div>
            <h1>StepPhoneEmail</h1>
            <Button  onClick={onNext} texxt={'Next'}></Button>
        </div>
    )
}

export default StepPhoneEmail;