import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import moment from "moment";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { api } from "../../utils/apí";
import { AddDay } from "../AddDay";

type Day = {
    id: string;
    data: string;
    userId: string;
};

export const SideMenu = () => {
    const [cookies, setCookie, removeCookie] = useCookies(["token"]);
    const [days, setDays] = useState<Day[]>([]);

    useEffect(() => {
        getDays();
    }, []);

    const getDays = async () => {
        if (cookies.token != undefined) {
            const data = await api.get("/day/list", {
                headers: {
                    authorization: cookies.token,
                },
            });
            setDays(data.data.data);
        }
    };

    return (
        <>
            {/* <Box
                sx={{
                    margin: "0 auto",
                    justifyContent: "center",
                    alignItems: "center",
                    display: "flex",
                    p: "4",
                    padding: "7%",
                    marginTop: "3%",
                    textAlign: "center",
                    marginLeft: "5%",
                    cursor: "pointer",
                }}
            >
                <Card
                    sx={{
                        minWidth: 126,
                        padding: "1%",
                        background: "#F8FBFF",
                        borderRadius: "30px",
                        ":hover": {
                            filter: "brightness(90%)",
                        },
                    }}
                >
                    <CardContent>
                        <Typography variant="h6" gutterBottom>
                            04/11
                        </Typography>
                        <Typography variant="subtitle2" gutterBottom>
                            2022
                        </Typography>
                        <Chip sx={{ cursor: "pointer" }} label="Hoje" />
                    </CardContent>
                </Card>
            </Box>*/}
            {days.map((d) => {
                return (
                    <>
                        <Box
                            key={d.id}
                            sx={{
                                margin: "0 auto",
                                justifyContent: "center",
                                alignItems: "center",
                                display: "flex",
                                p: "4",
                                padding: "7%",
                                marginTop: "3%",
                                textAlign: "center",
                                marginLeft: "5%",
                                cursor: "pointer",
                            }}
                        >
                            <Card
                                sx={{
                                    minWidth: 126,
                                    padding: "1%",
                                    background: "#E7E7E7",
                                    borderRadius: "30px",
                                    ":hover": {
                                        filter: "brightness(90%)",
                                    },
                                }}
                            >
                                <CardContent>
                                    <Typography variant="h6" gutterBottom>
                                        {moment(d.data).format("MM/DD")}
                                    </Typography>
                                    <Typography
                                        variant="subtitle2"
                                        gutterBottom
                                    >
                                        {moment(d.data).format("YYYY")}
                                    </Typography>
                                    <Chip
                                        sx={{ cursor: "pointer" }}
                                        label={moment(d.data).format("dddd")}
                                    />
                                </CardContent>
                            </Card>
                        </Box>
                    </>
                );
            })}
            <AddDay />
            <Box
                sx={{
                    marginTop: "2%",
                }}
            ></Box>
        </>
    );
};
