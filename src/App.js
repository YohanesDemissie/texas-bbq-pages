import React from 'react';
import Home from './Components/Home';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router history={history} basename={process.env.PUBLIC_URL}>
        <Route exact path="/" component={Home} />
      </Router>

  );
}

export default App;
