import * as React from "react";

import AppBar from "@mui/material/AppBar";
import Link from "@mui/material/Link";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Logo from "assets/logo.png";

import {Button} from "common/Button";

export const Header: React.FC = () => {
  return (
    <>
      <AppBar
        position="static"
        elevation={0}
        sx={{
          background: "white",
          boxShadow: (theme) => `0 4px 8px ${theme.palette.divider}`,
        }}>
        <Toolbar sx={{flexWrap: "wrap"}}>
          <img src={Logo} alt="Logo" style={{marginRight: 10, height: 30}} />
          <Typography variant="h6" color="black" noWrap sx={{flexGrow: 1}}>
            ISS AI Box Tool
          </Typography>
          <Link
            variant="button"
            color="text.primary"
            href="#"
            sx={{my: 1, mx: 1.5, textDecoration: "unset"}}>
            Products
          </Link>
          <Link
            variant="button"
            color="text.primary"
            href="#"
            sx={{my: 1, mx: 1.5, textDecoration: "unset"}}>
            Quotation Form
          </Link>
          <Button href="#" variant="outlined" sx={{my: 1, mx: 1.5}}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
};
