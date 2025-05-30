// nextjs-app/app/page.js

import Image from "next/image";
import styles from "./page.module.css";

// Define your repository's base path as a constant.
// This is the manual workaround.
const REPO_BASE_PATH = '/gtmprojects';

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          // Manually prefixing the src for images from the public folder
          src={`${REPO_BASE_PATH}/next.svg`}
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol>
          <li>
            Get started by editing <code>app/page.js</code>.
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <div className={styles.ctas}>
          <a
            className={styles.primary}
            // External link, no change needed
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={styles.logo}
              // Manually prefixing the src
              src={`${REPO_BASE_PATH}/vercel.svg`}
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            // External link, no change needed
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondary}
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className={styles.footer}>
        <a
          // External link, no change needed
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            // Manually prefixing the src
            src={`${REPO_BASE_PATH}/file.svg`}
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          // External link, no change needed
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            // Manually prefixing the src
            src={`${REPO_BASE_PATH}/window.svg`}
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          // External link, no change needed
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            // Manually prefixing the src
            src={`${REPO_BASE_PATH}/globe.svg`}
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
