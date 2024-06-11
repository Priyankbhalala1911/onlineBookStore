import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// import SignUp from './signUp'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import image1 from "../slide image/book-image/book.png"
import axios from 'axios'
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email === "" || password === "") {
      toast.error('please fill all records', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",

      });

    }
    else {
      axios.post("http://localhost:3001/login", { email, password })
        .then(result => {
          console.log(result)
          if (result.data === "Success") {
            navigate("../home")
            toast.success(result.data, {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              // progress: undefined,
              theme:  "colored",
              },);
             

          }
          else{
            toast.error(result.data, {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
  
            });
          }
         
          
        })
        .catch(err => console.log(err))
    }

  }
  return (
    <div>
      <div className='model-wrapper'>

        <div className="model-container">

          <div className="image-container">
            <img src={image1} alt="" />
          </div>
          <div className="login-details">
            <div className="form">
              <h3>Login</h3>
              <form onSubmit={handleSubmit}>
                <input className="input" type="email" name="Email" id="Email" placeholder='Email Address' onChange={(e) => setEmail(e.target.value)} />
                <br />
                <input className="input" type="password" name="password" id="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
                <p className='password-edit'>Forgot Password?</p>
                <button className="login-page" type="submit">Login</button>
                <br />

                <div className="already-account">
                  No Account??
                  <Link to="../Signup" onClick={() => navigate("./signUp")}> SignUp</Link>
                </div>
              </form>
            </div>
          </div>

        </div>

      </div>
      <ToastContainer />
    </div>
  )
}

export default Login
