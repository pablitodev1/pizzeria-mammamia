import '..assets/Register.css';

const Register = () => {
  return (
    <form>
        <div className="input-group">
            <label>
                Email:
            </label>
            <input type="email"/>
        </div>

        <div className="input-group">
            <label>
                Contraseña:
            </label>
            <input type="password"/>
        </div>
        <div>
            <button>Enviar</button>
        </div>
    </form>
  )
}

export default Register