import { Box, Grid } from "@mui/material";
import Container from "@mui/material/Container";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { SideMenu } from "../../components/SideMenu";
import { Tasks } from "../../components/Tasks";
import { api } from "../../utils/apí";

export type TaskDTO = {
    id: string;
    dayId: string;
    name: string;
    hour: string;
    description: string;
};

const Dashboard = () => {
    const [cookies, setCookie, removeCookie] = useCookies(["token"]);
    const [days, setDays] = useState<Day[]>([]);
    const router = useRouter();

    const [listTasks, setListTasks] = useState<TaskDTO[]>([]);
    const [select, setSelect] = useState(0);

    useEffect(() => {
        if (cookies.token === undefined) {
            router.push("/");
        }
    }, []);
    
    const getDays = async () => {
        if (cookies.token != undefined) {
            const data = await api.get("/day/list", {
                headers: {
                    authorization: cookies.token,
                },
            });
                setDays(data.data.data);
                const [index] = data.data.data;
                try {
                    setListTasks(index.tasks);
                } catch (error) {
                    console.log(error);
                }
        }
    };

    return (
        <>
            <Head>
                <title>Agenda</title>
            </Head>
            <Box sx={{ flexGrow: 1, marginTop: "1%" }}>
                <Grid container spacing={2.5}>
                    <Grid
                        sx={{
                            background: "#212048",
                            height: "101vh",
                            display: "block",
                        }}
                        xs={1.7}
                    >
                        <SideMenu
                        select={select} 
                        setSelect={setSelect}
                        days={days}
                        getDays={getDays} setListTasks={setListTasks} />
                    </Grid>
                    <Grid xs={10.3}>
                        <Container maxWidth="xl">
                            <Tasks
                                day={days[select]}
                                getDays={getDays}
                                listTasks={listTasks}
                                setListTasks={setListTasks}
                            />
                        </Container>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};

export default Dashboard;
