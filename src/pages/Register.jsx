// import React, {useState} from 'react'
// import Navbar from '../components/Navbar'
// import { createUserApi, testApi } from '../apis/Api'
// import { toast } from 'react-toastify'

// const Register = () => {
//   // useState (Setting input value)
//   const [firstName, setFirstName] = useState('')
//   const [lastName, setLastName] = useState('')
//   const [email, setEmail] = useState('')
//   const [password,setPassword] = useState('')

//   // function for changing input value
//   const changeFirstname = (e) => {
//     setFirstName(e.target.value)
//   }

//   const changeLastname = (e) => {
//     setLastName(e.target.value)
//   }

//   const changeEmail = (e) => {
//     setEmail(e.target.value)
//   }

//   const changePassword = (e) => {
//     setPassword(e.target.value)
//   }

//   // function for button
//   const handleSubmit = (e) => {
//     e.preventDefault()
//     // check if input value is available
//     console.log(firstName, lastName, email, password)

//     // making json data object
//     const data = {
//       firstName : firstName,
//       lastName : lastName,
//       email : email,
//       password : password
//     }

//     // making API Call
//     createUserApi(data).then((res) => {
//       if(res.data.success == false){
//         toast.error(res.data.message)
//       } else {
//         toast.success(res.data.message)
//       }
//     }).catch(err => {
//       toast.error("Server Error")
//       console.log(err.message)
//     })



//   }

//   return (
//     <>
//       <h1 className='m-4'>Create your Account!</h1>
      
//       <form className='m-4 w-25'>
//         <label>Firstname</label>
//         <input onChange={changeFirstname} type="text" className='form-control mb-2' placeholder='Enter your firstname' />

//         <label>Lastname</label>
//         <input onChange={changeLastname} type="text" className='form-control mb-2' placeholder='Enter your lastname' />

//         <label>Email Address</label>
//         <input onChange={changeEmail} type="email" className='form-control mb-2' placeholder='Enter your email' />

//         <label>Password</label>
//         <input onChange={changePassword} type="password" className='form-control mb-2' placeholder='Enter your password' />

//         <button onClick={handleSubmit} className='btn btn-danger w-100'>Create an Account</button>

//         <a href="" className='text-black text-decoration-none'>Already have account?</a>

//       </form>
//     </>
//   )
// }

// export default Register



// import React, { useState } from 'react';
// import { createUserApi } from '../apis/Api';
// import { toast } from 'react-toastify';

// const Register = () => {
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');

//   const [fnameError, setFnameError] = useState('');
//   const [lnameError, setLnameError] = useState('');
//   const [emailError, setEmailError] = useState('');
//   const [passwordError, setPasswordError] = useState('');
//   const [cpasswordError, setCpasswordError] = useState('');

//   const validate = () => {
//     let isValid = true;

//     setFnameError('');
//     setLnameError('');
//     setEmailError('');
//     setPasswordError('');
//     setCpasswordError('');

//     if (firstName.trim() === '') {
//       setFnameError('Firstname is required');
//       isValid = false;
//     }
//     if (lastName.trim() === '') {
//       setLnameError('Lastname is required');
//       isValid = false;
//     }
//     if (email.trim() === '') {
//       setEmailError('Email is required');
//       isValid = false;
//     }

//     if (password.trim() === '') {
//       setPasswordError('Password is required');
//       isValid = false;
//     }

//     if (confirmPassword.trim() === '') {
//       setCpasswordError('Confirm Password is required');
//       isValid = false;
//     }

//     if (password.trim() !== confirmPassword.trim()) {
//       setCpasswordError('Password and Confirm Password must be the same');
//       isValid = false;
//     }

//     return isValid;
//   };

//   const changeFirstname = (e) => {
//     setFirstName(e.target.value);
//   };

//   const changeLastname = (e) => {
//     setLastName(e.target.value);
//   };

//   const changeEmail = (e) => {
//     setEmail(e.target.value);
//   };

//   const changePassword = (e) => {
//     setPassword(e.target.value);
//   };

//   const changeConfirmPassword = (e) => {
//     setConfirmPassword(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const isValid = validate();
//     if (!isValid) {
//       return;
//     }

//     const data = {
//       firstName: firstName,
//       lastName: lastName,
//       email: email,
//       password: password,
//     };

//     createUserApi(data)
//       .then((res) => {
//         if (res.data.success === false) {
//           toast.error(res.data.message);
//         } else {
//           toast.success(res.data.message);
//         }
//       })
//       .catch((err) => {
//         toast.error('Server Error');
//         console.log(err.message);
//       });
//   };

//   return (
//     <>
//       <h1 className="m-4 text-center">Create your Account!</h1>

//       <form className="m-4 w-50 mx-auto">
//         <div className="mb-3">
//           <label htmlFor="firstName" className="form-label">
//             Firstname
//           </label>
//           <input
//             type="text"
//             className={`form-control ${fnameError ? 'is-invalid' : ''}`}
//             id="firstName"
//             placeholder="Enter your firstname"
//             onChange={changeFirstname}
//           />
//           {fnameError && <div className="invalid-feedback">{fnameError}</div>}
//         </div>

//         <div className="mb-3">
//           <label htmlFor="lastName" className="form-label">
//             Lastname
//           </label>
//           <input
//             type="text"
//             className={`form-control ${lnameError ? 'is-invalid' : ''}`}
//             id="lastName"
//             placeholder="Enter your lastname"
//             onChange={changeLastname}
//           />
//           {lnameError && <div className="invalid-feedback">{lnameError}</div>}
//         </div>

//         <div className="mb-3">
//           <label htmlFor="email" className="form-label">
//             Email Address
//           </label>
//           <input
//             type="email"
//             className={`form-control ${emailError ? 'is-invalid' : ''}`}
//             id="email"
//             placeholder="Enter your email"
//             onChange={changeEmail}
//           />
//           {emailError && <div className="invalid-feedback">{emailError}</div>}
//         </div>

//         <div className="mb-3">
//           <label htmlFor="password" className="form-label">
//             Password
//           </label>
//           <input
//             type="password"
//             className={`form-control ${passwordError ? 'is-invalid' : ''}`}
//             id="password"
//             placeholder="Enter your password"
//             onChange={changePassword}
//           />
//           {passwordError && <div className="invalid-feedback">{passwordError}</div>}
//         </div>

//         <div className="mb-3">
//           <label htmlFor="confirmPassword" className="form-label">
//             Confirm Password
//           </label>
//           <input
//             type="password"
//             className={`form-control ${cpasswordError ? 'is-invalid' : ''}`}
//             id="confirmPassword"
//             placeholder="Confirm your password"
//             onChange={changeConfirmPassword}
//           />
//           {cpasswordError && <div className="invalid-feedback">{cpasswordError}</div>}
//         </div>

//         <button onClick={handleSubmit} className="btn btn-danger w-100">
//           Create an Account
//         </button>

//         <p className="mt-3 text-center">
//           Already have an account? <a href="/">Log in here.</a>
//         </p>
//       </form>
//     </>
//   );
// };

// export default Register;


// import React, { useState } from 'react';
// import { createUserApi } from '../apis/Api';
// import { toast } from 'react-toastify';

// const Register = () => {
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');

//   const [fnameError, setFnameError] = useState('');
//   const [lnameError, setLnameError] = useState('');
//   const [emailError, setEmailError] = useState('');
//   const [passwordError, setPasswordError] = useState('');
//   const [cpasswordError, setCpasswordError] = useState('');

//   const validate = () => {
//     let isValid = true;

//     setFnameError('');
//     setLnameError('');
//     setEmailError('');
//     setPasswordError('');
//     setCpasswordError('');

//     if (firstName.trim() === '') {
//       setFnameError('First name is required');
//       isValid = false;
//     }
//     if (lastName.trim() === '') {
//       setLnameError('Last name is required');
//       isValid = false;
//     }
//     if (email.trim() === '') {
//       setEmailError('Email is required');
//       isValid = false;
//     }

//     if (password.trim() === '') {
//       setPasswordError('Password is required');
//       isValid = false;
//     }

//     if (confirmPassword.trim() === '') {
//       setCpasswordError('Confirm Password is required');
//       isValid = false;
//     }

//     if (password.trim() !== confirmPassword.trim()) {
//       setCpasswordError('Password and Confirm Password must match');
//       isValid = false;
//     }

//     return isValid;
//   };

//   const changeInput = (setter, value) => {
//     setter(value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const isValid = validate();
//     if (!isValid) {
//       return;
//     }

//     const data = {
//       firstName: firstName,
//       lastName: lastName,
//       email: email,
//       password: password,
//     };

//     createUserApi(data)
//       .then((res) => {
//         if (res.data.success === false) {
//           toast.error(res.data.message);
//         } else {
//           toast.success(res.data.message);
//         }
//       })
//       .catch((err) => {
//         toast.error('Server Error');
//         console.log(err.message);
//       });
//   };

//   return (
//     <div className="container">
//       <div className="row justify-content-center mt-5">
//         <div className="col-md-6">
//           <div className="card">
//             <div className="card-body">
//               <h1 className="text-center mb-4">Create your Account!</h1>
//               <form>
//               <div className="text-center mb-4">
//               <img src="https://png.pngtree.com/png-clipart/20200701/original/pngtree-online-shopping-mart-design-png-image_5344271.jpg" alt="Avatar 1" style={{ maxWidth: '150px', marginRight: '50px' }} />
//               {/* Add more avatars as needed */}
//             </div>
//                 {/* First Name */}
//                 <div className="mb-3">
//                   <label htmlFor="firstName" className="form-label">
//                     First Name
//                   </label>
//                   <input
//                     type="text"
//                     className={`form-control ${fnameError ? 'is-invalid' : ''}`}
//                     id="firstName"
//                     placeholder="Enter your first name"
//                     onChange={(e) => changeInput(setFirstName, e.target.value)}
//                   />
//                   {fnameError && <div className="invalid-feedback">{fnameError}</div>}
//                 </div>

//                 {/* Last Name */}
//                 <div className="mb-3">
//                   <label htmlFor="lastName" className="form-label">
//                     Last Name
//                   </label>
//                   <input
//                     type="text"
//                     className={`form-control ${lnameError ? 'is-invalid' : ''}`}
//                     id="lastName"
//                     placeholder="Enter your last name"
//                     onChange={(e) => changeInput(setLastName, e.target.value)}
//                   />
//                   {lnameError && <div className="invalid-feedback">{lnameError}</div>}
//                 </div>

//                 {/* Email */}
//                 <div className="mb-3">
//                   <label htmlFor="email" className="form-label">
//                     Email Address
//                   </label>
//                   <input
//                     type="email"
//                     className={`form-control ${emailError ? 'is-invalid' : ''}`}
//                     id="email"
//                     placeholder="Enter your email"
//                     onChange={(e) => changeInput(setEmail, e.target.value)}
//                   />
//                   {emailError && <div className="invalid-feedback">{emailError}</div>}
//                 </div>

//                 {/* Password */}
//                 <div className="mb-3">
//                   <label htmlFor="password" className="form-label">
//                     Password
//                   </label>
//                   <input
//                     type="password"
//                     className={`form-control ${passwordError ? 'is-invalid' : ''}`}
//                     id="password"
//                     placeholder="Enter your password"
//                     onChange={(e) => changeInput(setPassword, e.target.value)}
//                   />
//                   {passwordError && <div className="invalid-feedback">{passwordError}</div>}
//                 </div>

//                 {/* Confirm Password */}
//                 <div className="mb-3">
//                   <label htmlFor="confirmPassword" className="form-label">
//                     Confirm Password
//                   </label>
//                   <input
//                     type="password"
//                     className={`form-control ${cpasswordError ? 'is-invalid' : ''}`}
//                     id="confirmPassword"
//                     placeholder="Confirm your password"
//                     onChange={(e) => changeInput(setConfirmPassword, e.target.value)}
//                   />
//                   {cpasswordError && <div className="invalid-feedback">{cpasswordError}</div>}
//                 </div>

//                 {/* Submit Button */}
//                 <button onClick={handleSubmit} className="btn btn-primary w-100">
//                   Create an Account
//                 </button>
//                  {/* Agreement Text */}
//                  <p className="mt-3 text-center">
//                  By clicking “SIGN UP”, I agree to Shopping's <a href="/terms" className="text-primary">Terms of Use</a> and <a href="/privacy" className="text-primary">Privacy Policy</a>
//                  </p>


//                 {/* Login Link */}
//                 <p className="mt-3 text-center">
//                   Already have an account? <a href="/">Log in here.</a>
//                 </p>

//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;

import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { createUserApi } from '../apis/Api';

const Register = () => {
  // useState (Setting input value)
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // useState (Setting error message)
  const [firstnameError, setFirstNameError] = useState('');
  const [lastnameError, setLastNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  // validate input value
  const validate = () => {
    let isValid = true;

    // reset error message
    setFirstNameError('');
    setLastNameError('');
    setEmailError('');
    setPasswordError('');
    setConfirmPasswordError('');

    if (firstName.trim() === '') {
      setFirstNameError('First Name is required');
      isValid = false;
    }
    if (lastName.trim() === '') {
      setLastNameError('Last Name is required');
      isValid = false;
    }
    if (email.trim() === '') {
      setEmailError('Email is required');
      isValid = false;
    }
    if (password.trim() === '') {
      setPasswordError('Password is required');
      isValid = false;
    }
    if (confirmPassword.trim() === '') {
      setConfirmPasswordError('Confirm Password is required');
      isValid = false;
    }
    if (password.trim() !== confirmPassword.trim()) {
      setConfirmPasswordError('Password and Confirm Password must be the same');
      isValid = false;
    }
    return isValid;
  };

  // function for changing input value
  const changeFirstName = (e) => {
    setFirstName(e.target.value);
  };
  const changeLastName = (e) => {
    setLastName(e.target.value);
  };
  const changeEmail = (e) => {
    setEmail(e.target.value);
  };
  const changePassword = (e) => {
    setPassword(e.target.value);
  };
  const changeConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  // Function for button
  const handleSubmit = (e) => {
    // Check if the input value is available
    // console.log(firstName, lastName, email, password, confirmPassword)
    e.preventDefault();

    // validate the data
    const isValid = validate();
    if (!isValid) {
      return;
    }

    // making json data object
    const data = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    };

    // Making API Call
    createUserApi(data)
      .then((res) => {
        if (res.data.success === false) {
          toast.error(res.data.message);
        } else {
          toast.success(res.data.message);
        }
      })
      .catch((err) => {
        toast.error('Server Error');
        console.log(err.message);
      });
  };

  return (
    <div className="box">
      <body
        style={{
          fontFamily: 'Arial, sans-serif',
          margin: 0,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          mainAlignment: 'center',
          height: '100vh',
          backgroundImage: "url('https://watermark.lovepik.com/photo/40008/0007.jpg_wh1200.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="login-container" style={{ border: '2px solid #ccc', borderRadius: '10px', padding: '20px' }}>
          <h1>Create your account!</h1>
          {/* Avatars Section */}
        <div className="text-center mb-4">
        <img src="https://png.pngtree.com/png-clipart/20200701/original/pngtree-online-shopping-mart-design-png-image_5344271.jpg" alt="" style={{ maxWidth: '100px', marginRight: '1Ee6COzUvI7pVqLFV9mLHSx6I5xVu3RgkKIN6tv8AX2sf8p8jFpbsVY4ZPTb9jDn7Rii0AaWu1D748ovbStRQbRT9XqV98eZk9M746QMadGJOGb0px' }} />
        {/* Add more avatars as needed */}
      </div>
          <form className="w-100">
            <div className="form-group">
              <label>First Name</label>
              <input
                onChange={changeFirstName}
                type="text"
                className="form-control"
                placeholder="Enter your first name"
              />
              {firstnameError && (
                <p className="text-danger">{firstnameError}</p>
              )}
            </div>

            <div className="form-group">
              <label>Last Name</label>
              <input
                onChange={changeLastName}
                type="text"
                className="form-control"
                placeholder="Enter your last name"
              />
              {lastnameError && <p className="text-danger">{lastnameError}</p>}
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <input
                onChange={changeEmail}
                type="text"
                className="form-control"
                placeholder="Enter your email"
              />
              {emailError && <p className="text-danger">{emailError}</p>}
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                onChange={changePassword}
                type="password"
                className="form-control"
                placeholder="Enter your password"
              />
              {passwordError && <p className="text-danger">{passwordError}</p>}
            </div>

            <div className="form-group">
              <label>Confirm Password</label>
              <input
                onChange={changeConfirmPassword}
                type="password"
                className="form-control"
                placeholder="Confirm password"
              />
              {confirmPasswordError && (
                <p className="text-danger">{confirmPasswordError}</p>
              )}
            </div>

            <button
              onClick={handleSubmit}
              className="btn btn-success m-2"
            >
              Register
            </button>
            <br></br>

            <a href="/login" className="text-dark text-decoration-">
              Already have an account? Login
            </a>
          </form>
        </div>
      </body>
    </div>
  );
};

export default Register;

