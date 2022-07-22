import * as styles from './Friends.css';
import React, { useState, useEffect } from "react";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import Alert from "../components/Alert";
import FriendCard from "../components/FriendCard";
import PropTypes from 'prop-types';
import { URL } from "../Utils";


export default function Friends({ token }) {
    const [isLoaded, setIsLoaded] = useState(false);
    const [alerts, setAlerts] = useState([]);
    const [friends, setFriends] = useState([]);

    // First load
    useEffect(() => {
        setFriends([null, null, null, null,
            null, null, null, null,
            null, null, null, null]);

        async function fetchFriendsData(sendJson) {
            await fetch(URL + "/user", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(sendJson),
            })
            .then((res) => res.json())
            .then((res) => {
                if (res.appStatus === 0) {
                    return setAlerts([{msg: res.msg, type: "danger"}]);
                }
                if (res.result.is_active) {
                    if (!isLoaded) {
                        setIsLoaded(true);
                        setFriends([]);
                    }
                    setFriends([...friends, res.result]);
                }
            })
            .catch((error) => {
                setAlerts([{msg: error, type: "danger"}]);
                return;
            });
        }

        // Asks server for data
        async function fetchData(sendJson) {
            await fetch(URL + "/group/friends", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(sendJson),
            })
            .then((res) => res.json())
            .then((res) => {
                if (res.appStatus === 0) {
                    return setAlerts([{msg: res.msg, type: "danger"}]);
                }
                return res.result.map((u) => {
                    return fetchFriendsData({id: u});
                });
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

            {friends.map((f, i) => {
                return (
                    <div key={i} className="friend-card-container">
                        {isLoaded ?
                            <FriendCard friend={f} />
                        : 
                            (<div>
                                <Skeleton height={20} />
                                <Skeleton height={12} count={2} />
                            </div>)
                        }
                    </div>
                );
            })}

        </div>
    );
};

Friends.propTypes = {
    token: PropTypes.object.isRequired
};
