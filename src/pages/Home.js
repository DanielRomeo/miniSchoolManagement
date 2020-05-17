import React, {useState , useEffect} from 'react';
import { Link } from 'react-router-dom';
import '../css/Home.css';



import Navbar from '../components/layouts/navbar.js';


const Home = ()=>{

	const [students, setStudents] = useState([]);
	const [teachers, setTeachers] = useState([]);


	const mainButtonStyles={
		"width": "100%",
		"height": "100%",
		"textDecoration": "none",
		"color": "white"
	}

	const linkToMainButtonStyles ={
		"width": "100%",
		"height": "200px",
		"textDecoration": "none"
	}

	/* get students from api and display:*/
	useEffect( ()=>{
		getStudentData(); 
	}
	, []);

	
	var getStudentData = async() =>{
		const url = "http://localhost:5000/students";
		const response = await fetch(url);
		const data = await response.json();
		// console.log(data.data);
		setStudents(data);
	}


    return(
    	<div>
	    	<Navbar></Navbar>

	    	<br></br>	

			<div className="container">

				<div className="row">
					
					<div className="col m6 s12 l6 ">
						<Link style={linkToMainButtonStyles} to='./AddStudent' className="valign-wrapper">
							<button style={mainButtonStyles} className="btn blue lighten-1">Add A Student</button>	
						</Link>  	
					</div>

					<div className="col m6 s12 l6">
						<Link style={linkToMainButtonStyles} to='./AddTeacher' className="valign-wrapper">
							<button style={mainButtonStyles} className="btn indigo lighten-1">Add A Teacher</button>	
						</Link>  	
					</div>

				</div>{/*end of row*/}

				<hr/>
				{/* import some kind of statistics or data here:*/}

				<div className="row">
					{
						students.map( person => (

							// everytime we map through each person, send a request to random api and get an image:


		                    <div key={person.id} className="col s12 m7">
		                      <div className="card">
		                        <div className="card-image">
		                          <img ></img>
		                          <span className="card-title"></span>
		                        </div>
		                        <div className="card-content">
		                          <p>{person.firstname}</p>
		                          <p>{person.lastname}</p>
		                        </div>
		                        <div className="card-action">
		                          <a href="#">{person.studentnumber}</a>
		                        </div>
		                      </div>
		                    </div>
		                ))
					}
				</div>

				<hr />


				{/*import teachers here*/}

				{/*import students here*/}
	      </div>
	    </div>  
    )
}



export default Home;






