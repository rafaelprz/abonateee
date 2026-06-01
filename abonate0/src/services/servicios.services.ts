import type Servicio from "../types/servicios";

class ServiciosService {
  static getServicios(): Servicio[] {
    return [
      {
        title: "Mantenimiento de jardines",
        description:
          "Corte, riego, fertilización y cuidado general para mantener tu jardín saludable y ordenado.",
        image: "/senllaTrepado.png",
        imageAlt: "",
      },
      {
        title: "Diseño de jardines",
        description:
          "Planificación y creación de espacios verdes personalizados con plantas, caminos y áreas relajantes.",
        image: "/senllaTrepado.png",
        imageAlt: "",
      },
      {
        title: "Retiro de podas",
        description:
          "Retiro y gestión de restos de poda para dejar tu jardín limpio y listo para su crecimiento.",
        image: "/senllaTrepado.png",
        imageAlt: "",
      },
    ] as Servicio[];
  }
}

export default ServiciosService;
