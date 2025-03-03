import { Link } from "react-router-dom"
import { IoSearch } from "react-icons/io5";

const Navbar = () => {
    return (
        <div>
            <nav className="p-4 flex justify-between bg-[#0C4D2E] hover:drop-shadow-2xl">
                <h1 className="text-white">Cook with me</h1>
                <div className=" flex ">
                    <span className="flex justify-center ">
                        <input type="text" className="w-[400px] rounded-md p-2" placeholder="Search Your Recipes" />
                        {/* <IoSearch className="mt-[7px] text-xl bg-white" /> */}
                    </span>
                </div>
                <ul className="flex justify-end gap-[50px] font-semibold text-white  ">
                    <Link to={"/"} >
                        <li className="cursor-pointer py-1 rounded-2xl transition duration-300 hover:-translate-y-1 hover:text-[#F39229] duration-900">Home </li>
                    </Link>
                    <Link to={"/Recipes"}>
                        <li className="cursor-pointer py-1 rounded-2xl  hover:text-[#F39229] duration-300" >Recipes</li>
                    </Link>
                    <Link to={"/AboutSection"}>
                        <li className="cursor-pointer py-1 rounded-2xl  hover:text-[#F39229] duration-900">About Us</li>
                    </Link>
                    <Link to={"/ContactUs"}>
                        <li className="cursor-pointer py-1 rounded-2xl  hover:text-[#F39229] duration-900">Contact Us</li>
                    </Link>
                </ul>
                <div className="grid text-[#724f1f] font-semibold">
                    <Link to={"/LoginRegister"}>
                        <button className="bg-[#E5D0A6] px-4 py-1 rounded-2xl hover:bg-[#c49f57] drop-shadow-2xl ">Login/Register</button>
                    </Link>
                </div>
            </nav>
            
        </div>
    )
}
export default Navbar