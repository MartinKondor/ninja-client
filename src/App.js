import * as styles from './App.css';
import { useEffect, useState } from 'react';
import { Route, Routes, useNavigate, Navigate } from "react-router-dom";
import SmallNavbar from "./components/SmallNavbar";
import Navbar from "./components/Navbar";
import SmallFooter from "./components/SmallFooter";
import Footer from "./components/Footer";
import Index from "./routes/Index";
import SignIn from "./routes/SignIn";
import SignUp from "./routes/SignUp";
import SignOut from "./routes/SignOut";
import Settings from "./routes/Settings";
import AddFriend from './routes/AddFriend';
import Friends from './routes/Friends';


export default function App() {
    const [token, setToken] = useState(null);

    // Only for testing
    useEffect(function () {
        if (token === null) {
            const a = {"_id":"62d697b053fc59cec668ce9c","first_name":"Joe","last_name":"Doe","password":"$2a$10$MmhCx3l5fFNwDSFSRh5KSOuu.N7gXeFHc.ZoSfrkWlM3MXUa/iWKW","email":"joe@doe.com","birthday":"2002-04-01"};
            setToken(a);
        }
    }, []);

    // If there is no user logged in, set only signin and signup openable
    if (token === null) {
        return (
            <div>
                <SmallNavbar />
                <Routes>
                    <Route path="/" element={<SignIn setToken={setToken} />} />
                    <Route path="/signin" element={<SignIn setToken={setToken} />} />
                    <Route path="/signup" element={<SignUp setToken={setToken} />} />
                    <Route path="" element={<Navigate to="/" />} />
                </Routes>
                <SmallFooter />
            </div>
        );
    }

    return (
        <div>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Index token={token} />} />
                <Route exact path="/add_friend" element={<AddFriend token={token} />} />
                <Route exact path="/friends" element={<Friends token={token} />} />
                <Route exact path="/settings" element={<Settings token={token} setToken={setToken} />} />
                <Route exact path="/signout" element={<SignOut setToken={setToken} />} />
                <Route path="" element={<Navigate to="/" />} />
            </Routes>
            <Footer />
        </div>
    );
    
};
