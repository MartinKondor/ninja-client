import React, { useState } from "react";
import { URL } from '../Utils';
import PropTypes from 'prop-types';
import Alert from "../components/Alert";


export default function Settings({ token, setToken }) {
    const [alerts, setAlerts] = useState([]);
    const [firstName, setFirstName] = useState(token.first_name);
    const [lastName, setLastName] = useState(token.last_name);
    const [newPassword, setNewPassword] = useState("");
    const [oldPassword, setOldPassword] = useState("");

    function getFormValue({ target }, setter) {
        setter(target.value);
    }

    async function onSubmit(e) {
        setAlerts([]);
        e.preventDefault();

        const form = {
            id: token._id,
            first_name: firstName,
            last_name: lastName,
            new_password: newPassword,
            old_password: oldPassword,
        };

        await fetch(URL + "/user/settings", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(form),
        })
        .then((res) => res.json())
        .then((res) => {
            if (res.appStatus === 0) {
                return setAlerts([{msg: res.msg, type: 'danger'}]);
            }
            return setAlerts([{msg: res.msg, type: "success"}]);
        });

        // Change token based on new data
        const currentToken = token;
        for (let key of Object.keys(form)) {
            if (key === "old_password" || key === 'id') {
                continue;
            }
            if (key === "new_password") {
                currentToken[key] = form[key];
                continue;
            }
            currentToken[key] = form[key];
        }
        setToken(currentToken);
    }

    return (
        <div className="text-center mt-4">
            <form onSubmit={onSubmit} className="auth-form">
                <h1
                    className="fw-bold mb-4 h1"
                >
                    <i className="fa-solid fa-gear"></i>
                    Settings
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
                
                <hr className="mt-4 mb-4" />

                <div className="form-group">
                    <label htmlFor="old_password">New Password</label>
                    <br />
                    <span className="small text-muted">Only change if you want to change your password</span> 
                    <input 
                        className="form-control"
                        placeholder="New Password"
                        type="password"
                        name="new_password"
                        value={newPassword}
                        onChange={(e) => getFormValue(e, setNewPassword)}
                    />
                </div>

                <hr className="mt-4 mb-4" />

                <div className="form-group">
                    <label htmlFor="old_password">Password</label> 
                    <br />
                    <span className="small text-muted">Required every time you make a change</span> 
                    <input 
                        className="form-control"
                        placeholder="Password"
                        type="password"
                        name="old_password"
                        value={oldPassword}
                        onChange={(e) => getFormValue(e, setOldPassword)}
                        required=""
                    />
                </div>

                <button
                    type="submit"
                    className="btn btn-info btn-block btn-lg mt-2 mb-5" >
                    Save changes
                </button>

            </form>
        </div>
    );
};

Settings.propTypes = {
    token: PropTypes.object.isRequired,
    setToken: PropTypes.func.isRequired
};
