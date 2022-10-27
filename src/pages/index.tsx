import Head from "next/head";
import { Hero } from "../components/Hero";
import { Login } from "../components/Login";
import { useState } from "react";

export default function Home() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Hero open={open} setOpen={setOpen}/>
      <Login open={open} setOpen={setOpen}  />
    </>
  );
}
