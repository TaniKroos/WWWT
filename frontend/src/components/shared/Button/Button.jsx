import React from "react";
import { Link } from "react-router-dom";

const Button = ({texxt,onClick}) => {
    return (
        <div className="flex justify-center bg-customBlue hover:bg-blue-700 border-none rounded-[20px] max-w-[400px] transition duration-300 ease-in-out">
        <button onClick={onClick} className="flex items-center px-4 py-1  ">
            <span>{texxt}</span>
            <img className="px-2"src="/images/arrow_forward.png " alt="arrow" />
        </button>
    </div>
    )
}

export default Button;