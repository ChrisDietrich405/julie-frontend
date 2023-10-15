// https://www.janehindmarchart.com/portfolio
import { Container } from "@mui/material";
import Typography from "@mui/joy/Typography";

import styles from "./page.module.css";
import Slideshow from "@/components/Slideshow";

export default function Home() {
  return (
    <main className={styles.main}>
      <Slideshow />
      <Container>
        <Typography sx={{ textAlign: "center", my: 3 }} component="h5">
          Multidisciplinary artist based in the East Midlands UK, specialising
          in painting, drawing and metal sculpture.{" "}
        </Typography>
        <Typography sx={{ textAlign: "center", my: 6 }} component="h5">
          Multidisciplinary artist based in the East Midlands UK, specialising
          in painting, drawing and metal sculpture.{" "}
        </Typography>
      </Container>
    </main>
  );
}
