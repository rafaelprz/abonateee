import { Link, Routes, Route } from 'react-router-dom'
import './App.css'
import Servicios from './Servicios'

function Inicio() {
  return (
    <>
      <section id="home" className="hero">
        <h1>Bienvenido a Abonate</h1>
        <p>Esta es la sección principal de la aplicación y el mejor lugar para comenzar.</p>
        <button type="button">Comenzar</button>
      </section>

      <section id="servicios" className="features">
        <div className="feature-card">
          <h2>Diseño limpio</h2>
          <p>Interfaz moderna y clara para que tus usuarios naveguen sin distracciones.</p>
        </div>
        <div className="feature-card">
          <h2>Rápido y seguro</h2>
          <p>Optimizado para carga rápida y con buenas prácticas de desarrollo web.</p>
        </div>
        <div className="feature-card">
          <h2>Listo para crecer</h2>
          <p>Fácil de extender con nuevas secciones y funcionalidades.</p>
        </div>
      </section>
    </>
  )
}

function Productos() {
  return (
    <section className="page">
      <h1>Productos</h1>
      <p>Próximamente podrás ver aquí las soluciones y productos de Abonate.</p>
    </section>
  )
}

function Contacto() {
  return (
    <section className="page">
      <h1>Contacto</h1>
      <p>¿Quieres saber más? Manda un mensaje o comparte tus datos de contacto.</p>
    </section>
  )
}

function App() {
  return (
    <div className="app-shell">
      <header className="navbar">
        <div className="navbar__brand">Abonate</div>
        <nav className="navbar__menu">
          <Link to="/">Inicio</Link>
          <Link to="/servicios">Servicios</Link>
          <Link to="/productos">Productos</Link>
          <Link to="/contacto">Contacto</Link>
        </nav>
      </header>

      <main className="content">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </main>

      <footer className="footer">
        <p>© 2026 Mi App Web. Todos los derechos reservados.</p>
      </footer>
    </div>
  )
}

export default App
