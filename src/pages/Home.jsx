import { useState, useEffect } from 'react';
import styles from '../assets/Home.module.css';
{/* import {pizzas} from '../helpers/pizzas'; */}
import CardPizza from "../components/CardPizza"
import Header from "../components/Header"


const Home = () => {

  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    consultarApi();
  }, []);

  const consultarApi = async () => {
    const url = "http://localhost:5000/api/pizzas";
    const response = await fetch(url);
    const data = await response.json();
    setPizzas(data);
  }

  return (
    <div className={styles.home}>
      <Header />
      <div className={styles.cards_container}>
      {pizzas.map((pizza) => (
        <CardPizza
          key={pizza.id}
          id={pizza.id}
          name={pizza.name}
          price={pizza.price}
          ingredients={pizza.ingredients}
          img={pizza.img}
        />
      ))}
    </div>

    </div>
  )
}

export default Home  
