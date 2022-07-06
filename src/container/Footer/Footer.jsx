import React, {useState} from 'react';

import { AppWrap, MotionWrap } from '../../wrapper';
import {images} from '../../constants';
import {client} from '../../client';

import './Footer.scss';
const Footer = () => {

  const [formData, setFormData] = useState({name: '', email: '', message: ''})
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const {name, email, message} = formData;

  const handleChangeInput = (e)=>{
      const {name, value} = e.target;

      setFormData({...formData, [name]: value});
  }

  const handleSubmit = ()=>{
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: name,
      email:email,
      message:message,
    }

    client.create(contact)
      .then(()=>{
        setLoading(false);
        setIsFormSubmitted(true);
      })


  }

  return (
    <>
      <h2 className="head-text">Lets have a chat</h2>

        <div className="app__footer-cards">
          <div className="app__footer-card">
            <img src={images.email} alt="email" />
            <a href='mailto:yogi.2210@gmail.com' className='p-text'>yogi.2210@gmail.com</a>
          </div>
          <div className="app__footer-card">
            <img src={images.mobile} alt="phone" />
            <a href='tel: +91 7060357307 ' className='p-text'>+91 7060357307</a>
        </div>
        </div>

      {!isFormSubmitted? 
        <div className="app__footer-form app__flex ">
            <div className="app__flex">
              <input className='p-text' type='text' placeholder='Name' name='name' value={name} onChange={handleChangeInput} />
            </div>
            <div className="app__flex">
              <input className='p-text' type='email' placeholder='Email' name='email' value={email} onChange={handleChangeInput} />
            </div>
            <div>
              <textarea  
                className='p-text'
                placeholder='Message'
                name='message'
                value={message}
                onChange={handleChangeInput}
              />
            </div>

            <button className="p-text" type='button' onClick={handleSubmit}>{loading ? 'Sending' : 'Send Message'}</button>
        </div> 
        : <div>
            <h3 className="head-text">Thank you for getting in touch</h3>
        </div> }

    </>
  )
}

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__primarybg'
)