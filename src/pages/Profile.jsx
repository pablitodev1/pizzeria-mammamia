import styles from '../assets/Profile.module.css';
import { useContext } from "react";
import { UserContext } from "../assets/context/UserContext";

const Profile = () => {
    const { email, logout } = useContext(UserContext); 

    return (
        <div className={styles.profile_container}>
            <h2>Mi Perfil</h2>
            <p>Email: <strong>{email}</strong></p> 
            <button onClick={logout} className={styles.logout_button}>Cerrar Sesión</button> 
        </div>
    );
};

export default Profile;