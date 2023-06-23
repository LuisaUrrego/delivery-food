import location from '../../assets/Vector.svg'
import anoucementOne from "../../assets/Img.png"
import anoucementTwo from "../../assets/Img (1).png"
import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { listRestaurants } from '../../redux/actions/restaurantsActions';
import italyFlag from "../../assets/italia.png"
import mexicanFlag from "../../assets/mexico.png"
import veganFood from "../../assets/comida-sana.png"
import hamburguer from "../../assets/hamburgo.png"
import gourmet from "../../assets/langosta.png"
import RestaurantCard from './RestaurantCard';
import { StyleDivHome } from './StyleHome';



const Home = () => {
  const dispatch = useDispatch();
  const restaurantList = useSelector((store) => store.restaurants.restaurants);
  const [listaDeRestaurantes, setListaDeRestaurantes] = useState([]);
  const [choosedButton, setChoosedButton] = useState("all");
  const [category, setCategory] = useState([]);

  const { user } = useSelector((store)=> store.user)
  console.log(user)

  const getRestaurants = () => {    
    dispatch(listRestaurants());
  }

  useEffect(() => {
    getRestaurants();
    
  }, []);

  useEffect(() => {
    if(choosedButton === "all")
    setCategory(listaDeRestaurantes);
    
  });

  useEffect(() => {
      setListaDeRestaurantes(restaurantList);
      
    console.log(restaurantList);
  },[restaurantList]);


  useEffect(() =>{

  if(choosedButton === "gourmet"){
    const filtered = listaDeRestaurantes.filter(item => item.categoria === "Gourmet")
    setCategory(filtered);
  } else if(choosedButton === "italyFood"){
    const filtered = listaDeRestaurantes.filter(item => item.categoria === "Italian food")
    setCategory(filtered);
  } else if(choosedButton === "mexicanFood"){
    const filtered = listaDeRestaurantes.filter(item => item.categoria === "Mexican food")
    setCategory(filtered);
  } else if(choosedButton === "hamburger"){
    const filtered = listaDeRestaurantes.filter(item => item.categoria === "Fast food")
    setCategory(filtered);
  } else if(choosedButton === "veganFood"){
    const filtered = listaDeRestaurantes.filter(item => item.categoria === "Vegan food")
    setCategory(filtered);
  } else{
    setCategory(listaDeRestaurantes);
  }

  },[choosedButton]);

  return (
    <StyleDivHome>
      <nav>
      <img className="locationIcon" src={location} alt="location" />
      <div className='userInfo'>
        <p>DELIVER TO</p>
        <h4>882 Well St, New-York</h4>
        <img src={user.porfileUser} style={{width: 65}}/>
      </div>
      </nav>
      <section>
        <img className="anouncement" src={anoucementOne} alt="promotion" />
        <img className="anouncement" src={anoucementTwo} alt="promotion" />
      </section>
      <div>
        <p>Restaurants and cafes</p>
      </div>
      <section className='filterList'>
        <ul>
          <li><button className={choosedButton === "all" ? "active":""} onClick={() =>setChoosedButton("all")}>  All</button></li>
          <li><button className={choosedButton === "gourmet" ? "active":""} onClick={() =>setChoosedButton("gourmet")}> <img className="buttonImage" src={gourmet} alt="Gourmet" /> <p>Gourmet</p></button></li>
          <li><button className={choosedButton === "italyFood" ? "active":""} onClick={() =>setChoosedButton("italyFood")}> <img className="buttonImage" src={italyFlag} alt="italy flag" /> <p>Italy Food</p></button></li>
          <li><button className={choosedButton === "mexicanFood" ? "active":""} onClick={() =>setChoosedButton("mexicanFood")}> <img className="buttonImage" src={mexicanFlag} alt="Mexican food" /> <p>Mexican food</p></button></li>
          <li><button className={choosedButton === "hamburger" ? "active":""} onClick={() =>setChoosedButton("hamburger")}> <img className="buttonImage" src={hamburguer} alt="Fast food" /><p>Fast food</p></button></li>
          <li><button className={choosedButton === "veganFood" ? "active":""} onClick={() =>setChoosedButton("veganFood")}> <img className="buttonImage" src={veganFood} alt="Vegan food" /><p>Vegan food</p></button></li>
        </ul>
        </section>
        

      <main>
        {category.map((item) => {
         return <RestaurantCard key={item.id} category={item}/>
        })
        }
      </main>
      
    </StyleDivHome>
  )
}

export default Home