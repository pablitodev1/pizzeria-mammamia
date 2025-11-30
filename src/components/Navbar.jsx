import styles from '../assets/Navbar.module.css';
import { IconHome, IconLogin, IconLogout, IconProfile, IconRegister, IconTotal } from '../assets/Icons';
import { formatCurrency } from '../helpers/formatCurrency';
const Navbar = () => {

    const total = 25000;
    const token = false;
    const totalFormateado = formatCurrency(total);

    return (
        <>
            <div className={styles.navbar}>
                <div className={styles.brand}>
                    <a href="">Pizzeria Mamma Mia!</a>
                </div>
                <div className={styles.menu}>
                    <button className={styles.boton_menu}>
                        <IconHome size='1.8em' color='white' />
                        <p>Home</p>
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
                                <IconLogin size='1.8em' color='white' />
                                <p>Login</p>
                            </button>
                            <button className={styles.boton_menu}>
                                <IconRegister size='1.8em' color='white' />
                                <p>Register</p>
                            </button>
                        </>

                    )}
                </div>
                <div className={styles.carrito}>
                    <button className={styles.boton_menu}>
                        <IconTotal size='1.8em' color='white' />
                        <p>Total: ${totalFormateado}</p>
                    </button>
                </div>
            </div >
        </>
    )
}

export default Navbar