import React from "react";
import "../../App.css";
import CardItem from "../CardItem";
import "./Skills.css";
import Card from "react-bootstrap/Card";

import Cards from "../Cards";

import CardsProjects from "../CardsProjects";
import GithubCards from "../GithubCards";
import Button from "react-bootstrap/Button";
import {Link} from 'react-router-dom'
import 'animate.css';
import { Navbar } from "react-bootstrap";

import NavBar from "../NavBar";

export default function Projects() {
  return (
    <>
      <NavBar/>
      <div className="cards">
      <h1 class="animate__animated animate__flipInY">Projects</h1>

       
        <div className="cards__container">
          <div className="cards__wrapper">
          <div className ="animate__animated animate__jackInTheBox">


            <ul className="cards__items">
              <Card style={{ width: "22rem" }}>
                <Card.Body>
                  <Card.Img src="ResumePics/java.png" />

                  <Card.Title style={{ color: "green" }}>
                    Java Simple FlashCard
                  </Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Concepts of abstraction, encapsulation, inheritance and much
                    more.
                  </Card.Subtitle>
                  <Button  variant="outline-success"><a target = "_blank" href="https://github.com/dagmawinegesse/JavaFlashCard">Java FlashCard</a></Button>
                </Card.Body>

              </Card>
              
              <Card style={{ width: "22rem" }}>
                <Card.Body>
                  <Card.Img src="ResumePics/react.png" />

                  <Card.Title style={{ color: "green" }}>
                    React Portfolio Website
                  </Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Concepts of abstraction, encapsulation, inheritance and much
                    more.
                  </Card.Subtitle>
               
                </Card.Body>
              </Card>
              <Card style={{ width: "22rem" }}>
                <Card.Body>
                  <Card.Img src="ResumePics/python.jpeg" />

                  <Card.Title style={{ color: "green" }}>
                    Linear Regression
                  </Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Concepts of abstraction, encapsulation, inheritance and much
                    more.
                  </Card.Subtitle>
                  <Button  variant="outline-success"><a target = "_blank" href="https://github.com/dagmawinegesse/JavaFlashCard">Linear Regression</a></Button>
                </Card.Body>
               
              </Card>
            </ul>
            

            <ul className="cards__items">
              <Card style={{ width: "22rem" }}>
                <Card.Body>
                  <Card.Img src="ResumePics/LeetCode.png" />

                  <Card.Title style={{ color: "green" }}>
                    Some of my Leet Code Solutions
                  </Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Concepts of abstraction, encapsulation, inheritance and much
                    more.
                  </Card.Subtitle>
                  <Button  variant="outline-success"><a target = "_blank" href="https://github.com/dagmawinegesse/LeetCodeAlgorithmSolutions">LeetCode Solutions</a></Button>

                </Card.Body>
             
              </Card>
              <Card style={{ width: "22rem" }}>
                <Card.Body>
                  <Card.Img src="ResumePics/react.png" />

                  <Card.Title style={{ color: "green" }}>
                    Drupal React
                  </Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Concepts of abstraction, encapsulation, inheritance and much
                    more.
                  </Card.Subtitle>
                  <Button  variant="outline-success"><a target = "_blank" href="https://github.com/dagmawinegesse/DrupalReact">Drupal React</a></Button>
                </Card.Body>
               
              </Card>
              <Card style={{ width: "22rem" }}>
                <Card.Body>
                  <Card.Img src="ResumePics/python.jpeg" />

                  <Card.Title style={{ color: "green" }}>
                    UnivariateLinearRegression
                  </Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Concepts of abstraction, encapsulation, inheritance and much
                    more.
                  </Card.Subtitle>
                  <Button  variant="outline-success"><a target='_blank' href = "https://github.com/dagmawinegesse/UnivariateLinearRegression">UnivariateLinearRegression</a></Button>
                </Card.Body>
                
              </Card>
            </ul>
            <ul className="cards__items">
              <Card style={{ width: "22rem" }}>
                <Card.Body>
                  <Card.Img src="ResumePics/java.png" />

                  <Card.Title style={{ color: "green" }}>Calculator</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Concepts of abstraction, encapsulation, inheritance and much
                    more.
                  </Card.Subtitle>
                  <Button  variant="outline-success"><a target = "_blank" href="https://github.com/dagmawinegesse/Calculator">Simple Calculator</a></Button>
                </Card.Body>
                
              </Card>
            </ul>
          </div>
          </div>
        </div>
              </div>

      {/* <CardsProjects/> */}
    </>
  );
}
