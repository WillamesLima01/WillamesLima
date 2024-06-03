import { useEffect, useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import styles from "./Principal.module.css";
import axios from "../../api"; 
import { useNavigate } from "react-router-dom";

const Principal = () => {
  const [user, setUser] = useState([]);  
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('/users')
    .then(response => {
        setUser(response.data)
    })
    .catch(error =>{console.error('Email ou senha do usuário não encontrados!')})
  },[])

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.get("/users");
      const users = response.data;
       
      const user = users.find(
        (user) => users.email === username && users.senha === password
        
      );
      
      if (!user) {
        setError("Email ou senha incorretos. Por favor, tente novamente.");
        return;
      }

      console.log("Login bem-sucedido:", user);

      setUsername("");
      setPassword("");
      setError("");
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      setError("Erro ao fazer login. Por favor, tente novamente mais tarde.");
    }
  };

  return (
    <div className={styles.App}>
      <div className={`${styles.container}`}>
        <form onSubmit={handleSubmit}>
          <h1>Acesse o sistema</h1>
          <div className={styles.inputField}>
            <input
              type="text"
              placeholder="E-mail"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <FaUser className={styles.icon} />
          </div>
          <div className={styles.inputField}>
            <input
              type="password"
              placeholder="Senha"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <FaLock className={styles.icon} />
          </div>
          {error && <p style={{ color: "red", marginBottom: "10px" }}>{error}</p>}
          <div className={styles.recallForget}>
            <label>
              <input type="checkbox" />
              Lembre de mim
            </label>
            <a href="#">Esqueceu sua senha?</a>
          </div>
          <button type="submit">Login</button>
          <div className={styles.signupLink}>
            <p>
              Não tem uma conta? <a href="#">Registrar</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Principal;
