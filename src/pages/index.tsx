import Head from "next/head";
import { Hero } from "../components/Hero";
import { Login } from "../components/Login";
import { useState } from "react";
import { useCookies } from "react-cookie";
import { useEffect } from "react";
import {useRouter} from "next/router";

export default function Home() {
  const [open, setOpen] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);
  const router = useRouter()

  useEffect(() => {
    if (cookies.token!=undefined) {
        router.push("/dashboard")
    }
  },[]);

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Hero open={open} setOpen={setOpen}/>
      <Login open={open} setOpen={setOpen}  />
    </>
  )
}
