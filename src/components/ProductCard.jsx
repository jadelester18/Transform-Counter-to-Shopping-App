import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
  Button,
  CardActionArea,
  CardActions,
  Grid,
  IconButton,
} from "@mui/material";
import Rating from "@mui/material/Rating";
import { Add, AddShoppingCartOutlined, Remove } from "@mui/icons-material";

const ProductCard = ({ product, AddToCart, quantityOfItems, RemoveToCart }) => {
  const [value, setValue] = React.useState(product.rating.rate);

  const quantityCartAction = () => {
    return quantityOfItems ? (
      <Grid container spacing={3} direction="row" justifyContent="center">
        <Grid item xs={5} sx={{ textAlign: "right" }}>
          <Button
            variant="contained"
            fullWidth
            onClick={() => RemoveToCart(product)}
          >
            <Remove />
          </Button>
        </Grid>
        <Grid item xs={2} sx={{ textAlign: "center" }}>
          <Typography variant="h6">{quantityOfItems.quantity}</Typography>
        </Grid>
        <Grid item xs={5} sx={{ textAlign: "left" }}>
          <Button
            variant="contained"
            fullWidth
            onClick={() => AddToCart(product)}
          >
            <Add />
          </Button>
        </Grid>
      </Grid>
    ) : (
      <Button
        size="small"
        color="primary"
        fullWidth
        startIcon={<AddShoppingCartOutlined />}
        onClick={() => AddToCart(product)}
      >
        ADD TO CART
      </Button>
    );
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="100%"
          image={product.image}
          alt={product.title}
        />
        <CardContent sx={{ textAlign: "center" }}>
          <Typography gutterBottom variant="h6" component="div">
            {product.title}
          </Typography>
          <Typography gutterBottom variant="h7" component="div">
            {`PHP ${product.price}`}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product.description}
          </Typography>
          <Rating
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ backgroundColor: "#eeeeee" }}>
        {quantityCartAction()}
      </CardActions>
    </Card>
  );
};

export default ProductCard;
