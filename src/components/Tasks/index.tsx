import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Box, List, ListItem, Menu, MenuItem, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import Fade from "@mui/material/Fade";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import React from "react";
import { TaskDTO } from "../../pages/dashboard";
import { BtnAddTask } from "../BtnAddTask";

type Props = {
    listTasks: TaskDTO[];
    setListTasks: any;
    getDays:any;
    day:TaskDTO;
};


export const Tasks = ({ listTasks, setListTasks,getDays,day }: Props) => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
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
                                                        onClick={handleClose}
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
                <BtnAddTask getDays={getDays} 
                day={day}
                />
            </Box>
        </>
    );
};
