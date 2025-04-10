import { useState } from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets"; // Assuming you have a logo image in the assets folder

const NavBar = () => {

    const [open, setOpen] = useState(false);
    const [user, setUser] = useState(false);
    const [showUserLogin, setShowUserLogin] = useState(false) // Assuming you have a user state to manage login/logout
    return (
        <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white relative transition-all">

            <Link to="/">
                <img className="h-9" src={assets.logo} alt="logo" />
            </Link>

            {/* Desktop Menu */}
            <div className=" hidden sm:flex items-center gap-8 ">
                <Link to="/">Home</Link>
                <Link to="/products" onClick={() => setOpen(false)}>All Product</Link>
                <Link onClick={() => setOpen(false)}>Contact</Link>
                <div className="hidden lg:flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full">
                    <input className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500" type="text" placeholder="Search products" />
                    <img src={assets.search_icon} alt="search" className="w-4 h-4" />
                </div>
                <div className="relative cursor-pointer">
                    <img src={assets.nav_cart_icon} alt="cart" className="w-6 opacity-80" />
                    <button className="absolute -top-2 -right-3 text-xs text-white bg-primary w-[18px] h-[18px] rounded-full">3</button>
                </div>
                {!user ? (<button onClick={() => setShowUserLogin(true)} className="cursor-pointer px-6 py-2 mt-2 bg-primary hover:bg-secondary transition text-white rounded-full text-sm">
                        Login
                    </button>) : (
                        <div className="relative group">
                            <img src={assets.profile_icon} alt="" className="w-10" />
                            <ul className="hidden group-hover:block absolute top-10 right-0 bg-white shadow border border-gray-200 py-2.5 w-[100px] rounded-md text-sm z-40">
                                <li className="p-1.5 pl-3 hover:bg-primary/10 cursor-pointer">My Orders</li>
                                <li className="p-1.5 pl-3 hover:bg-primary/10 cursor-pointer">Logout</li>
                            </ul>
                        </div>
                    )}

            </div>

            <button onClick={() => open ? setOpen(false) : setOpen(true)} aria-label="Menu" className="sm:hidden">
                {/* Menu Icon SVG */}
                <img src={assets.menu_icon} alt="menu" className="" />
            </button>


            {/* Mobile Menu */}
            {open && (
                <div className={`${open ? 'flex' : 'hidden'} absolute top-[60px] left-0 w-full bg-white shadow-md py-4 flex-col items-start gap-2 px-5 text-sm md:hidden`}>
                    <Link to="" onClick={() => setOpen(false)} className="block">Home</Link>
                    <Link to="/products" onClick={() => setOpen(false)} className="block">All Product</Link>
                    {user && <Link to="/products" onClick={() => setOpen(false)}>My Orders</Link>}
                    <Link to="" onClick={() => setOpen(false)} className="block">Contact</Link>
                    {!user ? (<button onClick={() => {setOpen(false); setShowUserLogin(true);}} className="cursor-pointer px-6 py-2 mt-2 bg-primary hover:bg-secondary transition text-white rounded-full text-sm">
                        Login
                    </button>) : (
                        <button  className="cursor-pointer px-6 py-2 mt-2 bg-primary hover:bg-secondary transition text-white rounded-full text-sm">
                            Logout
                        </button>
                    )}
                </div>
            )}

        </nav>

    )

}

export default NavBar;