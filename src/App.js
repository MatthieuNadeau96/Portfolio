import React from 'react';

import { Header } from './components/Header';
import Apps from './components/Apps';
import About from './components/About';
import Home from './components/Home';
import './App.css';
import { HashRouter, Route } from 'react-router-dom';


function App() {

  return (
    <HashRouter basename='/'>
      <div className="App">
        <Header />
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/apps' component={Apps} />

      </div >
    </HashRouter>
    // <Router history={browserHistory}>
    //   <Route path={'apps'} component={'Apps'} />
    //   <Route path={'about'} component={'About'} />
    //   <Route path={'resume'} component={'Resume'} />
    // </Router>

  );
}

export default App;
