import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import AppContext from './AppContext';

const Navigation = () => {
  const app = useContext(AppContext);
  
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
          <NavLink to="/favoris" className={(nav) => (nav.isActive ? "nav-active second-link" : "")}>
            <li>Favoris</li>
          </NavLink>
          {app.theme === "dark" ? (
            <button className='btntogglelight' onClick={app.toggleTheme}>Light mode</button>
          ) : (
            <button className='btntoggledark' onClick={app.toggleTheme}>Dark mode</button>
          )}
          
        </ul>
        </div>

    );
};

export default Navigation;