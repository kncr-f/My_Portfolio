import '../styles/globals.css';
import { ThemeProvider } from "next-themes";
import NextNProgress from 'nextjs-progressbar';
import { fuchsia } from "tailwindcss/colors";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class" >
      <NextNProgress color={fuchsia[500]} height={6} />
      <Component {...pageProps} />
    </ThemeProvider>)
}

export default MyApp
