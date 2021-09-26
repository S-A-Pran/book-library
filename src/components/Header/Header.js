import React from 'react';
import './Header.css';
const Header = () => {
    return (
        <div className='header'>
            {/* adding header info */}
            <h1>Tour Guide</h1>
            <h6>Explore The Beauty of Bangladesh</h6>  
            <small className="text-warning">N.B: We've showed cost considering Dhaka as starting point and considering 3 star hotel.<br/> Hotel and time may affect the budget. This is an approximate budget to give you the idea only.</small>
            <h3>Average Budget needed 10000 Taka</h3>
        </div>
    );
};

export default Header;