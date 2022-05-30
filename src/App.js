import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import User from "./pages/User";
import Notfound from "./pages/Notfound";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import { GithubProvider } from "./context/github/GithubContext";
import { AlertProvider } from "./context/alert/AlertContext";

function App() {
    return (
        <GithubProvider>
            <AlertProvider>
                <div className="flex flex-col justify-between h-screen">
                    <Navbar />

                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/user/:login" element={<User />}></Route>
                        <Route path="/*" element={<Notfound />} />
                    </Routes>
                    <Footer />
                </div>
            </AlertProvider>
        </GithubProvider>
    );
}

export default App;
