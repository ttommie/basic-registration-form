import { useState } from 'react';
import './App.css';

function App() {
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    email: ''
  })
  const [success, setSuccess] = useState(false)

  const HandleFirstName = (firstNameValue) => {
    setValues({...values, firstName: firstNameValue})
  }

  const HandleLastName = (lastNameValue) => {
    setValues({...values, lastName: lastNameValue})
  }

  const HandleEmail = (emailValue) => {
    setValues({...values, email: emailValue})
  }

  const HandleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
  }

  return (
    <div className='App'>
      <form className='formContainer' onSubmit={(e) => HandleSubmit(e)}>
        {success ? <div className='successfulReg'>Success!</div> : null }
        <h2 className='headerText'>Basic Registration Form</h2>
        <input 
          onChange={(e) => HandleFirstName(e.target.value)} 
          className="textFields" 
          value={values.firstName} 
          type="text" 
          placeholder="First Name" 
          name='firstName'
        ></input>
        <input
          onChange={(e) => HandleLastName(e.target.value)} 
          className="textFields" 
          value={values.lastName} 
          type="text" 
          placeholder="Last Name" 
          name='lastName'
        ></input>
        <input
          onChange={(e) => HandleEmail(e.target.value)} 
          className="textFields" 
          value={values.email} 
          type="text" 
          placeholder="Email" 
          name='email'
        ></input>
        <input 
          className="buttonFields" 
          type="submit" 
          value="Register" 
          name='submit'
        ></input>
      </form>
    </div>
  );
}

export default App;
