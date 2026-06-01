import { Link, Routes, Route } from "react-router-dom";
import "./App.css";
import Servicios from "./pages/Servicios";
import Productos from "./pages/Productos";
import AcercaDe from "./pages/AcercaDe";
import Plantas from "./pages/Plantas";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import "swiper/css";
import "swiper/css/autoplay";

const carouselSlides = [
  { src: "/abonateLogo.jpg", alt: "Producto 1" },
  { src: "/senllaTrepado.png", alt: "Producto 2" },
  { src: "/abonateLogo.jpg", alt: "Producto 3" },
];

function Inicio() {
  return (
    <>
      <section id="home" className="hero">
        <div className="hero__carousel">
          <Swiper
            modules={[Autoplay]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            speed={700}
            spaceBetween={20}
            slidesPerView={1}
            centeredSlides={true}
            loop={true}
          >
            {carouselSlides.map((slide) => (
              <SwiperSlide key={slide.alt}>
                <img src={slide.src} alt={slide.alt} />
              </SwiperSlide>
            ))}
          </Swiper>

          <h1>Bienvenido a Abonate</h1>
        </div>
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
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              src="../public/abonateLogo.jpg"
              style={{ height: "66px" }}
            ></img>
            <div style={{ color: "#6c513c" }}>A B O N A T E</div>
          </div>
        </Link>
        <nav className="navbar__menu">
          <Link to="/">Inicio</Link>
          <Link to="/servicios">Servicios</Link>
          <Link to="/productos">Productos</Link>
          <Link to="/plantas">Plantas</Link>
          <Link to="/nosotros">Nosotros</Link>
        </nav>
      </header>

      <main className="content">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/plantas" element={<Plantas />} />
          <Route path="/nosotros" element={<AcercaDe />} />
        </Routes>
      </main>

      <footer className="footer">
        <div className="footer__contacto">
          <div className="footer__redes">
            <a
              href="https://www.instagram.com/_abonate_/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://wa.me/59898129301"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
        <div className="footer__copy">
          <p>© 2026 Abonate. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
