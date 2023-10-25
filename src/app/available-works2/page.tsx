"use client";
import * as React from "react";
import Image from "next/image";
import { styled } from "@mui/joy/styles";
import Grid from "@mui/joy/Grid";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";

import styles from "./styles.module.css";

const Item = styled(Sheet)(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark" ? theme.palette.background.level1 : "#fff",
  ...theme.typography["body-sm"],
  padding: theme.spacing(1),
  textAlign: "center",
  borderRadius: 4,
  color: theme.vars.palette.text.secondary,
}));

export default function RowAndColumnSpacing() {
  return (
    <>
      <h1>Available Works</h1>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        sx={{ width: "100%" }}
      >
        <Grid xs={6}>
          <Grid xs={12}>
            {" "}
            <Item>
              <Image
                className={styles.image}
                width={333}
                height={200}
                alt="slideshow"
                src="/images/chickpeas.jpg"
              />
              <Typography sx={{ marginBottom: 2 }} component="p">
                Simply fill out the form and I'll be in touch soon.
              </Typography>
            </Item>
          </Grid>
          <Grid xs={12}>
            <Item>
              <Image
                className={styles.image}
                width={333}
                height={333}
                alt="slideshow"
                src="/images/chickpeas.jpg"
              />
              <Typography sx={{ marginBottom: 2 }} component="p">
                Simply fill out the form and I'll be in touch soon.
              </Typography>
            </Item>
          </Grid>
        </Grid>
        <Grid xs={6}>
          <Grid xs={12}>
            <Item>
              <Image
                className={styles.image}
                width={333}
                height={333}
                alt="slideshow"
                src="/images/chickpeas.jpg"
              />
              <Typography sx={{ marginBottom: 2 }} component="p">
                Simply fill out the form and I'll be in touch soon.
              </Typography>
            </Item>
          </Grid>
          <Grid xs={12}>
            <Item>
              <Image
                className={styles.image}
                width={333}
                height={333}
                alt="slideshow"
                src="/images/chickpeas.jpg"
              />
              <Typography sx={{ marginBottom: 2 }} component="p">
                Simply fill out the form and I'll be in touch soon.
              </Typography>
            </Item>
          </Grid>
            
        </Grid>
      </Grid>
    </>
  );
}