import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import CustomCard, { type CardInfo } from "../components/CustomCard";

const servicios = [
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
] as CardInfo[];

function Servicios() {
  return (
    <Box component="section" sx={{ p: 4 }}>
      <Grid container spacing={2}>
        {servicios.map((servicio) => (
          <Grid key={servicio.title} size={{ xs: 12, sm: 6, md: 4 }}>
            <CustomCard cardInfo={servicio} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Servicios;
