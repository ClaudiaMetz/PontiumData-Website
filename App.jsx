import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/about">Quiénes Somos</Link>
            </li>
            <li>
              <Link to="/work">Nuestros Trabajos</Link>
            </li>
            <li>
              <Link to="/contact">Contacto</Link>
            </li>
            <li>
              <Link to="/services">Servicios</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/" exact component={Inicio} />
          <Route path="/about" component={QuienesSomos} />
          <Route path="/work" component={NuestrosTrabajos} />
          <Route path="/contact" component={Contacto} />
          <Route path="/services" component={Servicios} />
        </Switch>
      </div>
    </Router>
  );
}

function Inicio() {
  return <h2>Bienvenido a PONTIUM DATA</h2>;
}

function QuienesSomos() {
  return (
    <div>
      <h2>Quiénes Somos</h2>
      <div className="card">
        <h3>Nombre del Miembro</h3>
        <p>Descripción del miembro del equipo.</p>
      </div>
      {/* Añadir más cards según sea necesario */}
    </div>
  );
}

function NuestrosTrabajos() {
  return (
    <div>
      <h2>Nuestros Trabajos</h2>
      <p>Descripción de los trabajos realizados.</p>
    </div>
  );
}

function Contacto() {
  return (
    <div>
      <h2>Contacto</h2>
      <form>
        <label>
          Nombre:
          <input type="text" name="name" />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <br />
        <label>
          Mensaje:
          <textarea name="message"></textarea>
        </label>
        <br />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

function Servicios() {
  return (
    <div>
      <h2>Servicios</h2>
      <p>Descripción de los servicios ofrecidos.</p>
    </div>
  );
}

export default App;
