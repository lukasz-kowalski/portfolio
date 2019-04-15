import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ScrollToTop from './utils/ScrollToTop';
import NavBar from './components/NavBar/NavBar';
import HomePage from './components/HomePage/HomePage';
import Projects from './components/Projects/Projects';

const Routes = () => (
  <BrowserRouter>
    <NavBar />
    <Switch>
      <ScrollToTop>
        <Route path='/' component={HomePage} exact />
        <Route path='/projects' component={Projects} />
      </ScrollToTop>
    </Switch>
  </BrowserRouter>
);

export default Routes;
