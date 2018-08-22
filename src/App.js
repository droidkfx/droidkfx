import React, { Component } from 'react';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import logo from './resources/logo.svg';
import Footer from './templates/footer';
import './css/App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <div className="App">
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
            <h2 className="App-sub-header">We Are currently under construction please visit <a href="https://github.com/droidkfx/droidkfx">GitHub</a> to see our proggress.</h2>
            <h2 className="App-sub-header"><a href="https://www.linkedin.com/in/kyle-myers-25148286/">LinkedIn</a> is also a good source for information.</h2>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/About/" component={About} />
              <Route path="/Projects/" component={Projects} />
              <Route path="/Contact/" component={Contact} />
            </Switch>
          </div>
          <Footer />          
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
