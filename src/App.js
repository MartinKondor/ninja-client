import * as styles from './App.css';
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Index from "./routes/Index";
import SignIn from "./routes/SignIn";
import SignUp from "./routes/SignUp";
import SignOut from "./routes/SignOut";
import Settings from "./routes/Settings";
import AddFriend from './routes/AddFriend';
import Friends from './routes/Friends';
import Contact from './routes/Contact';
import Legal from './routes/Legal';
import About from './routes/About';
import { useState } from 'react';

export default function App() {

    function getToken() {
        const tokenString = sessionStorage.getItem('token');
        const userToken = JSON.parse(tokenString);
        return userToken;
    }

    const [token, setToken] = useState(getToken());

    function setTokenSession(newToken) {
        sessionStorage.setItem('token', JSON.stringify(newToken));
        setToken(newToken);
    }

    // If there is no user logged in, set only signin and signup openable
    if (token === null) {
        return (
            <div>
                <Navbar token={token} />
                <Routes>
                    <Route exact path="/" element={<SignIn setToken={setTokenSession} />} />
                    <Route exact path="/signin" element={<SignIn setToken={setTokenSession} />} />
                    <Route exact path="/signup" element={<SignUp setToken={setTokenSession} />} />

                    <Route exact path="/contact" element={<Contact />} />
                    <Route exact path="/legal" element={<Legal />} />
                    <Route exact path="/about" element={<About />} />

                    <Route path="*" element={<SignIn setToken={setTokenSession} />} />
                </Routes>
                <Footer />
            </div>
        );
    }

    return (
        <div>
            <Navbar token={token} />
            <Routes>
                <Route exact path="/" element={<Index token={token} />} />
                <Route exact path="/add_friend" element={<AddFriend token={token} />} />
                <Route exact path="/friends" element={<Friends token={token} />} />
                <Route exact path="/settings" element={<Settings token={token} setToken={setTokenSession} />} />
                <Route exact path="/signout" element={<SignOut setToken={setTokenSession} />} />
                
                <Route exact path="/contact" element={<Contact />} />
                <Route exact path="/legal" element={<Legal />} />
                <Route exact path="/about" element={<About />} />

                <Route path="*" element={<Index token={token} />} />
            </Routes>
            <Footer />
        </div>
    );
    
};
