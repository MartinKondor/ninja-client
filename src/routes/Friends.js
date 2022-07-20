import React, { useState, useEffect } from "react";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import Alert from "../components/Alert";
import PropTypes from 'prop-types';
import { URL } from "../Utils";


export default function Friends({ token }) {
    const [alerts, setAlerts] = useState([]);
    const [friends, setFriends] = useState([]);

    // First load
    useEffect(() => {
        setFriends([null, null, null, null, null, null,
            null, null, null, null, null, null,
            null, null, null, null, null, null,
            null, null, null, null, null, null]);

        // Asks server for data
        async function fetchData(sendJson) {
            await fetch(URL + "/group", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(sendJson),
            })
            .then((res) => res.json())
            .then((res) => {
                if (res.appStatus === 0) {
                    setAlerts([{msg: res.msg, type: "danger"}]);
                }
                console.log(res)
            })
            .catch((error) => {
                setAlerts([{msg: error, type: "danger"}]);
                return;
            });
        }
        fetchData({
            id: token._id
        });

    }, []);

    return (
        <div>
            <Alert alerts={alerts} />

            {friends.map((g, i) => (
                <div key={i}>
                    <p>{g || <Skeleton />}</p>
                </div>
            ))}

        </div>
    );
};

Friends.propTypes = {
    token: PropTypes.object.isRequired
};
