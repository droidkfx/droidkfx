import React from 'react';
import logo from '../resources/logo.svg';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
        <header className="App-header">
            <Link to="/">
                <img src={logo} className="App-logo" alt="logo" />
            </Link>
            <h1 className="App-title">Welcome to Droidkfx</h1>
            <Link to="/">Home</Link> 
            <Link to="/About/">About</Link>
            <Link to="/Projects/">Projects</Link>
            <Link to="/Contact/">Contact</Link>
        </header>
    );
  }
}

export default Header;