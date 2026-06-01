import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import CustomCard, { type CardInfo } from "../components/CustomCard";

const plantas = [
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
] as CardInfo[];

function Plantas() {
  return (
    <Box component="section" sx={{ p: 4 }}>
      <Grid container spacing={2}>
        {plantas.map((planta) => (
          <Grid key={planta.title} size={{ xs: 12, sm: 6, md: 4 }}>
            <CustomCard cardInfo={planta} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Plantas;
