import "./globals.sass"
import "./globals.css"
import type { AppProps } from 'next/app';
import Header  from "./components/Header";
import { Menu } from "antd";
import { AppstoreAddOutlined, HomeOutlined, InfoCircleOutlined, PictureOutlined } from "@ant-design/icons";
import Link from "next/link";

function MyApp({ Component, pageProps }: AppProps) {
  return <><Header></Header><Component {...pageProps} /></>;
}
export default MyApp;