import React, { useState, useEffect } from "react";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import Alert from "../components/Alert";
import PropTypes from 'prop-types';
import { URL } from "../Utils";


export default function Index({ token }) {
    const [alerts, setAlerts] = useState([]);
    const [groups, setGroups] = useState([]);
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        // Contacts changed
    }, [groups]);

    useEffect(() => {
        // Messages changed
    }, [messages]);

    // First load
    useEffect(() => {
        setGroups([null, null, null, null, null, null,
            null, null, null, null, null, null,
            null, null, null, null, null, null,
            null, null, null, null, null, null]);
        setMessages([null, null, null, null, null, null,
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

            <div className="row">
                <div className="col-sm-2 bg-light">
                    
                    {/** List of people/groups we are in contact with */}
                    {groups.map((g, i) => (
                        <div key={i}>
                            <p>{g || <Skeleton />}</p>
                        </div>
                    ))}

                </div>
                <div className="col-sm-10">
                    
                    {/** Messages with the x-th person */}
                    {messages.map((m, i) => (
                        <div key={i}>
                            <p>{m || <Skeleton />}</p>
                        </div>
                    ))} 

                </div>
            </div>
        </div>
    );
};

Index.propTypes = {
    token: PropTypes.object.isRequired
};
