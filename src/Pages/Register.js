import React, {useState} from "react";

export default function Register() {
  const [ userForm, setUserForm ] = useState({
    name: '',
    userName: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const [userFormError, setUserFormError] = useState({
    name: null,
    email: null,
    userName: null,
    password: null,
    confirmPassword: null
  });

  const usernameRegex =  /^[A-Za-z][A-Za-z0-9_]{5,30}$/
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex =  /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{4,}$/;
  // /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@%$#]).{8,}$/
  

  const handleFormChange = (event)=>{
    let name = event.target.name
    let value = event.target.value
    // Check Name
    if (name === "name") {
      setUserForm({
        ...userForm,
        name: value
      });
      setUserFormError({
        ...userFormError,
        name: 
          value.trim(" ").length === 0
          ? "You Should Enter Your Name"
          : value.trim(" ").length < 3
          ? "Your Name Must Be More More Than Or Equel 3 Charcter"
          : null
      });
    }

    // Check User Name
    else if (name === "userName") {
      setUserForm({
        ...userForm,
        userName: value
      });
      setUserFormError({
        ...userFormError,
        userName: 
          value.trim(" ").length === 0
          ? "You Should Enter Your Username"
          : !value.match(usernameRegex)
          ? "Invalid Username, Username Must Start With Letter And Have Only Letter, Numbers, _ And Feom 5 To 30 Letter"
          : null
      });
    }

    // Check Email
    else if (name === "email") {
      setUserForm({
        ...userForm,
        email: value
      });
      setUserFormError({
        ...userFormError,
        email: 
         value.trim(" ").length === 0
         ? "You Should Enter Your Email"
         : !value.match(emailRegex)
         ? "Invalid Email, Email Should Be Like This name@example.com"
         : null
      });
    }

    // Check Password
    else if (name === "password") {
      setUserForm({
        ...userForm,
        password: value
      });
      setUserFormError({
        ...userFormError,
        password: 
          value.trim(" ").length === 0
          ? "You Should Enter Your Password"
          : !value.match(passwordRegex)
          ? 'Invalid Password, minimum four characters, at least one letter and one number'
          // ? "Invalid Password, The Password Must Contain At Least One Lowercase, One Uppercase, At Least one Digit, Special Character And More Than 7 Letter"
          : null
      });
    }

    // Check Confirm Password
    else if (name === "confirmPassword") {
      setUserForm({
        ...userForm,
        confirmPassword: value
      });
      setUserFormError({
        ...userFormError,
        confirmPassword: 
          value.trim(" ").length === 0
          ? "You Should Enter Your Confirm Password"
          : value !== userForm.password
          ? "Password Don't Match"
          : null
      });
    };

  }

  const isFormValid = !userFormError.name && !userFormError.email && !userFormError.username && !userFormError.password && !userFormError.confirmPassword && userForm.name && userForm.email && userForm.userName && userForm.password && userForm.confirmPassword;
  
  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (isFormValid) {
      console.log("Form Submitted Successfully");
    } else {
      console.log("Form Has Errors");
    }
  };

  return (
    <div className='border' style={{ margin:'50px 100px'}}>
      <h4 className='fw-bold m-5 text-start'>Register Form</h4>
    <form className='text-start m-5' >
      <div className="mb-3">
        {/* Name */}
        <label className="form-label">Name</label>
        <input type="text" className="form-control" id="name" name='name' value={userForm.name} onChange={handleFormChange} required/>
        {userFormError.name && <div className="form-text text-danger text-start">{userFormError.name}</div>}
      </div>
      {/* User Name */}
      <div className="mb-3">
        <label className="form-label">UserName</label>
        <input type="text" className="form-control" id="userName" name='userName' value={userForm.userName} onChange={handleFormChange} required/>
        {userFormError.userName && <div className="form-text text-danger text-start ">{userFormError.userName}</div>}
      </div>
      {/* Email */}
      <div className="mb-3">
        <label className="form-label">Email address</label>
        <input type="email" className="form-control" id="email" name='email' value={userForm.email} onChange={handleFormChange} required/>
        {userFormError.email && <div className="form-text text-danger text-start ">{userFormError.email}</div>}
      </div>
      {/* Password */}
      <div className="mb-3">
        <label className="form-label">Password</label>
        <input type="password" className="form-control" id="password" name='password' value={userForm.password} onChange={handleFormChange} required/>
        {userFormError.password && <div className="form-text text-danger text-start ">{userFormError.password}</div>}
      </div>
      {/* Confirm Password */}
      <div className="mb-3">
        <label className="form-label"  >Confirm Password</label>
        <input type="password" className="form-control" id="confirmPassword" name="confirmPassword" value={userForm.confirmPassword} onChange={handleFormChange} required/>
        {userFormError.confirmPassword && <div className="form-text text-danger text-start ">{userFormError.confirmPassword}</div>}
      </div>
      <button type="submit" className="btn btn-primary" onClick={handleSubmitForm} disabled={!isFormValid}>Submit</button>
    </form>
    </div>
  )
}
