import { useState, useEffect } from "react";
import CardPizza from "./CardPizza"
import styles from '../assets/Pizza.module.css';

function Pizza() {

    const [pizza, setPizza] = useState([]);

        useEffect(() => {
        consultarApi();
    }, []);

    const consultarApi = async () => {
        const url = "http://localhost:5000/api/pizzas/p001";
        const response = await fetch(url);
        const data = await response.json();
        setPizza([data]);
    }

  return (
   <div className={styles.pizza}>
      <div className={styles.cards_container}>
      {pizza.map((pizza) => (
        <CardPizza
          key={pizza.id}
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

export default Pizza