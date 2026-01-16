import { useState } from 'react';
import styles from '../assets/Register.module.css';

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = () => {

        if (!email.trim() || !password.trim() || !confirmPassword.trim())
            alert("Debes llenar todos los campos");
         
        if (password !== confirmPassword) 
            alert("Las contraseñas no coinciden");

        if (password.length < 6)
            alert("La contraseña debe tener al menos 6 caracteres");

        if (password == confirmPassword && email.length > 0) 
            alert("Registro exitoso");
    }

  return (
    <form className={styles.registerForm}>
        <div className={styles.inputGroup}>
            <label>
                Email:
            </label>
            <input type="email" id="email" onChange={(event) => setEmail(event.target.value)}/>
        </div>

        <div className={styles.inputGroup}>
            <label>
                Contraseña:
            </label>
            <input type="password" id="password" onChange={(event) => setPassword(event.target.value)}/>
        </div>

        <div className={styles.inputGroup}>
            <label>
                Confirmar Contraseña:
            </label>
            <input type="password" id="confirmPassword" onChange={(event) => setConfirmPassword(event.target.value)}/>
        </div>
        <div>
            <button type="button" onClick={handleSubmit}>Registrarse</button>
        </div>
    </form>
  )
}

export default Register