import React, { useRef } from 'react'
import './Contact.css'
import Phone from "../../img/phone.png"
import Email from "../../img/email.png"
import Address from "../../img/address.png"
import emailjs from 'emailjs-com';
import AcUnitSharpIcon from '@material-ui/icons/AcUnitSharp';


function Contact() {

    const formRef = useRef();
    
    
    const handleSubmit = (e)=>{
        e.preventDefault()

        console.log('Hello Yash');
        emailjs.sendForm('service_afwxvih', 'template_vnv5qd9', formRef.current, 'user_K1Ol5PQWTfnKyNtu9lrUG')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

    }



    return (
        <div>
            <div className='c'>
                <div className="c-bg"></div>
                <div className="c-wrapper">
                    <div className="c-left">
                        <h1 className="c-title">Eager to Connect</h1>
                        <div className="c-info">
                            <div className="c-info-item">
                                <img src={Phone} alt="" className="c-icon" /> +919021067230
                            </div>
                            <div className="c-info-item">
                                <img src={Email} alt="" className="c-icon" /> yashtelkhadeoff@gmail.com
                            </div>
                            <div className="c-info-item">
                                <img src={Address} alt="" className="c-icon" /> Ayush Nagar, Durgapur Road, Chandrapur, M.H(India)
                            </div>
                        </div>

                    </div>
                    <div className="c-right">
                        <p className="c-desc">
                            <b>What’s your story?</b> Get in touch. Always available for
                            freelancing if the right project comes along. me.
                        </p>
                        <AcUnitSharpIcon color='secondary'/>
<form ref={formRef} onSubmit={handleSubmit}>
  <div className="form-group">
    <label>Name</label>
    <input type="text" className="form-control" name="user_name"  placeholder="Enter Name"/>
    </div>
  <div className="form-group">
    <label >Email address</label>
    <input type="email" className="form-control" name="user_email" placeholder="Enter email"/>
    <small id="emailHelp" className="form-text text-muted">It's Safe.</small>
  </div>
  <div className="form-group">
    <label >Subject</label>
    <input type="text" className="form-control" name="user_subject" placeholder="Subject"/>
  </div>
  <div className="form-group">
    <label >Message</label>
    <textarea type="text" className="form-control" name="user_message" placeholder="Enter Message" rows='5'/>
  </div>

  <button type="submit" className="btn btn-primary">Submit</button>
</form>

{/* <form ref={formRef} onSubmit={handleSubmit}>
            <input  type="text" placeholder="Name" name="user_name" />
            <input  type="text" placeholder="Subject" name="user_subject" />
            <input type="text" placeholder="Email" name="user_email" />
            <textarea  rows="5" placeholder="Message" name="message" />
            <button>Submit</button>
          </form> */}

                

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Contact

