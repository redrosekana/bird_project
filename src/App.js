import React from 'react';
import { Route, Switch} from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './componentRouter/home'
import Error from './componentRouter/error';
import Abouts from './components/about/abouts';
import './App.css'


function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route path="/" exact={true} component={Home}></Route>
        <Route path="/about" exact={true} component={Abouts}></Route>
        <Route path="/contact" exact={true} component={Error}></Route>
        <Route path="/member" exact={true} component={Error}></Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App;
