import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Components/Navbar";
import Home from "./Pages/Home";
import Layout from "./Layout"; // We'll move useLocation() logic here

const App = () => {
    return (
        <BrowserRouter>
            <Layout />
        </BrowserRouter>
    );
};

export default App;
