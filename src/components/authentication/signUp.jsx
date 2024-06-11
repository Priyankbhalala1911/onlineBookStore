import React, { useState } from 'react'
import "./signUp.css"
import { Link,   } from 'react-router-dom';
// import { useEffect } from 'react';
import image1 from "../slide image/book-image/book.png"
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';


const SignUp = ({ closeModel }) => {
    const [usename, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault()
        if (usename === "" || email === "" || contact === "" || password === "") {
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
            axios.post("http://localhost:3001/signup", { usename, email, contact, password })
                .then(result => {
                    console.log(result)
                    toast.success(result.data, {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        // progress: undefined,
                        theme: "colored",
                    },);
                    navigate("/home")
                })
                .catch(err => console.log(err))
        }

    }

    // useEffect(() => {
    //     document.body.style.overflowY = "hidden";
    //     return () => {
    //         document.body.style.overflowY = "scroll";
    //     }
    // }, []);
    return (
        <div>
            <div className='model-wrapper'>

                <div className="model-container">

                    <div className="image-container">
                        <img src={image1} alt="" />
                    </div>
                    <div className="login-details">
                        <div className="form">
                            <h3>SIGN UP</h3>
                            <form onSubmit={handleSubmit}>
                                <input className="input" type="text" name="Usename" id="Usename" placeholder='Username' onChange={(e) => setUsername(e.target.value)} />

                                <br />
                                <input className="input" type="email" name="Email" id="Email" placeholder='Email Address' onChange={(e) => setEmail(e.target.value)} />
                                <br />
                                <input className="input" type="number" name="contact" id="contact" placeholder='Contact Number' onChange={(e) => setContact(e.target.value)} />
                                <br />
                                <input className="input" type="password" name="password" id="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
                                <p className='password-edit'>Forgot Password?</p>
                                <button className="login-page" type="submit">Sign up</button>
                                <br />

                                <div className="already-account">
                                    Already Account??
                                    <Link to="../login" onClick={() => navigate("./login")}> Login</Link>
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

export default SignUp
