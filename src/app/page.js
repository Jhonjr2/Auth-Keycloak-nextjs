'use client';
import { useRouter } from 'next/navigation';
import styles from "./page.module.css";

export default function Home() {
  const router = useRouter();

  const handleProtectedClick = () => {
    router.push('/protected');
  };

  const handlePublicClick = () => {
    router.push('/publicpage');
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.button}>
          <button onClick={handleProtectedClick}>
            <h1>ProtectedPage</h1>
          </button>
        </div>
        <div className={styles.button}>
          <button onClick={handlePublicClick}>
            <h1>PublicPage</h1>
          </button>
        </div>
      </div>
    </>
  )
}
