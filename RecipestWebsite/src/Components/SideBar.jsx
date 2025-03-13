import { Link } from "react-router-dom"
import { GiForkKnifeSpoon } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";

const SideBar = ()=>{
    return(
        <div className="">
            <div className="sidebar  absolute inset-y-0 h-auto w-[300px] bg-[#E5D0A6]">
                <div className="flex flex-col justify-center items-center h-screen text-2xl text-[#724f1f] ">
                    <span className="">
                    <MdOutlineRestaurantMenu />
                    </span>
                    <Link to={"/"}>
                    <div className="m-10 cursor-pointer hover:underline ">Home</div>
                    </Link>
                    <Link to={"/Recipes"}>
                    <div className="m-10 cursor-pointer">Recipes</div>
                    </Link>
                    <Link to={"/AboutSecton"}>
                    <div className="m-10 cursor-pointer">About Us</div>
                    </Link>
                    <Link to={"/ContactUs"}>
                    <div className="m-10 cursor-pointer">Contact Us</div>
                    </Link>
                   <button className="m-10 px-[4.5rem] py-[1rem] rounded-2xl bg-[#0C4D2E] text-white">Sign In</button>
                </div>
            </div>
        </div>
    )
}
export default SideBar