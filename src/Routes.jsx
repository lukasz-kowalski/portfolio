import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ScrollToTop from './utils/ScrollToTop';
import NavBar from './components/NavBar/NavBar';
import HomePage from './components/HomePage/HomePage';
import Projects from './components/Projects/Projects';
import Bio from './components/Bio/Bio';
import Contact from './components/Contact/Contact';

const Routes = () => (
  <BrowserRouter>
    <NavBar />
    <Switch>
      <ScrollToTop>
        <Route path='/' component={HomePage} exact />
        <Route path='/projects' component={Projects} />
        <Route path='/Bio' component={Bio} />
        <Route path='/Contact' component={Contact} />
      </ScrollToTop>
    </Switch>
  </BrowserRouter>
);

export default Routes;
