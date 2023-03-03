import { Link } from "react-router-dom";
import logo from "../img/logo.png";

const Header = () => {
  // const [search, setSearch] = useState();
  return (
    <header className="App-header">
      <Link to="/">
        <img src={logo} className="App-logo" alt="logo" />
      </Link>

      <section className="menu">
        <Link to="/">Personnage</Link>
        <Link to="/comics">Comics</Link>
        <Link to="/favoris">Favoris</Link>
      </section>

      <Link to="/signup">
        <div className="signup">
          <button type="submit">S'inscrire</button>
        </div>
      </Link>
      <Link to="/login">
        <div className="login">
          <button>Se connecter</button>
        </div>
      </Link>
    </header>
  );
};

export default Header;
