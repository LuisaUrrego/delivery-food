import React from 'react';
import { StyleDiv } from './StyleRestaurantCard';
import stars from "../../assets/favoritos.png";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setRestaurantId } from '../../redux/reducers/restaurantIdReducer';

const RestaurantCard = ({ category }) => {
  const starsArray = Array.from({ length: category.estrellas });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleNavigateDetails = (restaurantId) => {
    dispatch(setRestaurantId(restaurantId))
    navigate(`/ResurantDetails`);
  }

  return (
    <StyleDiv key={category.id} 
    onClick={() => {
      handleNavigateDetails(category.id);
    }}>
      <figure>
        <img src={category.imagen} alt={category.nombre} />
      </figure>
      <div>
        <h3>{category.nombre}</h3>

        {starsArray.map((_, index) => (
          <img className= "stars" key={index} src={stars} alt="stars" />
        ))}

        <p>{category.horario}</p>
      </div>
    </StyleDiv>
  );
};

export default RestaurantCard;