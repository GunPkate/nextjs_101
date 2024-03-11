import Image from "next/image";
import styles from "./page.module.css";
import AppHeader from "@/client-components/AppHeader";

export default function Home() {
  return (
    <main>
      <AppHeader/>
      <p className={styles.title}>Hello</p>
      <p>{process.env.DB_USER}</p>
      <p>{process.env.NEXT_PUBLIC_ANALYTICS_ID}</p>
    </main>
  );
}
