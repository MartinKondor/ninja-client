import React, { useState, useEffect } from "react";


export default function Index() {
    const [contacts, setContacts] = useState([]);
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        // Contacts changed
    }, [contacts]);

    useEffect(() => {
        // Messages changed
    }, [messages]);

    return (
        <div>
            <div className="row">
                <div className="col-sm-2 bg-light">
                    
                    {/** List of people we are in contact with */}
                    

                </div>
                <div className="col-sm-10">
                    
                    {/** Messages with the x-th person */}

                </div>
            </div>
        </div>
    );
};
