// https://www.janehindmarchart.com/portfolio
import styles from "./page.module.css";
import Slideshow from "@/components/Slideshow";






export default function Home() {
 
  return (
    <main className={styles.main}>
      <Slideshow />
    </main>
  );
}
