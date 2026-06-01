import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import CustomCard, { type CardInfo } from "../components/CustomCard";
import ServiciosService from "../services/servicios.services";

function Servicios() {
  const servicios = ServiciosService.getServicios();
  const serviciosCardInfo: CardInfo[] = servicios.map((servicio) => ({
    title: servicio.title,
    description: servicio.description,
    image: servicio.image,
    imageAlt: servicio.imageAlt,
  }));
  return (
    <Box component="section" sx={{ p: 4 }}>
      <Grid container spacing={2}>
        {serviciosCardInfo.map((servicio) => (
          <Grid key={servicio.title} size={{ xs: 12, sm: 6, md: 4 }}>
            <CustomCard key={servicio.title}  cardInfo={servicio} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Servicios;
