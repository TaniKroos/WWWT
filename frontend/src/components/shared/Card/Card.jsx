import React from "react";
import {Link} from "react-router-dom";
const Card = ({title,icon,children}) => {
    return (
         
        <div className="w-[500px] max-w-[75%] min-h-[300px] bg-customDark p-[30px] rounded-[20px] text-center ">
            <div className="flex   justify-center pb-[30px]">
                <img src={`/images/${icon}.png`} alt="" />
                <h1 className="ml-[10px] text-[22px] font-bold ">{title}</h1>
            </div>
            {children}
             
             
        </div>
       
    )
}
export default Card;