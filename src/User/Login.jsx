import React, { useState } from 'react';
import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBCheckbox,
  MDBBtn,
  MDBIcon
} from 'mdb-react-ui-kit';
import "./Userform.css"
import axios from 'axios';

export default function Login() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword= (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async(event) => {
    event.preventDefault();
    const display=await axios.post('http://localhost:4000/login',{Email,Password})
    console.log(display.data);
  }

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}> 
        <h1>Login </h1><br />
        
        <MDBInput className='mb-4' type='text' value={Email} onChange={handleEmail} id='form2Example1' label='Email' />
        <MDBInput className='mb-4' type='password' value={Password} onChange={handlePassword} id='form2Example2' label='Password' />

        <MDBRow className='mb-4'>
          <MDBCol className='d-flex justify-content-center'>
            <MDBCheckbox id='form2Example3' label='Remember me' defaultChecked />
          </MDBCol>
          <MDBCol>
            <a href='#!'>Forgot password?</a>
          </MDBCol>
        </MDBRow>

        <MDBBtn type='submit' className='mb-4' block>
          Sign in
        </MDBBtn>

        <div className='text-center'>
          <p>
            Not a member? <a href='#!'>Register</a>
          </p>
          <p>or sign up with:</p>

          <MDBBtn floating color="secondary" className='mx-1'>
            <MDBIcon fab icon='facebook-f' />
          </MDBBtn>

          <MDBBtn floating color="secondary" className='mx-1'>
            <MDBIcon fab icon='google' />
          </MDBBtn>

          <MDBBtn floating color="secondary" className='mx-1'>
            <MDBIcon fab icon='twitter' />
          </MDBBtn>

          <MDBBtn floating color="secondary" className='mx-1'>
            <MDBIcon fab icon='github' />
          </MDBBtn>
        </div>
      </form>
    </div>
  );
}