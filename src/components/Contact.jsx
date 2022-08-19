import React from "react";

const Contact = () => {
  return (
    <>
      <h1 className="py-3">Contact Us</h1>
      {/* <hr></hr> */}
      <h3 className = 'py-3'> Questions? <br></br>Fill out the form below.</h3>
      <div className="container_form my-3">
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
        {/* <h4> Phone: (555)555-5555 </h4>
        <h4> E-mail: climbshop@gmail.com </h4> */}
      </div>
    </>
  );
};

export default Contact;
