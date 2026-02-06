import styles from '../assets/Navbar.module.css';
import { useContext } from 'react';
import { UserContext } from '../assets/context/UserContext';
import { CartContext } from '../assets/context/CartContext';
import { IconHome, IconLogin, IconLogout, IconProfile, IconRegister, IconTotal } from '../assets/Icons';
import { formatCurrency } from '../helpers/formatCurrency';
import { Link } from 'react-router-dom';
const Navbar = () => {

    const { total } = useContext(CartContext);
    const { token, logout } = useContext(UserContext);
    const totalFormateado = formatCurrency(total);

    return (
        <>
            <div className={styles.navbar}>
                <div className={styles.brand}>
                    <Link to="/">Pizzeria Mamma Mia!</Link>
                </div>

                <div className={styles.menu}>
                    <Link to="/">
                        <button className={styles.boton_menu}>
                            <IconHome size='1.8em' color='white' />
                            <p>Home</p>
                        </button>
                    </Link>

                    {token ? (
                        <>
                            <Link to="/profile">
                                <button className={styles.boton_menu}>
                                    <IconProfile size='1.8em' color='white' />
                                    <p>Profile</p>
                                </button>
                            </Link>
                            <button className={styles.boton_menu} onClick={logout}>
                                <IconLogout size='1.8em' color='white' />
                                <p>Logout</p>
                            </button>
                        </>
                    ) : (
                        <>
                            <Link to="/login">
                                <button className={styles.boton_menu}>
                                    <IconLogin size='1.8em' color='white' />
                                    <p>Login</p>
                                </button>
                            </Link>
                            <Link to="/register">
                                <button className={styles.boton_menu}>
                                    <IconRegister size='1.8em' color='white' />
                                    <p>Register</p>
                                </button>
                            </Link>
                        </>
                    )}
                </div>

                <div className={styles.carrito}>
                    <Link to="/cart">
                        <button className={styles.boton_menu}>
                            <IconTotal size='1.8em' color='white' />
                            <p>Total: ${totalFormateado}</p>
                        </button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Navbar