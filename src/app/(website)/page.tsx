import LinkButton from "./components/LinkButton";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.container}>
      <div className={styles.split}>
        <div className={styles.left}>
          <h1>
            Get newest alerts
            <br />
            and local info
          </h1>
          <p className={styles.subtitle}>Interested? Get started now!</p>
          <LinkButton href='/app'>Show newest alerts</LinkButton>
        </div>
        <div className={styles.right}>
          <img src='https://unsplash.it/800/600' alt='hero' />
        </div>
      </div>
    </main>
  );
}
