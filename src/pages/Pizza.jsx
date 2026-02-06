import { useState, useEffect } from "react";
import CardPizza from "../components/CardPizza";
import { useParams } from "react-router-dom";
import styles from '../assets/Pizza.module.css';

function Pizza() {

  const { id } = useParams();
  const [pizza, setPizza] = useState(null);

  useEffect(() => {
    const consultarApi = async () => {
      const response = await fetch(`http://localhost:5000/api/pizzas/${id}`);
      const data = await response.json();
      setPizza(data);
    };
    consultarApi();
  }, [id]);

  if (!pizza) return <p>Cargando...</p>;
  return (
    <div className={styles.pizza}>
      <CardPizza
        id={pizza.id} name={pizza.name} price={pizza.price}
        ingredients={pizza.ingredients} img={pizza.img}
      />
    </div>
  )
}

export default Pizza