import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import CustomCard, { type CardInfo } from "../components/CustomCard";

import ProductosService from "../services/productos.services";

function Productos() {
  const productos = ProductosService.getProductos();
  const productosCardInfo: CardInfo[] = productos.map((producto) => ({
    title: producto.title,
    description: producto.description,
    image: producto.image,
    imageAlt: producto.imageAlt,
  }));
  return (
    <Box component="section" sx={{ p: 4 }}>
      <Grid container spacing={2}>
        {productosCardInfo.map((producto) => (
          <Grid key={producto.title} size={{ xs: 12, sm: 6, md: 4 }}>
            <CustomCard cardInfo={producto} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Productos;
