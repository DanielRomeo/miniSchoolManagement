import React, {useState, useEffect} from 'react';
import UserForm from './components/AddTeacherComponent'
import Navbar from './components/navbar'


const AddTeacher = () =>{


    return(
     <div>
     	<Navbar></Navbar>
     	<UserForm></UserForm>
     </div>
    )
}


export default AddTeacher;

