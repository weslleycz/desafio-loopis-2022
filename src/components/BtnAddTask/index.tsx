import { Button } from "@mui/material";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";

const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "#e7e7e7",
    p: 4,
};

export const BtnAddTask = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <>
            <footer
                style={{
                    bottom: 45,
                    position: "fixed",
                    marginRight: "10%",
                    width: "83.5%",
                }}
            >
                <Button onClick={handleOpen} variant="contained">
                    Insira uma nova atividade
                </Button>
            </footer>
        </>
    );
};
