import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";
import Card from "react-bootstrap/Card";
import 'animate.css'
function Cards() {
  return (
    <div className="cards">
      <h1>Learn More About My Journey</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="ResumePics/education.jpeg"
              text="Learn more about my educational achivements"
              label="Education"
              path="/Education"
            />
            <CardItem
              src="ResumePics/project.png"
              text="Current and other projects I have worked on"
              label="Projects"
              path="/projects"
            />
            {/* <CardItem
              src='ResumePics/Skillset1.jpeg'
              text='Check out some of my Skill Sets'
              label='Skill Set'
              path='/SkillSet'
            /> */}
          </ul>
          <ul>
            <br></br>
            <h1 id = "skill-setH1">Skill Set</h1>
          </ul>

          <ul id="skillSetTable"className="cards__items">
            <Card style={{ width: "22rem" }}>
              <Card.Body>
                <Card.Title style={{ color: "green" }}>Java</Card.Title>
                <Card.Subtitle className="mb-2 text-muted"style={{fontFamily:"'Oswald', sans-serif"}}> 
                  Concepts of abstraction, encapsulation, inheritance and much
                  more.
                </Card.Subtitle>
                {/* <Card.Text>
            GeeksforGeeks provides a platform for all the students to study
            about all the subjects in CSE.
          </Card.Text> */}
              </Card.Body>
            </Card>
            <Card style={{ width: "22rem" }}>
              <Card.Body>
                <Card.Title style={{ color: "green" }}>React Js</Card.Title>
                <Card.Subtitle className="mb-2 text-muted" style={{fontFamily:"'Oswald', sans-serif"}}>
                React JS has been my go to option for creating most of my Web projects. The 
                component based structure makes it easier to create multiple featues.
                </Card.Subtitle>
                {/* <Card.Text>
            GeeksforGeeks provides a platform for all the students to study
            about all the subjects in CSE.
          </Card.Text> */}
              </Card.Body>
            </Card>
            <Card style={{ width: "22rem" }}>
              <Card.Body>
                <Card.Title style={{ color: "green" }}>Pyhton </Card.Title>
                <Card.Subtitle className="mb-2 text-muted" style={{fontFamily:"'Oswald', sans-serif"}}>
                  Used Python in some of my projects for easier redeability, better structure and
                  wide range of libraries.
                </Card.Subtitle>
                {/* <Card.Text>
            GeeksforGeeks provides a platform for all the students to study
            about all the subjects in CSE.
          </Card.Text> */}
              </Card.Body>
            </Card>
          </ul>
          <ul id="skillSetTable" className="cards__items">
            <Card style={{ width: "22rem" }}>
              <Card.Body>
                <Card.Title style={{ color: "green" }}>HTML/CSS</Card.Title>
                <Card.Subtitle className="mb-2 text-muted" style = {{fontFamily : "'Oswald', sans-serif"}}>
                 
                  My programming journey started with HTML and CSS. Used both to create, design a structure websites
                  while also applying CSS animation.
                
                </Card.Subtitle>
                {/* <Card.Text>
            GeeksforGeeks provides a platform for all the students to study
            about all the subjects in CSE.
          </Card.Text> */}
              </Card.Body>
            </Card>
            <Card style={{ width: "22rem" }}>
              <Card.Body>
                <Card.Title style={{ color: "green" }}>Research</Card.Title>
                <Card.Subtitle className="mb-2 text-muted" style={{fontFamily:"'Oswald', sans-serif"}}>
                 Through my vast expierence in education, I have worked on multiple research projects. 
                 My current role of Graduate Research Assistant helps me solidify this skill. 
                </Card.Subtitle>
                {/* <Card.Text>
            GeeksforGeeks provides a platform for all the students to study
            about all the subjects in CSE.
          </Card.Text> */}
              </Card.Body>
            </Card>
            <Card style={{ width: "22rem" }}>
              <Card.Body>
                <Card.Title style={{ color: "green" }}>
                  Communication
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted" style={{fontFamily:"'Oswald', sans-serif"}}>
                  Over the course of my work expierence, I have gained great deal of communications skill
                  through working with teams and providing customer service. 
                </Card.Subtitle>
                {/* <Card.Text>
            GeeksforGeeks provides a platform for all the students to study
            about all the subjects in CSE.
          </Card.Text> */}
              </Card.Body>
            </Card>
          </ul>
        </div>

        <div class="list-group">
          <h1>Work Expierence</h1>
          <a class="list-group-item  flex-column align-items-start">
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1">Graduate Research Assistance</h5>
              <small className="text-muted">2 years expierence</small>
            </div>
            <ul>
              <li> Facilitate online learning for assigned professors</li>
              <li> Data scrapping using python from websites.</li>
              <li> Read, respond, and grade assignments on multiple topics</li>
              <li> Assist with faculty research</li>
              <li> Provide 6 hours a week of classroom assistance. </li>
            </ul>
            <small className="text-muted">Sept 2020- Current</small>
          </a>
          <a class="list-group-item flex-column align-items-start">
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1">Network Analyst</h5>
              <small class="text-muted">1 year expierence</small>
            </div>
            <ul>
            <li> Automate switch updates using Python script.</li>
            <li> Perform switch and router configuration and installation</li>
            <li>Provide first level technical support for the campus.</li>
            <li>
              Knowledge of the OSI Model, TCP/IP and Cisco networking and
              routing.
            </li>
            </ul>
            <small class="text-muted">May 2019- May 2020.</small>
          </a>
          <a class="list-group-item flex-column align-items-start">
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1">Resident Advisor</h5>
              <small class="text-muted">3 years expierence</small>
            </div>
            <ul class = "animate--animated animate__zoomIn">
            <li>Conducted meeting with residents to solve any issues</li>
            <li>
              Conducted community builders once a month to build community on
              campus
            </li>
            <li>Oversaw and assisted more than 200 residents</li>
            </ul>
            <small class="text-muted">Aug 2017- May 2020</small>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Cards;
