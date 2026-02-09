import { useState, useContext } from "react"; 
import { UserContext } from "../assets/context/UserContext";
import styles from '../assets/Login.module.css';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
  const { login } = useContext(UserContext);

  const handleSubmit = async (e) => {
   
    if (e) e.preventDefault();

    if (!email.trim() || !password.trim()) {
      alert("Debes llenar todos los campos");
      return;
    }

    if (password.length < 6) {
      alert("La contraseña debe tener al menos 6 caracteres");
      return;
    }

    await login(email, password);
  };

  return (
    
    <form className={styles.loginForm} onSubmit={handleSubmit}>
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

        <div>
            <button type="submit">Iniciar Sesión</button>
        </div>
    </form>
  )
}

export default Login;