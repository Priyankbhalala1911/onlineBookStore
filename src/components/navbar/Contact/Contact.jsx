import React, { useRef, useState } from 'react'
import image1 from "../../slide image/book-image/book.png"
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Contact.css"


const Contact = () => {

  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const form = useRef()
  function sendEmail(e) {
    e.preventDefault();
    if (email === "" || subject === "") {
      toast.error("Email not sent", {
        position: "top-center",
        autoClose: 500,
        theme: "colored",
      },);
    }
    else {
      emailjs
        .sendForm('service_wbfkikt', 'template_zp2b48c', form.current, {
          publicKey: 'UVtCVq4Kseeiln1LD',
        })
        .then(
          () => {

            toast.success("Email sent successfully", {
              position: "top-center",
              autoClose: 500,
              theme: "colored",
            },);

          },
          (error) => {
            console.log('FAILED...', error.text);
          },
          e.target.reset()
          
        
        );
        setEmail("")
        setSubject("")
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
              <h3>CONTACT</h3>
              <form ref={form} onSubmit={sendEmail}>
                <input className="input" type="text" name="Usename" id="Usename" placeholder='Username' />

                <br />
                <input className="input" type="email" name="User_Email" id="Email" placeholder='Email Address' onChange={(e) => setEmail(e.target.value)} />
                <br />
                <input className="input" type="subject" name="subject" id="subject" placeholder='Subject' onChange={(e) => setSubject(e.target.value)} />
                <br />
                <textarea name="message" id="message" cols="30" rows="10" placeholder='Message' maxLength={1000}></textarea>
                <button className="login-page" type="submit">Send</button>
                <br />


              </form>
            </div>
          </div>

        </div>

      </div>
      <ToastContainer />
    </div>
  )
}

export default Contact