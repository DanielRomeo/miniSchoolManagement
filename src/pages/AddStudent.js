import React, {useState, useEffect} from 'react';
import UserForm from './components/AddStudentComponent'
import Navbar from './components/navbar'


const AddStudent = () =>{


    return(
     <div>
     	<Navbar></Navbar>
     	<UserForm></UserForm>
     </div>
    )
}


export default AddStudent;

