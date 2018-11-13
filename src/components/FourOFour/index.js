import React from 'react';
import { NavLink } from 'react-router-dom';

const FourOFour = () => (
    <div>
        <h1>404 - Page not found.</h1>
        <p>Go back to <NavLink to="/">Movies</NavLink></p>
    </div>
);

export default FourOFour;