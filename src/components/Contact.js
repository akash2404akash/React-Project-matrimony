import React from 'react';
import './Contact.css';


function Contact() {
  return (
    <div className="container">
      <nav className="navbar">
        <ul className="nav-list">
          <li className="nav-item"><a href="#Home">Home           </a></li>
          <li className="nav-item"><a href="#Home">               </a></li>
          <li className="nav-item"><a href="#Contact">Contact        </a></li>
          <li className="nav-item"><a href="#Contact">               </a></li>
          <li className="nav-item"><a href="#About ">About          </a></li>
          <li className="nav-item"><a href="#About ">               </a></li>
          <li className="nav-item"><a href="#About ">About          </a></li>
          <li className="nav-item"><a href="#About ">               </a></li>
          <li className="nav-item"><a href="#Register">Register       </a></li>
          <li className="nav-item"><a href="#Register">               </a></li>
          <li className="nav-item"><a href="#Login">Login          </a></li>
        </ul>
        
      </nav>
      <section className="contact-section">
        
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name *</label>
            <input type="text" id="name" placeholder="Enter Name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input type="email" id="email" placeholder="Enter Email" />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" placeholder="Enter Subject" />
          </div>
          <div className="form-group">
            <label htmlFor="mobile">Mobile No. *</label>
            <input type="text" id="mobile" placeholder="Enter Mobile Number" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message *</label>
            <textarea id="message" rows="5" placeholder="Enter Message"></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
        
      </section>
      
</div>
);
}

export default Contact;
