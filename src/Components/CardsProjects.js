import React from 'react';
import './Cards.css'
import '../App.css'
import CardItem from './CardItem';
// import Card from "react-bootstrap/Card";

function CardsProjects() {
  return (
    <div className='cards'>
    <h1>Check out some of my Projects!</h1>
    {/* <h3>Below are some of the projects I have worked on in the past or projects I am currently working on. If you have any questions or would like to comment, please send me an email on dagmawinegesse1@gmail.com or simply send an email from the footer section. Thank you!</h3> */}
    <div className='cards__container'>
      <div className='cards__wrapper'>
        <ul className='cards__items'>
            
          <CardItem
            src='images/img-9.jpg'
            text='Hotel Website Demo'
            label='React JS'
            path='/projects'
          />
          <CardItem
            src='images/img-2.jpg'
            text='Quiz Chat App'
            label='Swift/firebase'
            path='/projects'
          />
        </ul>
        <ul className='cards__items'>
          <CardItem
            src='images/img-3.jpg'
            text='Linear Regression from Scratch'
            label='Pyhton'
            path='/projects'
          />
          <CardItem
            
            src='images/img-4.jpg'
            text='Some of my Leet Code Solution'
            label='LeetCode'
            path='https://github.com/dagmawinegesse/LeetCodeAlgorithmSolutions'
            
            // onClick={() => window.open("")}
            // to = ''
          
           

          />
          <CardItem
            src='images/img-8.jpg'
            text='Open CV motion detection camera with Rasperry PI 4'
            label='Python/In Progress'
            path='/leetCodeSolutions'
          />
        </ul>
      </div>
    </div>
  </div>
  )
}

export default CardsProjects;
