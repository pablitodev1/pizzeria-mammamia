import { useContext } from 'react';
import { CartContext } from '../assets/context/CartContext';
import styles from '../assets/CardPizza.module.css';

const CardPizza = ({ id, name, price, ingredients, img }) => {
    const { addToCart } = useContext(CartContext);
    return (
        <>
            <div className={styles.card}>
                <img src={img} />
                <h3>{name}</h3>
                <ul>
                    {ingredients.map((ingredient, index) => (
                        <li key={index}> {ingredient}</li>
                    ))}
                </ul>
                <p className={styles.price}>Precio: ${price}</p>
                <div className={styles.button_container}>
                    <button className={styles.button}>Ver más</button>
                    <button className={styles.button} onClick={() => addToCart({ id, name, price, ingredients, img })}>Añadir</button>
                </div>
            </div>
        </>
    )
}

export default CardPizza