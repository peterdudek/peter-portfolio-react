import React from "react";
import Picture from "../img/Working.jpeg";
import './style.css';

function About() {
  return (
    <div className="customMargin">

      <div className="container col-xs-9 my-3 p-3 border border-dark rounded projects grayFusion">
        <h1 className="display-4 text-center text-sm-left">Meet Piotr Dudek</h1>
        <div className="container col-sm-3">
          <img src={Picture} alt="profile_image" className="img-fluid img-thumbnail figure-img rounded" />
          <figcaption className="centerTxt">Piotr Dudek</figcaption>
        </div>
        <hr className="my-3" />

        <h4>Pursuing the Coding Dream</h4>
        <p>
          Full-Stack Web Developer leveraging project management and manufacturing compliance background to build and optimize web applications and create the ultimate user experience.
          Currently enrolled in the Full-Stack Coding Bootcamp at Columbia University and working to obtain a certificate.
          Strong technical skills in JavaScript, CSS, HTML, and responsive web design as well as a passion for learning new technologies and continual improvement.
      </p>
        <br />
        <h4>Accomplishments</h4>
        <p>
          Enhanced project management efficacy by implementing new PM software and revising operating procedures, which resulted in timely product launches and savings.
          Successfully led the Quality Management Team and represented the company at the Annual ISO Inspections, improving results by 100% for two consecutive years.
          Awarded “Strength” at the ISO 9001 Audit for developing a cutting-edge Internal Audit Program.
      </p>
        <br />
        <h4>When I am not coding…</h4>
        <p>
          Love travelling, animals, photography, spending time in nature, exploring exotic cuisines, and discovering new cultures and languages. Learned to speak Hebrew fluently.
          Avid runner on the weekends.
          Favorite drink of choice: tequila with cranberry juice.
      </p>
      </div>
    </div>
  )
}

export default About;