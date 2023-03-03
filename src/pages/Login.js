import { useState } from "react";
import axios from "axios";
// import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("https://localhost:4000/login", {
        email: email,
        password: password,
      });

      console.log(response.data);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <section className="login-page">
      <h1>Se Connecter</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          placeholder="Adresse email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="password"
          value={password}
          placeholder="Mot de passe"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <input type="submit" value="Se Connecter" />
      </form>
    </section>
  );
};

export default Login;
