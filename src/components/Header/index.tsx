import * as React from "react";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Logo from "assets/logo.png";

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
        </Toolbar>
      </AppBar>
    </>
  );
};
