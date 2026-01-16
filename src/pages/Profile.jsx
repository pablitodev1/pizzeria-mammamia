import styles from '../assets/Profile.module.css';

function Profile() {
  return (
    <div className={styles.profile_container}>
        <h2>personagenérica@gmail.com</h2>
        <button className={styles.logout_button}>Cerrar sesión</button>
    </div>
  )
}

export default Profile