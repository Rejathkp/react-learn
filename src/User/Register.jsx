import React, { useState } from "react";
import { MDBInput, MDBCol, MDBRow, MDBBtn, MDBIcon } from "mdb-react-ui-kit";
import "./Userform.css";
import axios from "axios";

export default function Register() {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const handleName = (event) => {
    setName(event.target.value);
  };


  const handleEmail = (event) => {
    setEmail(event.target.value);
  };


  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async(event) => {
    event.preventDefault();
    const display=await axios.post('http://localhost:4000/signup',{Name,Email,Password})
    console.log(display.data);
    
  };
  return (
    <div className="form-container">
      
      <form onSubmit={handleSubmit}>
        <h1>Sign Up</h1><br />
        <MDBRow className="mb-4">
          <MDBCol>
            <MDBInput
              id="form3Example1"
              label="Name"
              value={Name}
              onChange={handleName}
            />
          </MDBCol>

        </MDBRow>
        <MDBInput
          className="mb-4"
          type="email"
          id="form3Example3"
          value={Email}
          onChange={handleEmail}
          label="Email address"
        />

        <MDBInput
          className="mb-4"
          type="password"
          id="form3Example4"
          value={Password}
          onChange={handlePassword}
          label="Password"
        />

        <MDBBtn type="submit" className="mb-4" block>
          Sign up
        </MDBBtn>

        <div className="text-center">
          <p>
            Not a member? <a href="#!">Register</a>
          </p>
          <p>or sign up with:</p>

          <MDBBtn floating color="secondary" className="mx-1">
            <MDBIcon fab icon="facebook-f" />
          </MDBBtn>

          <MDBBtn floating color="secondary" className="mx-1">
            <MDBIcon fab icon="google" />
          </MDBBtn>

          <MDBBtn floating color="secondary" className="mx-1">
            <MDBIcon fab icon="twitter" />
          </MDBBtn>

          <MDBBtn floating color="secondary" className="mx-1">
            <MDBIcon fab icon="github" />
          </MDBBtn>
        </div>
      </form>
    </div>
  );
}
