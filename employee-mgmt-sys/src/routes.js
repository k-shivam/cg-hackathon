import React from 'react';
import { Home } from './components/pages/Home';
import { About } from './components/pages/About';
import { Navbar } from './components/layout/Navbar';
import { Route, Routes as RR, Navigate } from 'react-router-dom';

export const Routes = () => {
  return (
      <RR>
      <Navbar>
        <Route exact path="/home" component={<Home/>} />
        <Route exact path="/">
          <Navigate to="/home" />
        </Route>
        <Route exact path="/about" component={<About/>} />
    </Navbar>
      </RR>
  );
};
