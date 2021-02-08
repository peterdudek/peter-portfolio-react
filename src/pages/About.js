import React from "react";
import Picture from "../img/Working.jpeg";
import './style.css';

import LinkedIn from "../img/icons/lin.png";
import GitHub from "../img/icons/gh.png";
import Email from "../img/icons/mail.png";
import Phone from "../img/icons/phone.png";

import TypedReactDemo from "../components/Typed";


function About() {

  return (
    <>

      <div className="customMargin midnightGreen">

        <div className="container col-xs-9">
          <h2 className="display-4 text-center mMid">Meet Piotr Dudek</h2>

          <p className="intro-subtitle"><span className="text-slider-items"></span><strong className="text-slider"></strong></p>

          <div className="container col-sm-3">
            <img src={Picture} alt="Piotr Dudek" className="img-fluid roundedEdge" />
            {/* <figcaption className="centerTxt">Piotr Dudek</figcaption> */}
            <TypedReactDemo
              strings={[
                'Web Developer',
                // 'Web ^1000 Developer',
                // '<strong>
                'Web Designer',
                // </strong>',
                'Tech Enthusiast',
                'Project Manager'
              ]}
            />
          </div>
          <hr className="my-3" />

          <h4 className="mMid">Pursuing the Coding Dream</h4>
          <p className="text-left">
            Full-Stack Web Developer leveraging project management background to build web applications and create the ultimate user experience.
            Recently graduated from the Full-Stack Coding Bootcamp at Columbia University.
            Strong technical skills in JavaScript, CSS, HTML, and responsive web design as well as a passion for learning emerging technologies.
      </p>
          {/* <br />
          <h4>Accomplishments</h4>
          <p>
            Enhanced company efficacy by implementing new PM software and revising operating procedures, which resulted in timely and cost-effective product launches.
            Successfully led the Quality Management Team and represented the company at the Annual ISO Inspections, improving results by 100% for two consecutive years.
            Awarded “Strength” at the ISO 9001 Audit for developing a cutting-edge Internal Audit Program.
      </p> */}
          <br />
          <h4 className="mMid">Technical Skills</h4>
          <div className="text-left">
            <p><strong>Languages: </strong>JavaScript ES6+, CSS3, HTML5, SQL, NoSQL</p>
            <p><strong>Applications: </strong>GitHub, MySQL, MongoDB, Asana, Heroku, Robo3T, Postman</p>
            <p><strong>Tools: </strong>React.js, Express, Node.js, Handlebars, API, Bootstrap, jQuery, ORM, Sequelize, Mongoose, Axios, Charts.js</p>
          </div>

          <br />
          {/* <h4>When I am not coding…</h4>
          <p className="text-left">
            Love travelling, animals, spending time in nature, and discovering new cultures. Learned to speak Hebrew fluently.
            Favorite drink of choice: tequila with cranberry juice.
      </p> */}

          {/* <div>
            <div className="container col-xl-6 my-3 p-3 border border-dark rounded grayFusion stretched"> */}
          <div className="customMarg">
            <div>
              <h4 className="mMid"><span>Let's connect:</span></h4>
              <div className="container col-sm-4"></div>
              <div className="container col-sm-4">
                <div className="text-center">
                  <p><a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/-piotr-dudek"><img src={LinkedIn} alt="linkedin-logo" height="20" width="20" /> LinkedIn</a></p>
                  <p><a rel="noreferrer" target="_blank" href="https://github.com/Piotr72us"><img src={GitHub} alt="github-logo" height="20" width="20" /> Github</a></p>
                  <p className="spread"><a rel="noreferrer" target="_blank" href="mailto: piotr72@gmail.com"><img src={Email} alt="email-logo" height="20" width="20" /> piotr72@gmail.com</a></p>
                  <p className="spread"><a rel="noreferrer" target="_blank" href="tel: 9176988041"><img src={Phone} alt="phono-icon" height="20" width="20" />  (917)-698-8041</a></p>
                </div>
              </div>
              <div className="container col-sm-4"></div>
            </div>
          </div>
          {/* </div>
          </div> */}




        </div>
      </div>
    </>
  )
}

export default About;