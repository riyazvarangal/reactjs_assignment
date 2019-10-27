import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Popup from './components/Popup';
import FilterApp from './components/FilterApp';
import Text from './components/Text';

class App extends Component {
  render() {
    return (
    <Router>
        <div>
          <h2>Welcome to Riyaz's React</h2>
        <div id="header">
          <h1>Tabs</h1>
          <ul>
            <li id="selected"><a href="/">Home</a></li>
            <li><a href="/text">Text</a></li>
            <li><a href="/filter">FilterApp</a></li>
          </ul>
        </div>

          <hr />
          <Switch>
              <Route exact path='/' component={Popup} />
              <Route path='/text' component={Text} />
              <Route path='/filter' component={FilterApp} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;