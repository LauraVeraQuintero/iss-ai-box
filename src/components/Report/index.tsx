import * as React from "react";
import {Container, Typography} from "@mui/material";

import {Grid, Item} from "./styles";

export const Report: React.FC = () => {
  return (
    <Container style={{marginTop: "60px", maxWidth: "700px"}}>
      <Typography variant="h5" sx={{mb: 5}} justifyContent="center">
        Project Information
      </Typography>
      <Grid>
        <Item>
          <Typography
            variant="overline"
            display="block"
            sx={{color: "gray", fontSize: "12px"}}
            gutterBottom>
            Hola
          </Typography>
          <Typography variant="body1" gutterBottom>
            Hola 2
          </Typography>
        </Item>
      </Grid>
    </Container>
  );
};
