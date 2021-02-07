import React from "react";
import Picture from "../img/Working.jpeg";
import './style.css';
// import Typed from "typed.js";
// import Instruction from "../components/Typed";
import TypedReactDemo from "../components/Typed";


function About() {



  return (
    <>

      <div className="customMargin">

        <div className="container col-xs-9 my-3 p-3 border border-dark rounded projects grayFusion">
          <h1 className="display-4 text-center text-sm-left">Meet Piotr Dudek</h1>

          <TypedReactDemo
            strings={[
              'Web Developer',
              // 'Web ^1000 Developer',
              // '<strong>
              'Web Designer',
              // </strong>',
              'Tech Enthusiast'
            ]}
          />

          <p className="intro-subtitle"><span className="text-slider-items"></span><strong className="text-slider"></strong></p>

          <div className="container col-sm-3">
            <img src={Picture} alt="profile_image" className="img-fluid img-thumbnail figure-img rounded" />
            <figcaption className="centerTxt">Piotr Dudek</figcaption>
          </div>
          <hr className="my-3" />

          <h4>Pursuing the Coding Dream</h4>
          <p>
            Full-Stack Web Developer leveraging project management background to build web applications and create the ultimate user experience.
            Recently graduated from the Full-Stack Coding Bootcamp at Columbia University.
            Strong technical skills in JavaScript, CSS, HTML, and responsive web design as well as a passion for learning emerging technologies.
      </p>
          <br />
          <h4>Accomplishments</h4>
          <p>
            Enhanced company efficacy by implementing new PM software and revising operating procedures, which resulted in timely and cost-effective product launches.
            Successfully led the Quality Management Team and represented the company at the Annual ISO Inspections, improving results by 100% for two consecutive years.
            Awarded “Strength” at the ISO 9001 Audit for developing a cutting-edge Internal Audit Program.
      </p>
          <br />
          <h4>When I am not coding…</h4>
          <p>
            Love travelling, animals, spending time in nature, and discovering new cultures and languages. Learned to speak Hebrew fluently.
            Favorite drink of choice: tequila with cranberry juice.
      </p>
        </div>
      </div>
    </>
  )
}

export default About;