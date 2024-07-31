import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="navigation">
        <ul>
          {/* fonction fléchée anonyme */}
          <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active first-link" : "")}>
            <li>Accueil</li>
          </NavLink>
          <NavLink to="/ajout" className={(nav) => (nav.isActive ? "nav-active second-link" : "")}>
            <li>Ajout</li>
          </NavLink>
        </ul>
        </div>

    );
};

export default Navigation;