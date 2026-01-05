import { useState } from "react";
import { pizzaCart as initialCart } from "../helpers/pizzas";
import styles from '../assets/Cart.module.css';

const Cart = () => {
    const [cart, setCart] = useState(initialCart);

    const total = cart.reduce((acc, curr) => acc + curr.price * curr.count, 0);

    const increaseCount = (id) => {
        const newCart = cart.map((item) => {
            if (item.id === id) {

                return { ...item, count: item.count + 1 };
            }
            return item;
        });
        setCart(newCart);
    };

    const decreaseCount = (id) => {
        const newCart = cart.map((item) => {
                if (item.id === id) {
                    return { ...item, count: item.count - 1 };
                }
                return item;
            })
            .filter((item) => item.count > 0);

        setCart(newCart);
    };

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