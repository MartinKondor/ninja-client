import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useNavigate, Link } from "react-router-dom";


export default function SignOut({ setToken }) {
    const navigate = useNavigate();

    useEffect(() => {
        setToken(null);
        navigate("/signin");
    }, []);

    return (
        <div className="pb-5 pr-5 pl-5 pt-5">
            <p className="fw-bold mt-3 mb-3 ml-3 mr-3">Signing Out...</p>
        </div>
    );
};

SignOut.propTypes = {
    setToken: PropTypes.func.isRequired
};
