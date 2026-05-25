import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import type { IconButtonProps } from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme }) => ({
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
  variants: [
    {
      props: ({ expand }) => !expand,
      style: { transform: 'rotate(0deg)' },
    },
    {
      props: ({ expand }) => !!expand,
      style: { transform: 'rotate(180deg)' },
    },
  ],
}));

const productos = [
  {
    title: 'Tierra',
    description: 'Descripción tierra.',
    features: ['Característica 1', 'Característica 2', 'Característica 3', 'Característica 4'],
  },
  {
    title: 'Crema de Caléndula',
    description: 'Descripción crema de caléndula.',
    features: ['Característica 1', 'Característica 2', 'Característica 3', 'Característica 4'],
  },
  {
    title: 'Abono Orgánico',
    description: 'Descripción abono orgánico.',
    features: ['Característica 1', 'Característica 2', 'Característica 3', 'Característica 4'],
  },
  {
    title: 'Plantas',
    description: 'Descripción plantas.',
    features: ['Característica 1', 'Característica 2', 'Característica 3', 'Característica 4'],
  },
];

function ProductoCard({ producto }: { producto: typeof productos[0] }) {
  const [expanded, setExpanded] = React.useState(false);

  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h6" component="h2" gutterBottom>
          {producto.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" component="p">
          {producto.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <ExpandMore
          expand={expanded}
          onClick={() => setExpanded(!expanded)}
          aria-expanded={expanded}
          aria-label="ver características"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Box component="ul" sx={{ m: 0, pl: 2, listStyleType: 'disc' }}>
            {producto.features.map((feature) => (
              <Typography component="li" key={feature} variant="body2" sx={{ mb: 0.5 }}>
                {feature}
              </Typography>
            ))}
          </Box>
        </CardContent>
      </Collapse>
    </Card>
  );
}

function Productos() {
  return (
    <Box component="section" sx={{ p: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Productos
      </Typography>
      <Typography variant="body1" color="text.secondary" component="p" sx={{ mb: 2 }}>
        Pronto podrás explorar nuestra selección de productos naturales y sustentables.
      </Typography>
      <Grid container spacing={3}>
        {productos.map((producto) => (
          <Grid key={producto.title} size={{ xs: 12, sm: 6, md: 6, lg: 3 }}>
            <ProductoCard producto={producto} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Productos;