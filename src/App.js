import { useState } from 'react';
import './App.css';

function App() {
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    email: ''
  })
  const [success, setSuccess] = useState(false)
  const [valid, setValid] = useState(false)

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

    if (values.firstName && values.lastName && values.email) {
      setValid(true);
    }
    setSuccess(true);
  }

  return (
    <div className='App'>
      <form className='formContainer' onSubmit={(e) => HandleSubmit(e)}>
        {success && valid ? <div className='successfulReg'>Success!</div> : null }
        <h2 className='headerText'>Basic Registration Form</h2>
        {success && !values.firstName ? <span>Please enter a first name</span> : null}
        <input 
          onChange={(e) => HandleFirstName(e.target.value)} 
          className="textFields" 
          value={values.firstName} 
          type="text" 
          placeholder="First Name" 
          name='firstName' />
        {success && !values.lastName ? <span>Please enter a last name</span> : null}
        <input
          onChange={(e) => HandleLastName(e.target.value)} 
          className="textFields" 
          value={values.lastName} 
          type="text" 
          placeholder="Last Name" 
          name='lastName' />
        {success && !values.email ? <span>Please enter an email address</span> : null}
        <input
          onChange={(e) => HandleEmail(e.target.value)} 
          className="textFields" 
          value={values.email} 
          type="text" 
          placeholder="Email" 
          name='email' />
        <input 
          className="buttonFields" 
          type="submit" 
          value="Register" 
          name='submit' />
      </form>
    </div>
  );
}

export default App;
