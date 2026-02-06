import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]); 

    const increaseCount = (id) => {
        setCart(cart.map((item) => 
            item.id === id ? { ...item, count: item.count + 1 } : item
        ));
    };

    const decreaseCount = (id) => {
        setCart(cart.map((item) => 
            item.id === id ? { ...item, count: item.count - 1 } : item
        ).filter((item) => item.count > 0));
    };

    const addToCart = (pizza) => {
        const found = cart.find((item) => item.id === pizza.id);
        if (found) {
            increaseCount(pizza.id);
        } else {
            setCart([...cart, { ...pizza, count: 1 }]);
        }
    };

    const total = cart.reduce((acc, curr) => acc + curr.price * curr.count, 0);

    return (
        <CartContext.Provider value={{ cart, total, increaseCount, decreaseCount, addToCart }}>
            {children}
        </CartContext.Provider>
    );
};