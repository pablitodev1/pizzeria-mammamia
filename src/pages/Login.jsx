import { useState } from "react";
import styles from '../assets/Login.module.css';


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const handleSubmit = () => {
    if (!email.trim() || !password.trim()) 
      alert("Debes llenar todos los campos");

    if (password.length <= 6)
      alert("La contraseña debe tener al menos 6 caracteres");

    if (email.length > 0 && password.length > 6)
      alert("Inicio de sesión exitoso");

  };

  return (
    <form className={styles.loginForm}>
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

        <div>
            <button type="button" onClick={handleSubmit}>Iniciar Sesión</button>
        </div>

    </form>
  )
}

export default Login