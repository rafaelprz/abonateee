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
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        borderRadius: 4,
        border: "1px solid var(--surface-muted)",
        boxShadow: "0 8px 22px rgba(58, 83, 43, 0.1)",
        backgroundColor: "var(--surface)",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
        '&:hover': {
          transform: "translateY(-6px)",
          boxShadow: "0 14px 30px rgba(58, 83, 43, 0.18)",
        },
      }}
    >
      <CardMedia
        component="img"
        alt={cardInfo.imageAlt ? cardInfo.imageAlt : ""}
        height="250"
        image={cardInfo.image}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography
          variant="h6"
          component="h2"
          gutterBottom
          sx={{ color: "var(--text)", fontWeight: 700 }}
        >
          {cardInfo.title}
        </Typography>
        <Typography
          variant="body2"
          component="p"
          sx={{ color: "var(--surface-strong)", lineHeight: 1.7 }}
        >
          {cardInfo.description}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "end", px: 2, pb: 2 }}>
        <Button
          type="button"
          onClick={handleClick}
          sx={{
            color: "var(--navbar-text)",
            '&:hover': {
              color: 'var(--accent)',
              transform: "scale(1.1)"
            },
          }}
        >
          <OpenInFullIcon />
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
                borderRadius: 4,
              }}
            >
              <CardContent>
                <Typography variant="h5" sx={{ color: "var(--primary-strong)" }}>
                  {cardInfo.title}
                </Typography>
                <Typography sx={{ color: "var(--text-soft)" }}>
                  {cardInfo.description}
                </Typography>
              </CardContent>
            </Card>
          </DialogContent>
        </Dialog>
      </CardActions>
    </Card>
  );
}

export default CustomCard;
