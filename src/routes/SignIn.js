import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { URL, signinUser } from '../Utils';
import PropTypes from 'prop-types';
import ErrorList from "../components/ErrorList";


export default function SignIn({ setToken }) {
    const [errors, setErrors] = useState([]);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    function getFormValue({ target }, setter) {
        setter(target.value);
    }

    async function onSubmit(e) {
        e.preventDefault();

        const user = {
            email: email,
            password: password,
        };
        await signinUser(user.email, user.password, setToken, setErrors);
        if (errors.length === 0) navigate("/");
    }

    return (
        <div className="text-center mt-4">
            <form onSubmit={onSubmit} className="auth-form">
                <h1
                    className="fw-bold mb-4 h1"
                >
                    Sign In
                </h1>

                <ErrorList errors={errors} />

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
        
                <span>
                    <Link to="/signup">Don't have an account?</Link>
                </span>

                <button
                    type="submit"
                    className="btn btn-info btn-block btn-lg mt-2 mb-5" >
                    Sign In
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

SignIn.propTypes = {
    setToken: PropTypes.func.isRequired
};
