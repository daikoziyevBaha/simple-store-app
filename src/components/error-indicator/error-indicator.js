import React from "react";
import './error-indicator.css';

const ErrorIndicator = (error) => {
    return (
        <div>{error.error}</div>
    )
}

export default ErrorIndicator;