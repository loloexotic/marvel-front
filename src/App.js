import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cookies from "js-cookie";
import { useState } from "react";

// Components

import Header from "./components/Header";

// Pages
import Characters from "./pages/Characters";
import Comic from "./pages/Comics";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Footer from "./components/Footer";

function App() {
  // const [token, setToken] = useState(Cookies.get("token") || null);
  // const [id, setId] = useState(Cookies.get("id") || null);

  // const handleTokenId = (token, id) => {
  //   if (token && id) {
  //     setToken(token);
  //     setId(id);
  //     Cookies.set("token", token, { expires: 5 });
  //     Cookies.set("id", id, { expires: 5 });
  //   } else {
  //     setToken(null);
  //     setId(null);
  //     Cookies.remove("token");
  //     Cookies.remove("id");
  //   }
  // };

  return (
    <Router>
      <Header />
      <div className="App"></div>;
      <Routes>
        <Route path="/" element={<Characters />} />

        <Route path="/comics" element={<Comic />} />
        <Route
          path="/signup"
          element={<Signup /*handleTokenId={handleTokenId}*/ />}
        />
        <Route
          path="/login"
          element={<Login /*handleTokenId={handleTokenId}*/ />}
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
