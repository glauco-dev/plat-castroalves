import "./base.sass"
import "./globals.css"
import type { AppProps } from 'next/app';
import Header  from "./components/Header";

function MyApp({ Component, pageProps }: AppProps) {
  return <><Header></Header><Component {...pageProps} /></>;
}
export default MyApp;