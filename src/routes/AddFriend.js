import React, { useState } from "react";
import Alert from "../components/Alert";
import { URL } from "../Utils";
import PropTypes from 'prop-types';


export default function AddFriend({ token }) {
    const [alerts, setAlerts] = useState([]);
    const [email, setEmail] = useState("");

    function getFormValue({ target }, setter) {
        setter(target.value);
    }

    async function onSubmit(e) {
        setAlerts([]);
        e.preventDefault();

        const form = {
            email: token.email,
            other_email: email
        };

        await fetch(URL + "/group/add_friend", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(form),
        })
        .then((res) => res.json())
        .then((res) => {
            if (res.appStatus === 0) {
                return setAlerts([{msg: res.msg, type: "danger"}]);
            }
            return setAlerts([{msg: res.msg, type: "success"}]);
        })
        .catch((error) => {
            return setAlerts([{msg: error, type: "danger"}]);
        });
    }

    return (
        <div className="text-center mt-4">
            <form onSubmit={onSubmit} className="auth-form">
                <h1
                    className="fw-bold mb-4"
                >
                    <i className="fa-solid fa-circle-nodes"></i>
                    Add Friend
                </h1>

                <Alert alerts={alerts} />

                <div className="form-group">
                    <label htmlFor="email">Type in the Email Address of your friend</label>
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

                <button
                    type="submit"
                    className="btn btn-info btn-block btn-lg mt-2 mb-5" >
                    Send friend request
                </button>

            </form>
        </div>
    );
};

AddFriend.propTypes = {
    token: PropTypes.object.isRequired,
};
