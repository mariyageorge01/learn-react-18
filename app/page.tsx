import styles from "./page.module.css";
import InefficientComponent from "@/components/InefficientComponent/InefficientComponent";

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <InefficientComponent />
      </div>
    </main>
  );
}
