import React, { useState } from 'react';
import StepPhoneEmail from '../Steps/StepPhoneEmail/StepPhoneEmail';
import StepOtp from '../Steps/StepOTP/StepOTP';

const steps = {
    1: StepPhoneEmail,
    2: StepOtp,
};

const Login = () => {
    const [step, setStep] = useState(1);
    const Step = steps[step];

    function onNext() {
        setStep(step + 1);
    }

    return (
    <div className="flex items-center justify-center mt-[4rem] ">
        <Step onNext={onNext}/>
    
    </div>  
    )
};

export default Login;