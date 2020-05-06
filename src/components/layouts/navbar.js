import React, {useEffect, useState} from 'react';
import {Component} from 'react';

// import 'materialize-css/dist/css/materialize.min.css'
// import 'materialize-css/dist/js/materialize.min.js'

import M from 'materialize-css/dist/js/materialize.min.js'

function Navbar(){

    const [students, setStudents] = useState([]);

    const navbarstyles={
        background: "#005f69"
       
    }

    useEffect( ()=>{
      document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.sidenav');
            var instances = M.Sidenav.init(elems, {
                "edge": "right",
                "inDuration": 500
            });
          }); 
    }, [] );

    useEffect( ()=>{
      var data = getData();
    }, [] );


    var getData = async() =>{
      const url = "http://localhost:5000/students";
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
        setStudents(data);
      // setLoading(false);
    }

    // loop through posts and count how many results:
    const lengthOfStudents = students.length;

    return (
        <div  className="App">

          <nav style={navbarstyles}>
            <div className="container">
                <div className="nav-wrapper">

                  <a data-target="slide-out" className="sidenav-trigger show-on-large hoverable">Show Stats</a>  
                </div>
            </div>    
          </nav>

          <ul id="slide-out" className="sidenav">



            <li>
              <div className="container">

                <h3>DATABASE</h3>
                
                <div className="divider"></div>

                <p>Students : {lengthOfStudents}</p>
                <p>Teachers : 0</p>

               
              </div>

            </li>
          </ul>

        </div>
    )
}


export default Navbar;






























