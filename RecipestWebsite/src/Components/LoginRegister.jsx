import { useEffect, useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";

const Login = () => {

    // ShowPassword
    const [showloginPassword, setloginshowPassword] = useState(false)
    const [showregPassword, setregshowPassword] = useState(false)
    const [showcfPassword, setcfPassword] = useState(false)

    // Login
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const isLoginDisabled = !username.trim() || !password.trim();

    // Signup
    const [registeruser, setregisterUser] = useState("")
    const [registerpassword, setregisterPassword] = useState("")
    const [email, setEmail] = useState("")
    const [confirmpassword, setconfirmPassword] = useState("")
    const isSignupDisable = !registeruser.trim() || !registerpassword.trim() || !email.trim() || !confirmpassword.trim();

    const [loginPage, setloginPage] = useState(true);

    return (
        <div>
            <div className="flex justify-center items-center min-h-screen bg-gray-100">
                <div className="border bg-white p-10 rounded-lg shadow-lg w-[400px]">
                    <h1 className="text-3xl text-center font-bold mb-3">{loginPage ? "Login" : "SignUp"}</h1>

                    {loginPage ? (
                        // Login Form
                        <div className="...">
                            <div className="mb-4">
                                <label htmlFor="" className="block text-lg">Username</label>
                                <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" className="w-full p-2 border rounded" placeholder="Username" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="" className="block text-lg">Password</label>
                                <div className="relative">
                                    <input value={password} onChange={(e) => setPassword(e.target.value)} type={showloginPassword ? "text" : "password"} className="w-full p-2 border rounded pr-10" placeholder="Enter Your Password" />
                                    <button className="absolute right-3 top-3" onClick={() => setloginshowPassword(!showloginPassword)}>{showloginPassword ? <FaEye className="text-xl" /> : <FaEyeSlash className="text-xl" />}</button>
                                </div>
                            </div>

                            <button disabled={isLoginDisabled} className={`w-full p-2 rounded mt-4 ${isLoginDisabled ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600 text-white"}`}>Login</button>
                            <p className="">Don't have any account?<button className="text-blue-700" onClick={() => setloginPage(false)}>SignUp</button></p>



                        </div>

                    ) : (
                        // Registration form
                        <div>
                            <div className="mb-4">
                                <label htmlFor="" className="block text-lg">Username</label>
                                <input value={registeruser} onChange={(e) => setregisterUser(e.target.value)} type="text" className="w-full p-2 border rounded" placeholder="Enter Username" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="" className="block text-lg">Email</label>
                                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="w-full p-2 border rounded" placeholder="Enter Your email" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="" className="block text-lg">Password</label>
                                <div className="relative">
                                    <input value={registerpassword} onChange={(e) => setregisterPassword(e.target.value)} type={showregPassword ? "text" : "password"} className="w-full p-2 border rounded" placeholder="Enter Your Password" />
                                    <button className="absolute right-3 top-3" onClick={() => { setregshowPassword(!showregPassword) }}>{showregPassword ? <FaEye /> : <FaEyeSlash />}</button>
                                </div>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="" className="block text-lg">Confirm Password</label>
                                <div className="relative">
                                    <input value={confirmpassword} onChange={(e) => setconfirmPassword(e.target.value)} type="password" className="w-full p-2 border rounded" placeholder="Confirm Password" />
                                    <button className="absolute right-3 top-3" onClick={() => setcfPassword(!showcfPassword)}>{showcfPassword ? <FaEye /> : <FaEyeSlash />}</button>
                                    {/* <button className="absolute right-3 top-3" onMouseEnter={() => {setcfPassword(true);!showcfPassword}} onMouseLeave={() => {setcfPassword(false);showcfPassword}}>{showcfPassword? <FaEye/>:<FaEyeSlash/>}</button> */}
                                    {/* <div className="absolute " onMouseEnter={() => setcfPassword(true)} onMouseLeave={() => setcfPassword(false)}>{showcfPassword? <FaEye/>:<FaEyeSlash/>}</div> */}
                                </div>
                            </div>
                            <div className=" mb-1 mt-5">
                                <button disabled={isSignupDisable} className={`w-full p-2 rounded mt-4 ${isSignupDisable ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600 text-white"}`}>Sign Up</button>
                                <p>Already have an account?<button className="text-blue-700" onClick={() => setloginPage(true)}>Login</button></p>
                            </div>

                        </div>
                    )}

                </div>





            </div>
        </div>
    )
}

export default Login;