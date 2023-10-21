import React from "react";
import Image from "next/image";

import { Container, Grid } from "@mui/material";
import Typography from "@mui/joy/Typography";


const AvailableWorks = () => {
  return (
    <Container
      sx={{
        flexDirection: "column",
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Typography sx={{ textAlign: "center", my: 3 }} level="h1">
        Available Works
      </Typography>
      <Grid sx={{ margin: 0 }} container direction="row">
        <Grid item xs={4} display="flex" justifyContent="center">
          <Image
            width={333}
            height={333}
            alt="slideshow"
            src="/images/chickpeas.jpg"
          />
        </Grid>
        <Grid item xs={4} display="flex" justifyContent="center">
          <Image
            width={333}
            height={333}
            alt="slideshow"
            src="/images/chickpeas.jpg"
          />
        </Grid>
        <Grid item xs={4} display="flex" justifyContent="center">
          <Image
            width={333}
            height={333}
            alt="slideshow"
            src="/images/chickpeas.jpg"
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default AvailableWorks;
