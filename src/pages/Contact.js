import React from "react";
import LinkedIn from "../img/icons/lin.png";
import GitHub from "../img/icons/gh.png";
import Email from "../img/icons/mail.png";
import Phone from "../img/icons/phone.png";
import './style.css';

function Contact() {
  return (
    <div>
      <div className="container col-xl-6 my-3 p-3 border border-dark rounded grayFusion stretched">
        <div className="centerDiv">
        <h1 className="display-4 text-center"><span>Let's connect:</span></h1>
        <ul>
          <li className="spread"><a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/-piotr-dudek/"><img src={LinkedIn} alt="linkedin-logo" height="20" width="20" /> My LinkedIn</a></li>
          <li className="spread"><a rel="noreferrer" target="_blank" href="https://github.com/Piotr72us"><img src={GitHub} alt="github-logo" height="20" width="20" /> My Github</a></li>
          <li className="spread"><a rel="noreferrer" target="_blank" href="mailto: piotr72@gmail.com"><img src={Email} alt="email-logo" height="20" width="20" /> Email me</a></li>
          <li className="spread"><a rel="noreferrer" target="_blank" href="tel: 9176988041"><img src={Phone} alt="phono-icon" height="20" width="20" /> My phone: (917)-698-8041</a></li>
        </ul>
        </div>
      </div>
    </div>
  )
}

export default Contact;