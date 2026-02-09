
import { CartContext } from "../assets/context/CartContext";
import { UserContext } from "../assets/context/UserContext";
import { useContext } from "react";
import styles from '../assets/Cart.module.css';

const Cart = () => {
    const { cart, total, increaseCount, decreaseCount } = useContext(CartContext);
    const { token } = useContext(UserContext);
    const [message, setMessage] = useState("");

    const handleCheckout = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/checkouts", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`, 
                },
                body: JSON.stringify({
                    cart: cart,
                }),
            });

            const data = await response.json();

            if (response.ok) {
               
                setMessage("¡Compra realizada con éxito! 🍕");
            } else {
               
                setMessage(data.error || "Hubo un error al procesar tu compra.");
            }
        } catch (error) {
            setMessage("Error de conexión con el servidor.");
        }
    };

    return (
        <div className={styles.cart_container}>
            <h3>Detalles del pedido:</h3>

            {message && <div className={styles.success_message}>{message}</div>}

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

            <button 
                className={styles.pay_button} 
                disabled={!token || cart.length === 0} 
                onClick={handleCheckout}
            >
                Pagar
            </button>
        </div>
    );
};

export default Cart;