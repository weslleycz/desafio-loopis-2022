import { ThemeProvider } from "@mui/material/styles";
import type { AppProps } from "next/app";
import { CookiesProvider } from "react-cookie";
import "../styles/globals.scss";
import { theme } from "../styles/theme"; 

export default function App({ Component, pageProps }: AppProps) {
    return (
        <CookiesProvider>
            <ThemeProvider theme={theme}>
                <Component {...pageProps} />
            </ThemeProvider>
        </CookiesProvider>
    );
}
