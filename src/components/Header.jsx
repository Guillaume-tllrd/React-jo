import React from 'react';
import Navigation from './Navigation';

const Header = () => {
    return (
        <div className='header'>
            <img src="./logo.png" alt="logoJO" />
            <h1>Tableau des athlètes français médaillés</h1>
            <Navigation/>
        </div>
    );
};

export default Header;