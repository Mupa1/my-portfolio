import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/home/Home';

const App = () => (
  <div className="App">
    <BrowserRouter>
      <Route path="/" component={Home} />
    </BrowserRouter>
  </div>
);

export default App;
