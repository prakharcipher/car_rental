import React from 'react';
import ReactDOM from 'react-dom';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Landing from './components/Landing';
import SearchResults from './components/searchResults';
import reducer from './reducers';

const store = createStore(reducer);

const routing = (
  <Router>
    <div>
      <Route exact path="/" component={Landing} />
      <Route path="/search" component={SearchResults} />
    </div>
  </Router>
  );

ReactDOM.render(<Provider store={store}>{routing}</Provider>, document.getElementById('root'));