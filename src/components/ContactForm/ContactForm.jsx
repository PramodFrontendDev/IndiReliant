import React from "react";
import "./ContactForm.css";
import { Link } from "react-router-dom";

const ContactForm = () => {
  return (
    <>
      <section id="contact-main-form">
        <div className="container">
          <div className="main-mails">
            <div className="vendor-mails">
              <h3>General Enquiries</h3>
              <Link to="">abc@yopmail.com</Link>
            </div>
            <div className="vendor-mails">
              <h3>General Enquiries</h3>
              <Link to="">abc@yopmail.com</Link>
            </div>
            <div className="vendor-mails">
              <h3>General Enquiries</h3>
              <Link to="">abc@yopmail.com</Link>
            </div>
            <div className="vendor-mails">
              <h3>General Enquiries</h3>
              <Link to="">abc@yopmail.com</Link>
            </div>
          </div>
          <div className="form-main">
            <h2>Drop Us A Line</h2>
            <form action="">
              <div className="input-group">
                <label htmlFor="">
                  Name <span>*</span>
                </label>
                <input type="text" placeholder="Name" name="" id="" />
              </div>
               <div className="input-group">
                <label htmlFor="">
                  Organisation  <span>*</span>
                </label>
                <input type="text" placeholder="Organisation " name="" id="" />
              </div>
               <div className="input-group">
                <label htmlFor="">
                  Organisation <span>*</span>
                </label>
                <input type="text" placeholder="Organisation" name="" id="" />
              </div>
               <div className="input-group">
                <label htmlFor="">
                  Phone Number <span>*</span>
                </label>
                <input type="text" placeholder="Phone Number" name="" id="" />
              </div>
              <div className="input-group input-group-full">
                <label htmlFor="">
                  What is my query about? <span>*</span>
                </label>
                <select name="" id="">
                  <option value="first">first</option>
                  <option value="first">first</option>
                  <option value="first">first</option>
                  <option value="first">first</option>
                  <option value="first">first</option>
                  <option value="first">first</option>
                </select>
              </div>
              <div className="input-group input-group-full">
                <label htmlFor="">
                  Start typing here… 
                </label>
               <textarea name="" placeholder="Enter Here" id=""></textarea>
              </div>
              <div className="input-group input-group-full">
                  <input className="submit-btn" type="submit" />
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactForm;
