import React from 'react';
import { Link } from 'react-router-dom';
// import Button from 'react-bootstrap/Button';
function CardItem(props) {
  return (
    <>
      <li className='cards__item'>
        <Link className='cards__item__link' to={props.path}>
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img
              className='cards__item__img'
              alt='Travel'
              src={props.src}
              // href = {props.href}
            />
           
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
            
          </div>
          
        </Link>
        {/* <Button  ><a target='_blank' href={props.href}>{props.text}</a></Button> */}

      </li>
    </>
  );
}

export default CardItem;