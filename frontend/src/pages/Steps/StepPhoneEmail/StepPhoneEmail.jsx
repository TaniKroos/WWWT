import React from "react";
import Button from "../../../components/shared/Button/Button";
import Phone from "./Phone/Phone";
import Email from "./Email/Email";
const phoneEmailMap = {
    phone: Phone,
    email: Email,
}

const StepPhoneEmail = ({onNext}) => {
    const [type,setType] = React.useState('email');
    const Type = phoneEmailMap[type];
    function onNext(){
        
    }
    return (
        <div> 
            <div className="">

            </div>
            <button onClick={() => setType('phone')}>Phone</button>
            <button onClick={() => setType('email')}>Email</button>
              <Type onNext={onNext} />
        </div>
    )
}

export default StepPhoneEmail;