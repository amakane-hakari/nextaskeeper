import * as styles from './styles.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.heading}>
          Next.js on Cloudflare Workers
        </h1>
        <p className={styles.description}>
          このアプリケーションはCloudflare Workersで動作しています
        </p>
      </div>
    </main>
  );
}
