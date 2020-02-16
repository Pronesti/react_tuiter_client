import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Feed from './views/Feed';
import BrowserRouter from 'react-router-dom/BrowserRouter';
import Switch from 'react-router-dom/Switch';
import Route from 'react-router-dom/Route';
import Login from './views/Login';
import Register from './views/Register';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
    <Switch>
      <Route path="/feed">
        <Feed />
      </Route>
      <Route path="/home">
        <Feed />
      </Route>
      <Route path="/registerPage">
        <Register />
      </Route>
      <Route path="/loginPage">
        <Login />
      </Route>
      <Route path="/">
        <Feed />
      </Route>
    </Switch>
  </BrowserRouter>
    </div>
  );
}

export default App;
