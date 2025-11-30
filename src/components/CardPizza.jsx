import styles from '../assets/CardPizza.module.css';

const CardPizza = (props) => {
    return (
        <>
            <div className={styles.card}>
                <img src={props.imagen}/>
                <h3>{props.nombre}</h3>
                <p>Ingredientes: {props.ingredientes}</p>
                <p className={styles.price}>Precio: ${props.precio}</p>
                <div className={styles.button_container}>
                    <button className={styles.button}>Ver más</button>
                    <button className={styles.button}>Añadir</button>
                </div>
            </div>
        </>
    )
}

export default CardPizza