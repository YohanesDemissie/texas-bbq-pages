import React from 'react';
import Home from './Components/Home';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <React.Fragment>
        <Route exact path="/" component={Home} />
      </React.Fragment>
    </Router>
  );
}

export default App;
