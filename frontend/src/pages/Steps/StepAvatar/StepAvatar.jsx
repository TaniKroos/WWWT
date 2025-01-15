import React from "react";
import Button from "../../../components/shared/Button/Button";
const StepAvatar = ({onNext}) => {
    return (
        <div>
            <h1>StepAvatar</h1>
            <Button  onClick={onNext} texxt={'Next'}></Button>
        </div>
    )
}

export default StepAvatar;