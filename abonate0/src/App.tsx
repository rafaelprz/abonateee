import { Link, Routes, Route } from "react-router-dom";
import "./App.css";
import Servicios from "./pages/Servicios";
import Productos from "./pages/Productos";
import AcercaDe from "./pages/AcercaDe";

function Inicio() {
  return (
    <>
      <section id="home" className="hero">
        <h1>Bienvenido a Abonate</h1>
        <p>
          Esta es la sección principal de la aplicación y el mejor lugar para
          comenzar.
        </p>
        <button type="button">Comenzar</button>
      </section>

      <section id="servicios" className="features">
        <div className="feature-card">
          <h2>Diseño limpio</h2>
          <p>
            Interfaz moderna y clara para que tus usuarios naveguen sin
            distracciones.
          </p>
        </div>
        <div className="feature-card">
          <h2>Rápido y seguro</h2>
          <p>
            Optimizado para carga rápida y con buenas prácticas de desarrollo
            web.
          </p>
        </div>
        <div className="feature-card">
          <h2>Listo para crecer</h2>
          <p>Fácil de extender con nuevas secciones y funcionalidades.</p>
        </div>
      </section>
    </>
  );
}

function App() {
  return (
    <div className="app-shell">
      <header className="navbar">
        <Link to="/" className="navbar__brand">
          Abonate
        </Link>
        <nav className="navbar__menu">
          <Link to="/">Inicio</Link>
          <Link to="/servicios">Servicios</Link>
          <Link to="/productos">Productos</Link>
          <Link to="/nosotros">Nosotros</Link>
        </nav>
      </header>

      <main className="content">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/nosotros" element={<AcercaDe />} />
        </Routes>
      </main>

      <footer className="footer">
        <p>© 2026 Abonate. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
