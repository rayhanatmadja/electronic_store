import React, { Fragment } from "react";
import { Container, Typography, Button, Grid } from "@mui/material";

const Cart = ({ cart }) => {
  const isEmpty = cart.line_items.length === 0;

  const EmptyCart = () => (
    <Typography variant="subtitle1">Your cart is now empty</Typography>
  );

  const FilledCart = () => (
    <Fragment>
      <Grid container spacing={3}>
        {cart.line_items.map(item => {
          return (
            <Grid item xs={12} sm={4} key={item.id}>
              {item.name}
            </Grid>
          );
        })}
      </Grid>
      <div className={""}>
        <Typography variant="h4">
          Subtotal : {cart.subtotal.formatted_with_symbol}
        </Typography>
        <div>
          <Button
            className={""}
            size="large"
            type="button"
            variant="outlined"
            color="primary"
          >
            Clear Cart
          </Button>
          <Button
            className={""}
            size="large"
            type="button"
            variant="contained"
            color="primary"
          >
            Chekcout
          </Button>
        </div>
      </div>
    </Fragment>
  );
  return (
    <Container>
      <div className={""} />
      <Typography variant="h3">Your shopping cart</Typography>
      {isEmpty ? <EmptyCart /> : <FilledCart />}
    </Container>
  );
};

export default Cart;
