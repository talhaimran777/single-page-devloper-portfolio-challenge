import "styles/globals.css";
import { AnimatePresence } from "framer-motion";
import type { AppProps } from "next/app";
import { Space_Grotesk } from "next/font/google";

const space_grotesk = Space_Grotesk({ subsets: ['latin'] });

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <main className={space_grotesk.className}>
      <AnimatePresence
        mode="wait"
        initial={true}
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <Component {...pageProps} key={router.asPath} />;
      </AnimatePresence>
    </main>
  );
}
