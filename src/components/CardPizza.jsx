import styles from '../assets/CardPizza.module.css';

const CardPizza = ({ name, price, ingredients, img }) => {
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
                    <button className={styles.button}>Añadir</button>
                </div>
            </div>
        </>
    )
}

export default CardPizza