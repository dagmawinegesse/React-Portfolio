import React from "react";
import "../../App.css";
import CardItem from "../CardItem";
import "./Skills.css";
import Card from "react-bootstrap/Card";

export default function Education() {
  return (
    <>
      <div className="cards">
        <div className="cards__container">
          <div className="cards__wrapper">
            <ul className="cards__items">
              <CardItem
                src="ResumePics/masters.jpeg"
                text="Master's in Technology Management"
                label="In Progress"
                path="/Education"
              />
              <CardItem
                src="ResumePics/BS.jpeg"
                text="Bachelor's In Computer Science"
                label="Completed"
                path="/Education"
              />
            </ul>
          </div>
        </div>
      </div>
      <h1 class="animate__animated animate__bounce">
        Undergraduate Course Work
      </h1>
      <div className="educationSection">
        <ul className="courseWork-items">
          <Card style={{ width: "22rem" }}>
            <Card.Body>
              <Card.Title style={{ color: "green" }}>
                Java OOP I and II
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Concepts of abstraction, encapsulation, inheritance and much
                more.
              </Card.Subtitle>
            </Card.Body>
          </Card>
          <Card style={{ width: "22rem" }}>
            <Card.Body>
              <Card.Title style={{ color: "green" }}>
                Data Structures
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Concepts of data organization, formatting, management for
                efficent and easier access.
              </Card.Subtitle>
            </Card.Body>
          </Card>
          <Card style={{ width: "22rem" }}>
            <Card.Body>
              <Card.Title style={{ color: "green" }}>
                Discrete Mathematics
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Concepts of integrs, graphs, and statements in logic.
              </Card.Subtitle>
            </Card.Body>
          </Card>
        </ul>
        <ul className="courseWork-items">
          <Card style={{ width: "22rem" }}>
            <Card.Body>
              <Card.Title style={{ color: "green" }}>
                Database Systems and Security
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Concepts include, wide range of infromation security concepts
                such as confidentiality, integrity and availability.
              </Card.Subtitle>
            </Card.Body>
          </Card>
          <Card style={{ width: "22rem" }}>
            <Card.Body>
              <Card.Title style={{ color: "green" }}>
                Applied Software Development{" "}
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Concepts of designing, coding, testing, and mainting software
                systems. Covered the full cycle of software development.
              </Card.Subtitle>
            </Card.Body>
          </Card>
          <Card style={{ width: "22rem" }}>
            <Card.Body>
              <Card.Title style={{ color: "green" }}>
                Applied Software Development
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Concepts of abstraction, encapsulation, inheritance and much
                more.
              </Card.Subtitle>
            </Card.Body>
          </Card>
        </ul>
        <h1>Graduate Course Work</h1>
        <ul className="courseWork-items">
          <Card style={{ width: "22rem" }}>
            <Card.Body>
              <Card.Title style={{ color: "green" }}>
                Machine Learning
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Concepts of abstraction, encapsulation, inheritance and much
                more.
              </Card.Subtitle>
            </Card.Body>
          </Card>
          <Card style={{ width: "22rem" }}>
            <Card.Body>
              <Card.Title style={{ color: "green" }}>
                Project Managemnt
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Concepts of abstraction, encapsulation, inheritance and much
                more.
              </Card.Subtitle>
            </Card.Body>
          </Card>
          <Card style={{ width: "22rem" }}>
            <Card.Body>
              <Card.Title style={{ color: "green" }}>
                Operation Research
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Concepts of abstraction, encapsulation, inheritance and much
                more.
              </Card.Subtitle>
            </Card.Body>
          </Card>
        </ul>
        <ul className="courseWork-items">
          <Card style={{ width: "22rem" }}>
            <Card.Body>
              <Card.Title style={{ color: "green" }}>
                Malware Analysis & Forensics
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Concepts of abstraction, encapsulation, inheritance and much
                more.
              </Card.Subtitle>
            </Card.Body>
          </Card>
          <Card style={{ width: "22rem" }}>
            <Card.Body>
              <Card.Title style={{ color: "green" }}>
                Advanced Server Security
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Concepts of abstraction, encapsulation, inheritance and much
                more.
              </Card.Subtitle>
            </Card.Body>
          </Card>
          
        </ul>
      </div>
    </>
  );
}
