import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";

const Login = () => {
   
    // ShowPassword
    const [showloginPassword, setloginshowPassword] = useState(false)
    const [showregPassword, setregshowPassword] = useState(false)
   
    // Login
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    let buttonClass = "px-6 py-2 border rounded-3xl"
    let isDisable = false;
    if(!username.trim() || !password.trim()){
        isDisable=true;
        buttonClass += "bg-gray-400 rounded-3xl cursor-not-allowed "
        
    }else{
        buttonClass += "bg-blue-500 rounded-3xl hover:bg-blue-600 hover:text-white"
    }

    // Signup
    const [registeruser, setregisterUser] = useState("")
    const [registerpassword, setregisterPassword] = useState("")
    const [email, setEmail] = useState("")
    const [confirmpassword, setconfirmPassword] = useState("")
    let signupbtnClass ="px-6 py-2 border rounded-xl"
    let signupisDisable = false;
    if(!registeruser.trim() || !registerpassword.trim() || !email.trim() || !confirmpassword.trim()){
        signupisDisable =true;
        signupbtnClass += "bg-gray-400 rounded-3xl cursor-not-allowed"
    }
    // else if(registerpassword.target.value( ) || confirmpassword.target.value( )){
    //     signupisDisable = true;
    //     signupbtnClass += "bg-gray-400 rounded-3xl cursour-not allowed"
    // }
    else{
        signupbtnClass += "bg-blue-500 rounded-3xl hover:bg-blue-600 hover:text-white "
    }






    return (
        <div>
            <div className="grid grid-cols-2 flex justify-center">
                <div className=" flex flex-col text-center border mx-[100px] my-[70px] py-[50px] rounded-xl">
                    <h1 className="m-10 mt-0  text-4xl hover:underline">Login</h1>
                    {/* Login Form */}
                    <div className="mb-5">
                        <div className="mb-5">
                            <label htmlFor="" className="m-2 text-xl">Username</label>
                            <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" className="outline-none p-3 bg-gray-100 rounded-xl w-[300px]" placeholder="Username" />
                        </div>
                        <div>
                            <label htmlFor="" className="m-2 text-xl">Password</label>
                            <input value={password} onChange={(e) => setPassword(e.target.value)} type={showloginPassword ? "text" : "password"} className="outline-none p-3 bg-gray-100 rounded-xl w-[290px]" placeholder="Your Password" />
                            <button className="" onClick={() => setloginshowPassword(!showloginPassword)}>{showloginPassword ? <FaEye className="text-xl" /> : <FaEyeSlash className="text-xl" />}</button>
                        </div>
                        <div className="m-10">
                            <button disabled={isDisable} className={buttonClass}>Login</button>
                        </div>


                    </div>

                </div>
                <div className="flex flex-col text-center border mx-[50px] my-[70px] py-[50px] rounded-xl">
                    <h1 className="m-10 mt-0 text-4xl hover:underline">Sign Up</h1>
                    {/* Registration Form */}
                    <div>
                        <div className="mb-4">
                            <label htmlFor="" className="m-2 text-xl">Username</label>
                            <input value={registeruser} onChange={(e)=> setregisterUser(e.target.value)} type="text" className="outline-none p-3 bg-gray-100 rounded-xl w-[300px]" placeholder="Username" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="" className="m-2 ml-[50px] text-xl">Email</label>
                            <input value={email} onChange={(e)=> setEmail(e.target.value)} type="email" className="outline-none p-3 bg-gray-100 rounded-xl w-[300px]" placeholder="Your email" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="" className="m-2 text-xl ml-4">Password</label>
                            <input value={registerpassword} onChange={(e)=> setregisterPassword(e.target.value)} type={showregPassword ? "text" : "password"} className="outline-none p-3 bg-gray-100 rounded-xl w-[300px]" placeholder="Your Password" />
                            <button onClick={() => { setregshowPassword(!showregPassword) }}>{showregPassword ? <FaEye /> : <FaEyeSlash />}</button>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="" className="m-2 text-xl ml-[-55px]">Confirm Password</label>
                            <input value={confirmpassword} onChange={(e)=> setconfirmPassword(e.target.value)} type="password" className="outline-none p-3 bg-gray-100 rounded-xl w-[300px]" placeholder="Confirm Password" />
                        </div>
                        <div className="m-10">
                            <button disabled={signupisDisable} className={signupbtnClass}>Sign Up</button>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Login;