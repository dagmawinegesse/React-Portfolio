import React from "react";
// import '../../App.css'; 
import CardItem from "../CardItem";
import './Skills.css';

export default function Skills (){
    return (
        <div className='cards'>
      {/* <h1>Skildls </h1> */}
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
              
            <CardItem
              src='ResumePics/java.png'
              text='Java'
              label='Education'
              path='/projects'
            />
            <CardItem
              src='ResumePics/react.png'
              text='React.JS'
              label='Projects'
              path='/projects'
            />
            <CardItem
              src='ResumePics/python.jpeg'
              text='Python'
              label='Skill Set'
              path='/projects'
            />
               
          
          </ul>

          <ul className='cards__items'>
              
              <CardItem
                src='ResumePics/HTMLCSS.png'
                text='HTML & CSS'
                // label='Education'
                path='/projects'
              />
            
              <CardItem
                src='ResumePics/firebase.png'
                text='FireBase'
                // label='Skill Set'
                path='/projects'
              />
               <CardItem
                src='ResumePics/communication.jpeg'
                text='Communication'
                // label='Projects'
                path='/projects'
              />
              <CardItem
                src='ResumePics/research.jpeg'
                text='Research'
                // label='Skill Set'
                path='/projects'
              />
             
                 
            
            </ul>
          {/* <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/projects'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/projects'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/projects'
            />
          </ul> */}
        </div>
      </div>
    </div>
    )
}