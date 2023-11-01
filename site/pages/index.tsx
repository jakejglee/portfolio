import Head from 'next/head';
import styles from '../styles/Home.module.css';

import Banner from "../components/Banner";

export default function Home() {
  return (
    <div className={styles.container}>
      <Banner />
      <Head>
        <title>Jake&apos;s Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>
          Jake Lee&apos;s Portfolio
        </h1>

        <p className={styles.description}>
          Selected works by Jake Lee/"nubby".
        </p>

        <div className={styles.grid}>
          <a href="./formando/" className={styles.card}>
            <h3>Formando &rarr;</h3>
            <p>Solve the riddle of Formando to unlock your prize! Written in TypeScript.</p>
          </a>
        </div>
      </main>

      <footer>
        )  0 o .
      </footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family:
            Menlo,
            Monaco,
            Lucida Console,
            Liberation Mono,
            DejaVu Sans Mono,
            Bitstream Vera Sans Mono,
            Courier New,
            monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family:
            -apple-system,
            BlinkMacSystemFont,
            Segoe UI,
            Roboto,
            Oxygen,
            Ubuntu,
            Cantarell,
            Fira Sans,
            Droid Sans,
            Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
