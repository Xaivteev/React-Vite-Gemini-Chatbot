import { React } from 'react';
import './LoadingIndicator.css';
import { FaSpinner } from "react-icons/fa";

const LoadingIndicator = ({ size, margin }) => {
    const spinnerStyle = {
        width: `${size || 100}px`,
        height: `${size || 100}px`,
        margin: `${margin || 0}px`,
        animation: 'spin 1s linear infinite'
    }

    return (
        <div className="loader">
            <FaSpinner style={spinnerStyle}/>
        </div>
    );
}

export default LoadingIndicator;