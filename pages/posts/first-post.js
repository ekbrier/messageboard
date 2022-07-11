import Link from 'next/link';
import Image from 'next/image'
import styles from '../../styles/Home.module.css';


export default function FirstPost() {
  return (
    <>
      <h1 className={styles.aboutme}>
       About me</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  );
}