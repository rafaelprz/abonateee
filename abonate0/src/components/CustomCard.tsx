import {
  Button,
  Dialog,
  DialogContent,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
} from "@mui/material";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import { useState } from "react";

export interface CardInfo {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

function CustomCard({ cardInfo }: { cardInfo: CardInfo }) {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <CardMedia
        component="img"
        alt={cardInfo.imageAlt ? cardInfo.imageAlt : ""}
        height="140"
        image={cardInfo.image}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h6" component="h2" gutterBottom>
          {cardInfo.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" component="p">
          {cardInfo.description}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "end" }}>
        <Button type="button" onClick={handleClick}>
          <OpenInFullIcon></OpenInFullIcon>
        </Button>
        <Dialog
          open={open}
          onClose={handleClose}
          maxWidth={false}
          slotProps={{
            paper: {
              sx: {
                width: 700,
                height: 450,
                maxWidth: "none",
              },
            },
          }}
        >
          <DialogContent sx={{ p: 0, height: "100%" }}>
            <Card
              sx={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <CardContent>
                <Typography variant="h5">{cardInfo.title}</Typography>
                <Typography>{cardInfo.description}</Typography>
              </CardContent>
            </Card>
          </DialogContent>
        </Dialog>
      </CardActions>
    </Card>
  );
}

export default CustomCard;
