import {
    Box,
    Button,
    Chip,
    Modal,
    Stack,
    TextField,
    Typography,
} from "@mui/material";
import moment from "moment";
import { FormEvent, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { api } from "../../utils/apí";

type Day = {
    id: string;
    data: string;
    userId: string;
    tasks: TaskDTO[];
};

type TaskDTO = {
    id: string;
    dayId: string;
    name: string;
    hour: string;
    description: string;
};

const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    p: 4,
};

type Props = {
    getDays: any;
    day: Day;
};

export const BtnAddTask = ({ getDays, day }: Props) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const { id } = day;
        const data = new FormData(event.currentTarget);
        const name=data.get("name");
        const description=data.get("description")
        const dayID = id
        const hour = data.get("hour")
        const task = await api.post("/task/create",{
            name,
            description ,
            dayID ,
            hour ,
        });
        getDays();
        handleClose()
    };

    return (
        <>
            <footer
                style={{
                    bottom: 18,
                    position: "fixed",
                    marginRight: "10%",
                    width: "83.5%",
                }}
            >
                <Button onClick={handleOpen} variant="contained">
                    Insira uma nova atividade
                </Button>
            </footer>
            <Modal
                sx={{
                    background: "rgba( 255, 255, 255, 0.25 )",
                    boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
                    backdropFilter: "blur( 4px )",
                    "-webkit-backdrop-filter": "blur( 4px )",
                }}
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box component="form" onSubmit={handleSubmit} sx={style}>
                    <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                        sx={{
                            marginBlockEnd: "8%",
                        }}
                    >
                        Nova Atividade
                    </Typography>
                    <TextField
                        sx={{
                            background: "#f8f8f8",
                            marginBlockEnd: "3%",
                        }}
                        fullWidth
                        name="name"
                        color="info"
                        label="Nome"
                        variant="outlined"
                    />
                    <TextField
                        sx={{
                            background: "#f8f8f8",
                            marginBlockEnd: "3%",
                        }}
                        fullWidth
                        name="hour"
                        color="info"
                        label="Horas"
                        type={"time"}
                        defaultValue="15:00"
                        variant="outlined"
                    />
                    <TextField
                        sx={{
                            background: "#f8f8f8",
                            marginBlockEnd: "3%",
                        }}
                        fullWidth
                        color="info"
                        multiline
                        rows={4}
                        name="description"
                        label="Descrição"
                        variant="outlined"
                    />
                    <Chip
                        label={
                            day
                                ? moment(day.data)
                                      .subtract("days")
                                      .calendar()
                                      .toString()
                                : ""
                        }
                    />
                    <Box>
                        <Stack
                            direction="row"
                            sx={{
                                marginTop: "7%",
                            }}
                            spacing={6}
                        >
                            <Button
                                fullWidth
                                color="info"
                                sx={{
                                    borderRadius: "75px",
                                }}
                                variant="contained"
                                onClick={() => handleClose()}
                            >
                                Cancelar
                            </Button>
                            <Button
                                type="submit"
                                fullWidth
                                color="success"
                                sx={{
                                    borderRadius: "75px",
                                }}
                                variant="contained"
                            >
                                Adicionar
                            </Button>
                        </Stack>
                    </Box>
                </Box>
            </Modal>
        </>
    );
};
