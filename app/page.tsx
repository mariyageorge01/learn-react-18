import styles from "./page.module.css";
import EfficientComponent from "@/components/EfficientComponent/EfficientComponent";
import InefficientComponent from "@/components/InefficientComponent/InefficientComponent";

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <p>Inefficient component</p>
        <InefficientComponent />
      </div>

      <div>
        <p>Efficient component</p>
        <EfficientComponent />
      </div>
    </main>
  );
}
