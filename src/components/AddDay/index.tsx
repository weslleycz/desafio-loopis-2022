import { Button, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker-cssmodules.css";
import Vector from "../../assets/Vector.svg";
import { api } from "../../utils/apí";

const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 300,
    bgcolor: "background.paper",
    p: 4,
    margin: "0 auto",
    
    input: {
        background: "#f8f8f8",
        borderColor: "#f0ebeb",
        padding: "3%",
        width: "90%",
        marginTop: "8%",
        marginBlockEnd: "1%",
        outline: "none",
        border: "none",
        borderRight:"25%",
        "-webkit-appearance": "none",
        ":focus":{
            outline: "none",
            
        }
    },
};



export const AddDay = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const createDay = async () => {
        
    }

    return (
        <>
            <Box
                sx={{
                    margin: "0 auto",
                    justifyContent: "center",
                    alignItems: "center",
                    display: "flex",
                    p: "4",
                    padding: "6%",
                    marginTop: "1%",
                    marginBlockEnd:"1%",
                }}
            >
                <Image
                    src={Vector}
                    style={{
                        cursor: "pointer",
                    }}
                    height={25}
                    alt="Adicionar dia"
                    onClick={handleOpen}
                ></Image>
            </Box>
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
                <Box sx={style}>
                    <Typography variant="h6" gutterBottom>
                        Selecione o dia que gostaria de registrar
                    </Typography>
                    <DatePicker
                        locale="pt-BR"
                        selected={startDate}
                        onChange={(date: Date) => setStartDate(date)}
                    />
                    <Box
                        sx={{
                            marginTop: "10%",
                            width: "96%",
                        }}
                    >
                        <Stack direction="row" spacing={8}>
                            <Button
                                sx={{
                                    borderRadius: "75px",
                                }}
                                fullWidth
                                color="info"
                                variant="contained"
                                onClick={() => handleClose()}
                            >
                                Cancelar
                            </Button>
                            <Button
                                fullWidth
                                sx={{
                                    borderRadius: "75px",
                                }}
                                color="success"
                                variant="contained"
                            >
                                Salvar
                            </Button>
                        </Stack>
                    </Box>
                </Box>
            </Modal>
        </>
    );
};
