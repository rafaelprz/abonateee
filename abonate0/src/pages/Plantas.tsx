import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import CustomCard, { type CardInfo } from "../components/CustomCard";
import PlantasService from "../services/productos.services";

function Plantas() {
    const plantas = PlantasService.getPlantas();
    const plantasCardInfo: CardInfo[] = plantas.map((planta) => ({
        title: planta.title,
        description: planta.description,
        image: planta.image,
        imageAlt: planta.imageAlt,
    }));
  return (
    <Box component="section" sx={{ p: 4 }}>
      <Grid container spacing={2}>
        {plantasCardInfo.map((planta) => (
          <Grid key={planta.title} size={{ xs: 12, sm: 6, md: 4 }}>
            <CustomCard cardInfo={planta} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Plantas;
