import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import Header from './Header';
import AxiosVersion from './AxiosVersion';
import FetchVersion from './FetchVersion';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Header />
          <Route path="/fetch" exact component={FetchVersion} />
          <Route path="/axios" exact component={AxiosVersion} />
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App;
