import { Box, Grid } from "@mui/material";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { SideMenu } from "../../components/SideMenu";
import { Tasks } from "../../components/Tasks";
import Container from '@mui/material/Container';

const Dashboard = () => {
    const [cookies, setCookie, removeCookie] = useCookies(["token"]);
    const router = useRouter();

    useEffect(() => {
        if (cookies.token === undefined) {
            router.push("/");
        }
    }, []);

    return (
        <>
            <Head>
                <title>Agenda</title>
            </Head>
            <Box sx={{ flexGrow: 1,marginTop:"1%"}}>
                <Grid container spacing={2.5}>
                    <Grid sx={{
                        background:"#212048",
                        height:"101vh",display: "block" 
                    }} xs={1.7}>
                        <SideMenu/>
                    </Grid>
                    <Grid xs={10.3}>
                    <Container maxWidth="xl">
                        <Tasks/>
                    </Container>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};

export default Dashboard;
