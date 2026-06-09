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
  { src: "/floresEnCajones.png", alt: "Producto 3" },
];

function Inicio() {
  return (
    <>
      <section className="hero">
        <div className="hero__contenido">
          <span className="hero__etiqueta">🌿 Cultivo natural</span>

          <h1>Abonate la vida</h1>

          <p className="hero__descripcion">
            Compost, plantas y productos naturales para cultivar bienestar y
            regenerar la tierra.
          </p>

          <div className="hero__botones">
            <Link to="/productos" className="boton boton--principal">
              Ver productos
            </Link>

            <Link to="/nosotros" className="boton boton--secundario">
              Conocenos
            </Link>
          </div>

          <div className="hero__beneficios">
            <div className="beneficio">
              <span>🌱</span>
              <p>100% natural</p>
            </div>

            <div className="beneficio">
              <span>♻️</span>
              <p>Compost artesanal</p>
            </div>

            <div className="beneficio">
              <span>🪴</span>
              <p>Plantas saludables</p>
            </div>
          </div>
        </div>

        <div className="hero__imagen">
          <img src="/senllaTrepado.png" alt="Proyecto Abonate" />
        </div>
      </section>

      <section className="productos-destacados">
        <div className="seccion-titulo">
          <span>Nuestros productos</span>
          <h2>Todo para cultivar naturalmente</h2>
        </div>

        <div className="productos-destacados__grid">
          <article className="producto-card">
            <h3>Compost</h3>
            <p>
              Nutrición natural para mejorar la tierra y acompañar tus cultivos.
            </p>
          </article>

          <article className="producto-card">
            <h3>Plantas</h3>
            <p>
              Plantas seleccionadas y cuidadas para llenar de vida tus espacios.
            </p>
          </article>

          <article className="producto-card">
            <h3>Soluciones naturales</h3>
            <p>Productos pensados para una forma de cultivar más consciente.</p>
          </article>
        </div>
      </section>

      <section className="galeria">
        <div className="seccion-titulo">
          <span>Nuestra historia</span>
          <h2>Así crece Abonate</h2>
          <p>Un proyecto hecho con plantas, tierra y dedicación.</p>
        </div>

        <div className="galeria__carousel">
          <Swiper
            modules={[Autoplay]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            speed={700}
            spaceBetween={24}
            slidesPerView={1.15}

            loop={true}
            breakpoints={{
              700: {
                slidesPerView: 2.2,
              },
              1050: {
                slidesPerView: 2.5,
              },
            }}
          >
            {carouselSlides.map((slide) => (
              <SwiperSlide key={slide.src}>
                <img src={slide.src} alt={slide.alt} />
              </SwiperSlide>
            ))}
          </Swiper>
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
          <img
            src="/public/abonateLogo.jpg"
            alt="Logo de Abonate"
            className="navbar__logo"
          />
          <span>A B O N A T E</span>
        </Link>

        <nav className="navbar__menu">
          <Link to="/">Inicio</Link>
          <Link to="/servicios">Servicios</Link>
          <Link to="/productos">Productos</Link>
          <Link to="/plantas">Plantas</Link>
          <Link to="/nosotros">Nosotros</Link>
        </nav>
      </header>

      <main className="app-content">
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
