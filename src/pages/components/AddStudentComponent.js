import React, { Component, useEffect} from 'react';
import { Link } from 'react-router-dom'


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

					<div class="row">
					    <div class="col s12 m12">
					      <div class="card blue-grey darken-1">
					        <div class="card-content white-text">
					          <span class="card-title">Add Students First and Last name</span>
					          
					        </div>
					       
					      </div>
					    </div>
					  </div>

					<br />

					<div class="row">
					    <form class="col s12">
					      <div class="row">
					        
					        <div class="input-field col s6">
					          
					          <input onChange={handleChange('firstName')} 
					          id="firstname" 
					          type="text" class="validate"
					          value={values.firstName}
					          />
					          <label for="firstname">First Name</label>
					        </div>
					        
					        <div class="input-field col s6">

					          <input onChange={handleChange('lastName')}
					           	id="lastname" type="text" 
					           	class="validate"
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

					<div class="row">
					    <div class="col s12 m12">
					      <div class="card blue-grey darken-1">
					        <div class="card-content white-text">
					        	<p>Almost Done...</p>
					          	<span class="card-title">Add Students Module and Student Number</span>
					        </div>
					       
					      </div>
					    </div>
					  </div>

					<br />

					<div class="row">
					    <form class="col s12">
					      <div class="row">
					        <div class="input-field col s6">
					          <input onChange={handleChange('module')} value={values.module} placeholder="Module" id="module" type="text" class="validate"/>
					          <label for="module">Module</label>
					        </div>
					        <div class="input-field col s6">
					          <input onChange={handleChange('studentNumber')} value={values.studentNumber} placeholder="Student number" id="studentNumber" type="number" class="validate"/>
					          <label for="studentNumber">Student Number</label>
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
			"studentnumber": values.studentNumber,
			"active": true
		};
			const url = "http://localhost:5000/students" 
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

				<div class="row">
				    <div class="col s12 m12">
				      <div style={{minHeight: "200px"}} class="card blue-grey darken-1">
				        <div class="card-content white-text">
				          <span class="card-title">Confirm User Details</span>
				          
				          <div className="col m6">
				          	 <p style={dataText} className="orange-text"> First Name : {values.firstName}</p>
				          </div>
				          <div className="col m6">
				          	 <p style={dataText} className="orange-text">Last Name : {values.lastName}</p>
				          </div>
				         <div className="col m6">
				          <p style={dataText} className="orange-text">Student Number : {values.studentNumber}</p>
				          </div>
				         	<div className="col m6">
				          	 <p style={dataText} className="orange-text">Module Code : {values.module}</p>
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

					<div class="row">
					    <div class="col s12 m12">
					      <h3>Well done, You have successfully added a Student.</h3>
					    	
					  	
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
		studentNumber: ""
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
		const {firstName, lastName, module, studentNumber } = this.state;
		const values = {firstName, lastName, module, studentNumber };


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

