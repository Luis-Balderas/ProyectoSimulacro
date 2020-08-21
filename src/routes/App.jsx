import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from '../components/Layout';
import NotFound from '../components/NotFound';
import EventDetails from '../pages/EventDetails';
import Home from '../pages/Home';
import Events from '../pages/Events';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/event' component={Events} />
        <Route exact path='/events' component={EventDetails} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
