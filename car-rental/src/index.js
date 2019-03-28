import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Link, BrowserRouter as Router} from 'react-router-dom';
import Landing from './components/Landing';
import SearchResults from './components/searchResults';

const routing = (
  <Router>
    <div>
      <Route exact path="/" component={Landing} />
      <Route path="/search" component={SearchResults} />
    </div>
  </Router>
  );

ReactDOM.render(routing, document.getElementById('root'));