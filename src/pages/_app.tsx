import { ThemeProvider } from "@mui/material/styles";
import type { AppProps } from "next/app";
import "../styles/globals.scss";
import { theme } from "../styles/theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
