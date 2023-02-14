import { Grid } from "@mui/material";
import React from "react";
import ProductCard from "./ProductCard";

const Products = ({
  products,
  onAddToCart,
  quantityOfItemInCart,
  onRemoveToCart,
}) => {
  return (
    <Grid container spacing={3}>
      {products.map((prod) => (
        <Grid item md={3} xs={12} key={prod.id}>
          <ProductCard
            quantityOfItems={quantityOfItemInCart.find(
              (items) => items.prod.id === prod.id
            )}
            AddToCart={onAddToCart}
            RemoveToCart={onRemoveToCart}
            product={prod}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default Products;
