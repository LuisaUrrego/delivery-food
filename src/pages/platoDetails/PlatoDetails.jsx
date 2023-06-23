import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { StylePlatoDetails } from './StylePlatoDetails';
import { agregarElemento } from '../../redux/reducers/shoppingCartReducer';
import plus from "../../assets/plus-lg.svg";
import minus from "../../assets/dash-lg.svg"

const PlatoDetails = () => {
  const restaurantSelected = useSelector((state) => state.restaurantId);
  const choosedPlato = useSelector((state) => state.platoName);
  const compra = useSelector((state) => state.shoppingCart);
  const restaurantList = useSelector((store) => store.restaurants.restaurants);
  const [detailsRestaurant, setDetailsRestaurant] = useState();
  const [platoSelected, setPlatoSelected] = useState({});
  const [contador, setContador] = useState(1);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleplus = () =>{
    let temp = contador;
    setContador(temp + 1)
  }

  const handleless = () => {
    if (contador > 1) {
        let temp = contador;
        setContador(temp - 1)
      }
  }

  useEffect(() => {
    const selectedRestaurant = restaurantList.find(
      (item) => item.id === restaurantSelected.resturantId
    );

    if (selectedRestaurant) {
      setDetailsRestaurant(selectedRestaurant);
      const selectedPlato = selectedRestaurant.platos.find(
        (item) => item.nombre === choosedPlato.platoName
      );
      if (selectedPlato) {
        setPlatoSelected(selectedPlato);
      }
    }

    console.log(restaurantSelected);
  }, [choosedPlato.platoName, restaurantList, restaurantSelected, ]);

  const despacharAgregar = () => {
    const nuevoElemento = {platoSelected, contador, detailsRestaurant};
    dispatch(agregarElemento(nuevoElemento)); 
    navigate(`/ShoppingCart`)
    console.log(compra);
  };

  return (
    <StylePlatoDetails>
      {detailsRestaurant ? (
        <div>
            <img className="platoImage" src={platoSelected.imagen} alt={platoSelected.nombre} />
         <h3>{platoSelected.nombre}</h3>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos perferendis asperiores amet porro fugit laudantium .</p>

         <p>{platoSelected.ingredientes}</p>

         <div className='amountFood'>
            <button onClick={handleless}><img src={minus} alt="minus" /></button>
            <h3>{contador}</h3>
            <button onClick={handleplus}><img src={plus} alt="plus" /></button>
         </div>

        <button onClick={despacharAgregar} className='priceButton'>
            <p>Add</p>
            ${platoSelected.precio * contador}
        </button>

        </div>
      ) : (
        <div className="loading">Loading...</div>
      )}
    </StylePlatoDetails>
  );
};

export default PlatoDetails;