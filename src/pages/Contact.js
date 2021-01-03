import React from "react";

function Contact() {
  return (
    <div className="container col-xs-9 my-3 p-3 border border-dark rounded projects">
      <h1 className="display-4 text-center text-sm-left">Contact</h1>
      <hr className="my-3"/>

      <form>
        <div className="form-group">
          <label for="name">Name</label>
          <input type="text" className="form-control" id="name" placeholder="Enter name"/>
        </div>
        <div className="form-group">
          <label for="email">E-mail</label>
          <input type="email" className="form-control" id="email" placeholder="Enter e-mail"/>
        </div>
        <div className="form-group">
          <label for="message">Message</label>
          <textarea className="form-control" id="message" rows="3" placeholder="Enter message"></textarea>
        </div>
          <button type="submit" className="btn btn-primary" id="submitFormBtn">Submit</button>
      </form>

    </div>
  )
}

export default Contact;