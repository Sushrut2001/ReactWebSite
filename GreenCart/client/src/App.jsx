import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import NavBar from "./Components/Navbar";

const App = () => {
    return (
        <div>
            <BrowserRouter>
            <NavBar/>
                <Routes>
                {/* <Route path="/" element={<HeroSection/>}></Route> */}
                {/* <Route path="/Recipes" element={<Recipes/>}></Route>  */}
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;