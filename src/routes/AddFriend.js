import React, { useState } from "react";
import Alert from "../components/Alert";


export default function AddFriend() {
    const [alerts, setAlerts] = useState([]);
    const [email, setEmail] = useState("");

    function getFormValue({ target }, setter) {
        setter(target.value);
    }

    async function onSubmit() {
        return 0;
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
