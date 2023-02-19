import { Link } from "react-router-dom";
import logo from "../img/logo.png";

const Header = () => {
  // const [search, setSearch] = useState();
  return (
    <header className="App-header">
      <div>
        <img src={logo} className="App-logo" alt="logo" />
      </div>

      <section className="menu">
        <Link to="/">
          <div>Personnage</div>
        </Link>
        <Link to="/comics">
          <div>Comics</div>
        </Link>
        <Link to="/favoris">
          <div>Favoris</div>
        </Link>
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
