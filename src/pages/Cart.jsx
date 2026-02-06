
import { CartContext } from "../assets/context/CartContext";
import { useContext } from "react";
import styles from '../assets/Cart.module.css';

const Cart = () => {
    const { cart, total, increaseCount, decreaseCount } = useContext(CartContext);


    return (
        <div className={styles.cart_container}>
            <h3>Detalles del pedido:</h3>
            {cart.map(item => (
                <div className={styles.cart_item} key={item.id}>
                    <div className={styles.cart_item_details}>
                    <img src={item.img} alt={item.name} />
                    <h4>{item.name}</h4>
                    </div>

                    <div className={styles.cart_item_actions}>
                    <p>${item.price.toLocaleString()}</p>

                    <button className={styles.decrease_button} onClick={() => decreaseCount(item.id)}>-</button>
                    <span>{item.count}</span>
                    <button className={styles.increase_button} onClick={() => increaseCount(item.id)}>+</button>
                    </div>

                </div>
            ))}
            <h4 className={styles.total}>Total: ${total.toLocaleString()}</h4>
            <button className={styles.pay_button}>Pagar</button>
        </div>
    );
};
export default Cart