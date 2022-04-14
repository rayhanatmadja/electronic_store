import React from "react";
import { Grid } from "@mui/material";
import Product from "./Product/Product";
import { spacing } from "@mui/system";

const Products = ({ products, onAddCart }) => {
  return (
    <main
      style={{ flexGrow: 1, backgroundColor: "#ecf0f1", padding: spacing(3) }}
    >
      <div style={{ height: "70px" }} />
      <Grid container justify="center" spacing={4}>
        {products.map(product => {
          return (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
              <Product product={product} onAddCart={onAddCart} />
            </Grid>
          );
        })}
      </Grid>
    </main>
  );
};

export default Products;
