import React from "react";
import Button from "../../../components/shared/Button/Button";
const StepName = ({onNext}) => {
    return (
        <div>
            <h1>StepName</h1>
            <Button  onClick={onNext} texxt={'Next'}></Button>
        </div>
    )
}

export default StepName;