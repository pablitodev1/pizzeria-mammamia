import styles from '../assets/Home.module.css';
import {pizzas} from '../helpers/pizzas';
import CardPizza from "./CardPizza"
import Header from "./Header"


const Home = () => {
  return (
    <div className={styles.home}>
      <Header />
      <div className={styles.cards_container}>
      {pizzas.map((pizza) => (
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

export default Home  
