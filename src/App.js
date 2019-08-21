import React from 'react';
import Home from './Components/Home';
import { Route } from 'react-router-dom';

function App() {
  console.log('AM I RENDERED')
  return (

      <div>
        <Route exact path="/" component={Home} />
      </div>

  );
}

export default App;
