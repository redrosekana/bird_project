import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { Route, Switch} from 'react-router-dom'
import Navbar from './components/navbar';
import Home from './componentRouter/home'
import Error from './componentRouter/error';
import Abouts from './components/about/abouts';
import './App.css'


function App() {
  return (
    <>
      <Navbar/>
      <Switch>
        <Route path="/" exact={true} component={Home}></Route>
        <Route path="/about" exact={true} component={Abouts}></Route>
        <Route path="/contact" exact={true} component={Error}></Route>
        <Route path="/member" exact={true} component={Error}></Route>
      </Switch>
    </>
  )
}

export default App;
