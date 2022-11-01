import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import moment from "moment";
import { useEffect } from "react";
import { AddDay } from "../AddDay";

type Day = {
    id: string;
    data: string;
    userId: string;
    tasks: TaskDTO[];
};

type SelectDay = {
    id: string;
    index: number;
    tasks: TaskDTO[];
};
type TaskDTO = {
    id: string;
    dayId: string;
    name: string;
    hour: string;
    description: string;
};

type PropsSideMenu = {
    setListTasks: any;
    getDays: any;
    days: any;
    select: number;
    setSelect: any;
};

export const SideMenu = ({
    setListTasks,
    getDays,
    days,
    select,
    setSelect,
}: PropsSideMenu) => {
    useEffect(() => {
        getDays();
    }, []);

    const selectDay = ({ id, index, tasks }: SelectDay) => {
        setListTasks(tasks);
        setSelect(index);
    };

    return (
        <>
            {days.map((d: any, index: any) => {
                return (
                    <>
                        <Box
                            key={d.id}
                            onClick={() =>
                                selectDay({ id: d.id, index, tasks: d.tasks })
                            }
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
                                    background:
                                        index === select
                                            ? "#ffffff"
                                            : "#E7E7E7",
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
            <AddDay getDays={getDays} />
            <Box
                sx={{
                    marginTop: "2%",
                }}
            ></Box>
        </>
    );
};
