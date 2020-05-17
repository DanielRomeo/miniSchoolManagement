import React, { Component, useEffect} from 'react';
import { Link } from 'react-router-dom'
import M from 'materialize-css/dist/js/materialize.min.js'
console.log(M);

class FormUserDetails extends React.Component{
	 
	 continue = e => {
	 	e.preventDefault();
	 	this.props.nextStep();
	 }


	render(){
		const {values, handleChange} = this.props;

		return(
			<div>
				<div className="container">
					<br />

					<div className="row">
					    <div className="col s12 m12">
					      <div className="card blue-grey darken-1">
					        <div className="card-content white-text">
					          <span className="card-title">Add Teachers First and Last name</span>
					          
					        </div>
					       
					      </div>
					    </div>
					  </div>

					<br />

					<div className="row">
					    <form className="col s12">
					      <div className="row">
					        
					        <div className="input-field col s6">
					          
					          <input onChange={handleChange('firstName')} 
					          id="firstname" 
					          type="text" className="validate"
					          value={values.firstName}
					          />
					          <label for="firstname">First Name</label>
					        </div>
					        
					        <div className="input-field col s6">

					          <input onChange={handleChange('lastName')}
					           	id="lastname" type="text" 
					           	className="validate"
					           	value={values.lastName}
					           	/>

					          <label for="lastname">Last Name</label>
					        </div>
					      </div>
					    </form>
					</div>  

					<button className="btn green" onClick={this.continue}>Continue</button>

				</div>	   
			</div>
		)
	}
}

// 

class PersonalFormDetails extends React.Component{

	
	componentDidMount(){
		document.addEventListener('DOMContentLoaded', function() {
		    var elems = document.querySelectorAll('select');
		    var instances = M.FormSelect.init(elems, {});
		  });
	}


	 continue = e => {
	 	e.preventDefault();
	 	this.props.nextStep();
	 }

	 previous = e => {
	 	e.preventDefault();
	 	this.props.prevStep()
	 }

	 


	render(){
		const {values, handleChange} = this.props;

		return(
			<div>
				<div className="container">
					<br />

					<div className="row">
					    <div className="col s12 m12">
					      <div className="card blue-grey darken-1">
					        <div className="card-content white-text">
					        	<p>Almost Done...</p>
					          	<span className="card-title">Add Teacher's Module and Module Code</span>
					        </div>
					       
					      </div>
					    </div>
					  </div>

					<br />

					<div className="row">
					    <form className="col s12">
					      <div className="row">
					        <div className="input-field col s6">
					          <input onChange={handleChange('module')} value={values.module} placeholder="Module" id="module" type="text" class="validate"/>
					          <label for="module">Module</label>
					        </div>
					        <div className="input-field col s6">
					          
					          <input onChange={handleChange('available')} value={values.available} placeholder="true/false?" id="available" type="text" class="validate"></input>	
					          <label htmlFor="available">Availabilty</label>
					        </div>
					      </div>
					    </form>
					</div>  

					<div className="row">
						<div className="col m6 s6 l4">
							<button className="btn purple lighten-1" onClick={this.previous}> Previous </button>
						</div>

						<div className="col m6 s6 l4">
							<button className="btn green" onClick={this.continue}>Next </button>
						</div>
					</div>

				</div>	   
			</div>
		)
	}
}

// 

function Confirm( {values, nextStep, prevStep} ){

	// useEffect(
	// 	()=>{
			
	// 	}
	// , []);

	console.log(values)

	function postData(){
		const data = {
			"firstname": values.firstName ,
			"lastname" : values.lastName,
			"module": values.module,
			"available": values.available
		};
			const url = "http://localhost:5000/teachers" 
			fetch(url, {
			  method: 'POST', 
			  headers: {
			    'Content-Type': 'application/json',
			  },
			  body: JSON.stringify(data),
			})
			.then(response => response.json())
			.then(data => {
			  console.log('Success:', data);
			})
			.catch((error) => {
			  console.error('Error:', error);
		});
	}

	function goOn(e){
		e.preventDefault();
		postData();
	
	 	// make user go to next page:
	 	
	 	nextStep();
	}


	

	/*--------------------------------------------------------------*/

	 function previous(e){
	 	e.preventDefault();
	 	prevStep()
	 }


	// const {values} = this.props;

	const dataText = {
	 	fontSize: "17px"
	 }

	return(
		<div>
			<div className="container">
				<br />

				<div className="row">
				    <div className="col s12 m12">
				      <div style={{minHeight: "200px"}} className="card blue-grey darken-1">
				        <div className="card-content white-text">
				          <span className="card-title">Confirm User Details</span>
				          
				          <div className="col m6">
				          	 <p style={dataText} className="orange-text"> First Name : {values.firstName}</p>
				          </div>
				          <div className="col m6">
				          	 <p style={dataText} className="orange-text">Last Name : {values.lastName}</p>
				          </div>
				         
				         	<div className="col m6">
				          	 <p style={dataText} className="orange-text">Module Code : {values.module}</p>
				          </div>

				          <div className="col m6">
				          <p style={dataText} className="orange-text"> Availabilty : {values.available}</p>
				          </div>
				         

				        </div>
				      </div>
				    </div>
				</div>

				 
				<div className="row">
					<div className="col m6 s6 l4">
						<button className="btn purple lighten-1" onClick={previous}> Previous </button>
					</div>

					<div className="col m6 s6 l4">
						<button className="btn green" onClick={goOn}>CONFIRM </button>
					</div>
				</div>	
			</div>	   
		</div>
	)
}

//

class Success extends React.Component{
	 continue = e => {
	 	e.preventDefault();
	 	this.props.nextStep();
	 }

	

	render(){
		const {values} = this.props;

		return(
			<div>
				<div className="container">
					<br />

					<div className="row">
					    <div className="col s12 m12">
					      <h3>Well done, You have successfully added a Teacher.</h3>
					    	
					  	
							<Link to='/'>
								<button className="btn green">Go back to Home Page </button>

							</Link>
						</div>
					</div>						
				</div>	   
			</div>
		)
	}
}


// 
class UserForm extends Component{

	state = {
		step: 1,
		firstName: "",
		lastName: "",
		module: "",
		available: ""
	}

	//proceed to next step:

	nextStep = () =>{
		const { step } = this.state;
		this.setState({
			step: step + 1
		});  
	}

	prevStep = () =>{
		const { step } = this.state;
		this.setState({
			step: step - 1
		});  
	}

	// handle field change:
	handleChange = input => e => {
		this.setState({[input] : e.target.value})
	}

	render(){

		const {step } = this.state;
		const {firstName, lastName, module, available } = this.state;
		const values = {firstName, lastName, module, available };


		switch(step){
			case 1:
				return(
					<FormUserDetails nextStep={this.nextStep} handleChange={this.handleChange } values={values} />
				)
			case 2:
				return (
					<PersonalFormDetails nextStep={this.nextStep} prevStep={this.prevStep} handleChange={this.handleChange} values={values} />
				)
			case 3:
				return (
					<Confirm nextStep={this.nextStep} prevStep={this.prevStep} values={values} />
				)
			case 4:
				return (
					<Success nextStep={this.nextStep} values={values} />

				)		
		}
    }
}


export default UserForm;

