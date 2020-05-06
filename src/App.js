import React, {useState, useEffect} from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './css/App.css';
import Home from './pages/Home.js'
import About from './pages/About.js'
import AddStudent from './pages/AddStudent.js'
import AddTeacher from './pages/AddTeacher.js'

const App = ()=>{

    return(
      <BrowserRouter>
        <Switch>
            <Route path='/'  exact component={Home} />
            <Route path='/About' exact  component={About} />
            <Route path='/AddStudent' exact  component={AddStudent} />
            <Route path='/AddTeacher' exact  component={AddTeacher} />

            <Route path='/'  render={ ()=> <div>
              Page was not found: 404
            </div>} />
            </Switch>
      </BrowserRouter>
    )
}



export default App;







