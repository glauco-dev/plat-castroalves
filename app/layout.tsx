"use client";
// app/layout.tsx
import { HomeOutlined, InfoCircleOutlined, PictureOutlined, AppstoreAddOutlined, CalendarOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import Header  from "./components/Header";
import Link from 'next/link';
import {Providers} from "./providers";

export default function RootLayout({children}: { children: React.ReactNode }) {
  return (
    <html lang="en" className='dark'>
      <body style={{margin:'0px'}}>
        <Providers>
        <Header></Header>
          {children}
        </Providers>
      </body>
    </html>
  );
}