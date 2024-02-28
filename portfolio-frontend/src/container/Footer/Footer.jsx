import { useState } from 'react';

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper'
import { client } from '../../client'
import './Footer.scss';

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: name,
      email: email,
      message: message
    }

    client.create(contact).then(() => {
      setLoading(false);
      setIsFormSubmitted(true)
    })
  }
  return (
    <>
      <h2 className="head-text">Contact <span>Me</span></h2>

      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a className='p-text' href="mailto:techwithalex1@gmail.com" target="_blank" rel="noopener noreferrer">techwithalex1@gmail.com</a>
        </div>

        <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <a className='p-text' href="https://wa.me/+2348136938648" target="_blank" rel="noopener noreferrer">+2348136938648</a>
        </div>
      </div>

      {
        !isFormSubmitted ?
          <form onSubmit={handleSubmit} className="app__footer-form app__flex">
            <div className="app__flex">
              <input className='p-text' type="text" placeholder='Your Name' name='name' value={name} onChange={handleChangeInput} required />
            </div>
            <div className="app__flex">
              <input className='p-text' type="email" placeholder='Your Email' name='email' value={email} onChange={handleChangeInput} required />
            </div>
            <div>
              <textarea
                className="p-text"
                placeholder='Your Message'
                value={message}
                name='message'
                onChange={handleChangeInput}
                required
              />
            </div>
            <button type='submit' className='p-text'>{loading ? 'Sending...' : 'Send Message'}</button>
          </form>

          :
          <div>
            <h3 className='head-text'>{`Thank you, ${name}, for getting in touch!`}</h3>
          </div>
      }

    </>
  )
}

export default AppWrap(MotionWrap(Footer, 'app__footer'), 'contact', 'app__bg1');