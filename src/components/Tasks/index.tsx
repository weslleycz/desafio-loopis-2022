import MoreVertIcon from "@mui/icons-material/MoreVert";
import {
    Box,
    Button,
    List,
    ListItem,
    Menu,
    MenuItem,
    Modal,
    Stack,
    Typography,
} from "@mui/material";
import Container from "@mui/material/Container";
import Fade from "@mui/material/Fade";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import React, { useState } from "react";
import { TaskDTO } from "../../pages/dashboard";
import { api } from "../../utils/apí";
import { BtnAddTask } from "../BtnAddTask";

type Props = {
    listTasks: TaskDTO[];
    setListTasks: any;
    getDays: any;
    day: TaskDTO;
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

export const Tasks = ({ listTasks, setListTasks, getDays, day }: Props) => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const [openDelete, setOpenDelete] = useState(false);
    const handleOpenDelete = () => setOpenDelete(true);
    const handleCloseDelete = () => setOpenDelete(false);

    const [idTasks, setIdTasks] = useState({
        id: "rffdgfgf",
        name: "teste",
    });

    const handleClose = () => {
        setAnchorEl(null);
    };

    const selectDelete = (id: string, name: string) => {
        try {
            setIdTasks({
                id,
                name,
            });
            if (idTasks.id != "rffdgfgf") {
                handleOpenDelete();
            }
        } catch (error) {
            console.log(error);
        }
    };

    const deleteTasks = async () => {
        console.log(1234);
        const data = await api.delete(`/task/delete/${idTasks.id}`);
        getDays();
        handleCloseDelete()
    };

    return (
        <>
            <Box
                sx={{
                    marginTop: "2%",
                    background: "#C4C4C4",
                    height: "98vh",
                    display: "block",
                    textAlign: "center",
                }}
            >
                <Container maxWidth="xl">
                    <Grid
                        container
                        rowSpacing={1}
                        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                    >
                        {listTasks.map((index) => {
                            return (
                                <>
                                    <Grid key={index.id} item xs={4}>
                                        <Box
                                            sx={{
                                                width: "100%",
                                                maxWidth: 360,
                                                bgcolor: "background.paper",
                                            }}
                                        >
                                            <List>
                                                <IconButton
                                                    aria-controls={
                                                        open
                                                            ? "fade-menu"
                                                            : undefined
                                                    }
                                                    aria-haspopup="true"
                                                    aria-expanded={
                                                        open
                                                            ? "true"
                                                            : undefined
                                                    }
                                                    onClick={handleClick}
                                                    sx={{
                                                        marginLeft: "80%",
                                                    }}
                                                >
                                                    <MoreVertIcon />
                                                </IconButton>
                                                <Menu
                                                    id="fade-menu"
                                                    MenuListProps={{
                                                        "aria-labelledby":
                                                            "fade-button",
                                                    }}
                                                    anchorEl={anchorEl}
                                                    open={open}
                                                    onClose={handleClose}
                                                    TransitionComponent={Fade}
                                                >
                                                    <MenuItem
                                                        onClick={handleClose}
                                                    >
                                                        Editar
                                                    </MenuItem>
                                                    <MenuItem
                                                        onClick={() =>
                                                            selectDelete(
                                                                index.id,
                                                                index.name
                                                            )
                                                        }
                                                    >
                                                        Excluir
                                                    </MenuItem>
                                                </Menu>
                                                <ListItem disablePadding>
                                                    <Box
                                                        sx={{
                                                            margin: "0 auto",
                                                        }}
                                                    >
                                                        <Typography
                                                            sx={{
                                                                p: "3",
                                                            }}
                                                            variant="h6"
                                                            gutterBottom
                                                        >
                                                            <strong>
                                                                {index.name}
                                                            </strong>
                                                        </Typography>
                                                    </Box>
                                                </ListItem>
                                                <ListItem disablePadding>
                                                    <Box
                                                        sx={{
                                                            margin: "0 auto",
                                                        }}
                                                    >
                                                        <Typography
                                                            variant="subtitle1"
                                                            gutterBottom
                                                            sx={{
                                                                padding: "8%",
                                                            }}
                                                        >
                                                            {index.description}
                                                        </Typography>
                                                        <Typography
                                                            variant="subtitle1"
                                                            gutterBottom
                                                            sx={{
                                                                marginLeft:
                                                                    "5%",
                                                            }}
                                                        >
                                                            🕗 {index.hour}
                                                        </Typography>
                                                    </Box>
                                                </ListItem>
                                            </List>
                                        </Box>
                                    </Grid>
                                </>
                            );
                        })}
                    </Grid>
                </Container>
                <BtnAddTask getDays={getDays} day={day} />
            </Box>

            <Modal
                open={openDelete}
                onClose={handleCloseDelete}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography variant="h6" gutterBottom>
                        Deseja exlcuir a seguinte atividade:
                        <strong>{idTasks.name}</strong>
                    </Typography>
                    <Box
                    sx={{
                        marginTop:"8%"
                    }}
                    >
                    <Stack direction="row" spacing={5}>
                        <Button color="info"
                        fullWidth
                        onClick={()=>handleCloseDelete}
                         variant="contained">
                            Cancelar
                        </Button>
                        <Button color="warning"
                        fullWidth
                        onClick={()=>deleteTasks()}
                         variant="contained">
                            Excluir
                        </Button>
                    </Stack>
                    </Box>
                </Box>
            </Modal>
        </>
    );
};
