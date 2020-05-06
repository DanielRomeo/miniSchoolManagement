import React, {useEffect} from 'react';
import {Component} from 'react';
import M from 'materialize-css/dist/js/materialize.min.js'

function Navbar(){

    const navbarstyles={
        background: "#005f69"
    }
    const appStyle={
      background: "gray"
    }

    useEffect( ()=>{
      document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.sidenav');
            var instances = M.Sidenav.init(elems, {
                "edge": "right",
                "inDuration": 500
            });
          }); 
    } );

    return (
        <div className="App" style={appStyle}>

            <nav style={navbarstyles}>
              <div className="container">
                <div class="nav-wrapper">
                  <h4 href="#" class="brand-logo">Add Student...</h4>
                  <ul id="nav-mobile" class="right hide-on-med-and-down">
                    {/*li's*/}
                  </ul>
                </div>
              </div>  
            </nav>

        </div>
    )
}


export default Navbar;






























