import React from 'react';
import { Router, Switch } from 'react-router-dom';
import history from './utilities/history';
import Register from './components/register';
import ConfigRouter from './components/register';


export const App: React.FC = () => {

  return (
  <Router history={history}  >
          <Switch>
              {/* <ConfigRouter path="/register" exact component={Register} /> */}
              {/* <PrivateRouter path="/project" exact component={Project} />
              <PrivateRouter path="/project2" exact component={Project2} /> */}
              <ConfigRouter path="/register" exact component={Register} />
          </Switch>    
    </Router>
  );
};


