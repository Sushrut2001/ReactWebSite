import { Link } from "react-router-dom"
import { GiForkKnifeSpoon } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { useState } from "react";


const SideBar = () => {
    const [isOpen, setIsOpen] = useState(true);
    return (
        <div className="">

            <div className="sidebar  absolute inset-y-0 h-auto w-[300px] ">
                <div className="flex flex-col justify-center items-center h-screen text-2xl  ">
                    <div className={`fixed top-0 left-0 h-full w-64 bg-[#E5D0A6] text-[#724f1f] transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-64"}`}>
                        <div>
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
                            <button className="m-10 px-[3rem] py-[1rem] rounded-2xl bg-[#0C4D2E] text-white">Sign In</button>
                        </div>
                        <button onClick={() => { setIsOpen(true) }} className="">
                            <MdOutlineRestaurantMenu />
                        </button>
                       

                    </div>
                </div>
            </div>
        </div>
    )
}
export default SideBar