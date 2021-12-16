import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import App from './App.jsx';
import Landing from './templates/Landing.jsx';
import './index.css';

const Routing = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/ar" component={Landing} />
    </Switch>
  </Router>
);

ReactDOM.render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>,
  document.getElementById('lau-form'),
);

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/concepts/hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept();
}
