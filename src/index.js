import React from 'react';
import ReactDOM from 'react-dom'; // Import ReactDOM correctly
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // Combine all imports in one line
import './index.css';
import App from './App';
import Navbar from './components/Navbar';
import Content from './components/content';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Router>
    <React.StrictMode>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Content} />
        <Route path="/app" component={App} />
      </Switch>
    </React.StrictMode>
  </Router>
);


