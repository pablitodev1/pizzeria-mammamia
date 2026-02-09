import { useState, useContext } from "react"; 
import { UserContext } from "../assets/context/UserContext";
import styles from '../assets/Register.module.css';

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const { register } = useContext(UserContext);

    const handleSubmit = async (e) => {
  
        if (e) e.preventDefault();

        if (!email.trim() || !password.trim() || !confirmPassword.trim()) {
            alert("Debes llenar todos los campos");
            return; 
        }

        if (password !== confirmPassword) {
            alert("Las contraseñas no coinciden");
            return;
        }

        if (password.length < 6) {
            alert("La contraseña debe tener al menos 6 caracteres");
            return;
        }

        await register(email, password);
    }

    return (

        <form className={styles.registerForm} onSubmit={handleSubmit}>
            <div className={styles.inputGroup}>
                <label htmlFor="email">Email:</label>
                <input 
                    type="email" 
                    id="email" 
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
            </div>

            <div className={styles.inputGroup}>
                <label htmlFor="password">Contraseña:</label>
                <input 
                    type="password" 
                    id="password" 
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />
            </div>

            <div className={styles.inputGroup}>
                <label htmlFor="confirmPassword">Confirmar Contraseña:</label>
                <input 
                    type="password" 
                    id="confirmPassword" 
                    value={confirmPassword}
                    onChange={(event) => setConfirmPassword(event.target.value)}
                />
            </div>
            <div>
                <button type="submit">Registrarse</button>
            </div>
        </form>
    )
}

export default Register;