import type Producto from "../types/productos";

class ProductosService {
  static getProductos(): Producto[] {
    return [
      {
        title: "Tierra",
        description: "Descripción tierra.",
        image: "/senllaTrepado.png",
        imageAlt: "",
      },
      {
        title: "Crema de Caléndula",
        description: "Descripción crema de caléndula.",
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
      {
        title: "Crema de Caléndula",
        description: "Descripción crema de caléndula.",
        image: "/senllaTrepado.png",
        imageAlt: "",
      },
    ] as Producto[];
  }

  static getPlantas(): Producto[] {
    return [
      {
        title: "Floreales anuales",
        description: "Descripción floreales anuales.",
        image: "/senllaTrepado.png",
        imageAlt: "",
      },
      {
        title: "Herbáceas perennes",
        description: "Descripción herbáceas perennes.",
        image: "/senllaTrepado.png",
        imageAlt: "",
      },
      {
        title: "Herbaceas vivaces",
        description: "Descripción herbaceas vivaces.",
        image: "/senllaTrepado.png",
        imageAlt: "",
      },
      {
        title: "Arbustos",
        description: "Descripción arbustos.",
        image: "/senllaTrepado.png",
        imageAlt: "",
      },
      {
        title: "Árboles",
        description: "Descripción árboles.",
        image: "/senllaTrepado.png",
        imageAlt: "",
      },
    ] as Producto[];
  }
}

export default ProductosService;

