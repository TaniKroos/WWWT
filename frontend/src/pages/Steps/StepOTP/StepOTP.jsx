import React from "react";
import Button from "../../../components/shared/Button/Button";
const StepOTP = ({onNext}) => {
    return (
        <div>
            <h1>StepOTP</h1>
            <Button  onClick={onNext} texxt={'Next'}></Button>
        </div>
    )
}

export default StepOTP;