import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './templates/Footer';
import Header from './templates/Header';
import Construction from './resources/Construction';
import './css/App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <div className="App">
            <Header />
            <Construction />
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
