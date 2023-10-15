// https://www.janehindmarchart.com/portfolio
import { Container } from "@mui/material";
import Typography from "@mui/joy/Typography";
import Slideshow from "@/components/Slideshow";


import styles from "./page.module.css";



export default function Home() {
 
  return (
    <main className={styles.main}>
      <Slideshow />
      <Container sx={{margin: 0}}>
        <Typography></Typography>
      </Container>
    </main>
  );
}
