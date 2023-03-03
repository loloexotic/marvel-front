import axios from "axios";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = ({ handleTokenId }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage("");
    try {
      const response = await axios.post("https://localhost:4000/signup", {
        email: email,
        username: username,
        password: password,
      });
      if (response.data.token) {
        handleTokenId(response.data.token, response.data._id);

        navigate("/");
      }
    } catch (error) {
      console.log(error.message);
      if (error.response.data.message === error.status(401)) {
        setErrorMessage(
          "Email déjà utilisé, veuillez utiliser une autre adresse mail."
        );
      }

      if (error.response.data.message === error.status(422)) {
        setErrorMessage("Tous les champs sont requis");
      }
    }
  };

  return (
    <div className="signup-page">
      <h1>S'inscrire</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={username}
          type="text"
          id="name"
          placeholder="Nom d'utilisateur"
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <input
          value={email}
          type="email"
          id="email"
          placeholder="Email"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <input
          value={password}
          type="password"
          id="password"
          placeholder="Mot de passe"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />

        <button
          disabled={!username || !email || !password ? true : false}
          type="submit"
        >
          S'inscrire
        </button>
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      </form>
    </div>
  );
};

export default Signup;
