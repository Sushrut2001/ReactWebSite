
const Navbar = () => {
    return (
        <div>
            <nav className="p-4 flex justify-between bg-blue-950">
                <h1 className="text-white">Logo</h1>
                <ul className="flex justify-end gap-[50px] font-semibold text-slate-400 ">
                    <li className="cursor-pointer py-1 rounded-2xl  hover:text-white duration-900">Home </li>
                    <li className="cursor-pointer py-1 rounded-2xl  hover:text-white duration-900">Services</li>
                    <li className="cursor-pointer py-1 rounded-2xl  hover:text-white duration-900">About Us</li>
                    <li className="cursor-pointer py-1 rounded-2xl  hover:text-white duration-900">Contact Us</li>
                </ul>
                <div className="grid text-white">
                    <button className="bg-blue-500 px-4 rounded-2xl hover:bg-blue-600">Login/Register</button>
                </div>
            </nav>
        </div>
    )
}
export default Navbar