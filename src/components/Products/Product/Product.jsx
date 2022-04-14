import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import styles from "./Product.module.css";

const Product = ({ product, onAddCart }) => {
  // convert html to text
  const createMarkup = () => {
    return { __html: product.description };
  };

  return (
    <Card className={styles.root}>
      <CardMedia
        className={styles.cardMedia}
        image={product.image.url}
        title={""}
        component="img"
      />
      <CardContent>
        <div className={styles.cardContent}>
          <Typography variant="h6" gutterBottom>
            {product.name}
          </Typography>
          <Typography variant="h6" gutterBottom>
            {product.price.formatted_with_symbol}
          </Typography>
        </div>
        <Typography
          dangerouslySetInnerHTML={createMarkup()}
          variant="body2"
          color="textSecondary"
        />
      </CardContent>
      <CardActions disableSpacing className={styles.cardActions}>
        <IconButton
          aria-label="Add To Cart"
          onClick={() => onAddCart(product.id, 1)}
        >
          <ShoppingCartIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Product;
