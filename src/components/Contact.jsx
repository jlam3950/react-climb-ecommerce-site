import React from "react";

const Contact = () => {

 
  return (
    <div className = 'container contact_container'>
      <h1 className="py-4">Contact Us</h1>
      <h3 className = 'py-2 question_header'> Questions?
        <h5 className = 'py-2'>Please, fill out the form below</h5>
      </h3>
      <div className="container_form">
        <form
          size="2"
          action="https://formsubmit.co/jlam3950@gmail.com"
          method="POST"
        >
          <input
            type="hidden"
            name="_subject"
            value="New email from portfoloio website"
          />
          <input
            type="email"
            className="email_form"
            name="email"
            placeholder="your e-mail address"
            required
          />
          <textarea
            type="text"
            name="name"
            className="msg_form"
            rows="4"
            cols="40"
            placeholder="write your message here"
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send
          </button>
        </form>
        <>
        </>
      </div>
    </div>
  );
};

export default Contact;
