import styles from '../assets/Navbar.module.css';
import { IconHome, IconLogin, IconLogout, IconProfile, IconRegister, IconTotal } from '../assets/Icons';
import { formatCurrency } from '../helpers/formatCurrency';
import { Link } from 'react-router-dom';
const Navbar = () => {

    const total = 25000;
    const token = false;
    const totalFormateado = formatCurrency(total);

    return (
        <>
            <div className={styles.navbar}>
                <div className={styles.brand}>
                    <Link to="/">Pizzeria Mamma Mia!</Link>
                </div>
                <div className={styles.menu}>
                    <button className={styles.boton_menu}>
                        <Link to="/" className={styles.link}>
                        <IconHome size='1.8em' color='white' />
                        <p>Home</p>
                        </Link>
                    </button>
                    {token ? (
                        <>
                            <button className={styles.boton_menu}>
                                <IconProfile size='1.8em' color='white' />
                                <p>Profile</p>
                            </button>
                            <button className={styles.boton_menu}>
                                <IconLogout size='1.8em' color='white' />
                                <p>Logout</p>
                            </button>
                        </>
                    ) : (
                        <>
                            <button className={styles.boton_menu}>
                                <Link to="/login" className={styles.link}>
                                <IconLogin size='1.8em' color='white' />
                                <p>Login</p>
                                </Link>
                            </button>
                            <button className={styles.boton_menu}>
                                <Link to="/register" className={styles.link}>   
                                <IconRegister size='1.8em' color='white' />
                                <p>Register</p>
                                </Link>
                            </button>
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
            </div >
        </>
    )
}

export default Navbar