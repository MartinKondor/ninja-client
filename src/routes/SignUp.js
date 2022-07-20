import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { URL, signinUser } from '../Utils';
import PropTypes from 'prop-types';
import Alert from "../components/Alert";


export default function SignUp({ setToken }) {
    const [alerts, setAlerts] = useState([]);

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [email, setEmail] = useState("");
    const [birthday, setBirthday] = useState("");
    const navigate = useNavigate();

    function getFormValue({ target }, setter) {
        setter(target.value);
    }

    async function onSubmit(e) {
        setAlerts([]);
        e.preventDefault();

        const user = {
            first_name: firstName,
            last_name: lastName,
            password: password,
            email: email,
            birthday: birthday
        };
        const form = {...user, password2: password2};

        await fetch(URL + "/user/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(form),
        })
        .then((res) => res.json())
        .then((res) => {
            if (res.appStatus === 0) {
                setAlerts([{msg: res.msg, type: "danger"}]);
            }
        })
        .catch((error) => {
            setAlerts([{msg: error, type: "danger"}]);
            return;
        });
        await signinUser(user.email, user.password, setToken, setAlerts);
        if (alerts.length === 0) navigate("/");
    }

    return (
        <div className="text-center mt-4">
            <form onSubmit={onSubmit} className="auth-form">
                <h1
                    className="fw-bold mb-4"
                >
                    <i className="fa-solid fa-user-plus"></i>
                    Sign Up
                </h1>

                <Alert alerts={alerts} />

                <div className="form-group">
                    <label htmlFor="first_name">First Name</label> 
                    <input 
                        className="form-control"
                        placeholder="First Name"
                        type="text"
                        name="first_name"
                        value={firstName}
                        onChange={(e) => getFormValue(e, setFirstName)}
                        required=""
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="last_name">Last Name</label> 
                    <input 
                        className="form-control"
                        placeholder="Last Name"
                        type="text"
                        name="last_name"
                        value={lastName}
                        onChange={(e) => getFormValue(e, setLastName)}
                        required=""
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label> 
                    <input 
                        className="form-control"
                        placeholder="Password"
                        type="password"
                        name="password"
                        value={password}
                        onChange={(e) => getFormValue(e, setPassword)}
                        required=""
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password2">Password again</label> 
                    <input 
                        className="form-control"
                        placeholder="Password again"
                        type="password"
                        name="password2"
                        value={password2}
                        onChange={(e) => getFormValue(e, setPassword2)}
                        required=""
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label> 
                    <input 
                        className="form-control"
                        placeholder="Email"
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => getFormValue(e, setEmail)}
                        required=""
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="birthday">Birthday</label> 
                    <input 
                        className="form-control"
                        placeholder="Birthday"
                        type="date"
                        name="birthday"
                        value={birthday}
                        onChange={(e) => getFormValue(e, setBirthday)}
                        required=""
                    />
                </div>

                <span>
                    <Link to="/signin">Already have an account?</Link>
                </span>

                <button
                    type="submit"
                    className="btn btn-info btn-block btn-lg mt-2 mb-5" >
                    Sign Up
                </button>

                {/*
                <button
                    className="btn btn-primary">
                    Sign in with Apple
                </button>
                <button
                    className="btn btn-primary">
                    Sign in with Google
                </button>
                <button
                    className="btn btn-primary">
                    Sign in with Facebook
                </button>
                */}

            </form>
        </div>
    );
};

SignUp.propTypes = {
    setToken: PropTypes.func.isRequired
};
