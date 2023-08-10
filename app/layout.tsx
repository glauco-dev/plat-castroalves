"use client";
// app/layout.tsx
import Header  from "./components/Header";
import "./base.sass"

export default function RootLayout({children}: { children: React.ReactNode }) {
  return (
    <html lang="en" className='dark'>
      <body style={{margin:'0px'}}>
        <Header></Header>
          {children}
      </body>
    </html>
  );
}