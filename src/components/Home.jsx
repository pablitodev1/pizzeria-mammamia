import styles from '../assets/Home.module.css';
import CardPizza from "./CardPizza"
import Header from "./Header"


const Home = () => {
  return (
    <div className={styles.home}>
        <Header/>
        <div className={styles.cards_container}>
        <CardPizza imagen="https://ooni.com/cdn/shop/articles/20220211142347-margherita-9920_ba86be55-674e-4f35-8094-2067ab41a671.jpg?v=1737104576&width=1080" nombre="Pizza Margherita" ingredientes="Burrata, Albahaca, Oregano y Mozarella." precio="6.990"/>

          <CardPizza imagen="https://www.pizzarecipe.org/wp-content/uploads/2019/01/Pizza-Diavola.jpg" nombre="Pizza Diavola" ingredientes="Mozarella, Albahaca y Pepperoni picante." precio="7.490"/>

            <CardPizza imagen="https://img.freepik.com/fotos-premium/pizza-cuatro-carnes-salchicha-carne-jamon-pollo-sobre-hormigon-oscuro_210632-1746.jpg" nombre="Pizza 4 Carnes" ingredientes="Mozarella, Pepperoni, Chorizo, Pollo bbq y Tocino" precio="8.990"/>
        </div>

    </div>
  )
}

export default Home  
