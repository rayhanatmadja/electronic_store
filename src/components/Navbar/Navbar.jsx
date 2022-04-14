import React, { Fragment } from "react";
import {
  AppBar,
  Toolbar,
  Badge,
  IconButton,
  Typography,
  Menu,
  MenuItem,
} from "@mui/material";
import logo from "../../assets/logo-store.png";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Navbar = () => {
  return (
    <Fragment>
      <AppBar
        sx={{
          boxShadow: "none",
          borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
          backgroundColor: "white",
        }}
      >
        <Toolbar>
          <Typography
            sx={{
              flexGrow: 1,
              alignItems: "center",
              display: "flex",
              textDecoration: "none",
            }}
            variant="subtitle2"
            color="primary"
          >
            <img src={logo} alt="logo_store_icon" height="25px" />
            ELECTRONIC STORE
          </Typography>
          <div style={{ flexGrow: 1 }} />
          <div />
          <IconButton aria-label="Show Cart Items">
            <Badge badgeContent={2} color="primary">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
    </Fragment>
  );
};

export default Navbar;
