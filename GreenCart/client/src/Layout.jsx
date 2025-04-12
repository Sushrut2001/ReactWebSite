// import { BrowserRouter} from "react-router-dom";
import { Routes, Route, useLocation } from "react-router-dom";
import NavBar from "./Components/Navbar";
import Home from "./Pages/Home";

const Layout = () => {

    const isSellerPath = useLocation().pathname.includes("seller");

    return (
        <div>
           
               {isSellerPath ? null : <NavBar />} 
                <div className={`${isSellerPath ? "" : "px-6 md:px-16 lg:px-24 xl:px-32"} `}>
                    <Routes>
                        <Route path="/" element={<Home />}></Route>
                    </Routes>
                </div>
         
        </div>
    )
}

export default Layout;