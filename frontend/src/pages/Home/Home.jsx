import React from "react";
import {Link,useNavigate} from "react-router-dom";
import Card from "../../components/shared/Card/Card";
import Button from "../../components/shared/Button/Button";
const Home = () => {
    const navigate = useNavigate();
    function startRegister  ()  {
        console.log('start register')
        navigate('/register')
    }
    return (
        <div className="flex items-center justify-center mt-[4rem] ">
            <Card title={'Welcome to WWWT'} icon={'Emoji'}>
            <p className="text-[22px] font-light leading-normal text-customtWhite">
                We're working hard to get WWWT ready for everyone!
            </p>
            <div className="flex justify-center py-2">
                <Button onClick={startRegister}texxt={'Get your username'}>

                </Button>
            </div>
           
            <div className="text-[16px] mt-1 text-customBlue font-bold">
                <span >Have an invite text?</span>
                <Link className="ml-2" to='/login'>  Sign in</Link>
            </div>
            </Card>
        </div>
    )
}
export default Home;  