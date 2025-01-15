import React from "react";
import { Link } from "react-router-dom";
const Navigation = () => {
     
    return (
        <>
         <nav className={`container py-5 `}>
            <Link className="text-white no-underline font-bold text-[22px] flex items-center" to="/">
                <img src="/images/Emoji.png" alt="logo" />
                <span className="ml-2.5">WWWT</span>
            </Link>
         </nav>
        </>
    )
}

export default Navigation;