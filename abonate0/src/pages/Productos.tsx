import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import CustomCard, { type CardInfo } from "../components/CustomCard";

const productos = [
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
    title: "Compost",
    description: "Descripción compost.",
    image: "/senllaTrepado.png",
    imageAlt: "",
  },
  {
    title: "Harina de hueso",
    description: "Descripción harina de hueso.",
    image: "/senllaTrepado.png",
    imageAlt: "",
  },
] as CardInfo[];

function Productos() {
  return (
    <Box component="section" sx={{ p: 4 }}>
      <Grid container spacing={2}>
        {productos.map((producto) => (
          <Grid key={producto.title} size={{ xs: 12, sm: 6, md: 4 }}>
            <CustomCard cardInfo={producto} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Productos;
