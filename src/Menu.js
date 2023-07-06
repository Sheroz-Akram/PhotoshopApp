import React from 'react';
import { NavLink } from 'react-router-dom';
import './Menu.css'

function Menu() {
    return (
        <ul className="menu">
            <ul>
                <li><NavLink exact activeClassName="active" to="/">Home</NavLink></li>
                <li><NavLink activeClassName="active" to="/PhotoApp">Photoshop App</NavLink></li>
                <li><NavLink activeClassName="active" to="/Help">Help Page</NavLink></li>
            </ul>
        </ul>
    );
}

export default Menu;
