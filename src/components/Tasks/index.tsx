import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";

export const Tasks = () => {
    return (
        <>
            <Box
                sx={{
                    marginTop: "2%",
                    background: "#C4C4C4",
                    height: "95vh",
                    display: "block",
                    textAlign:"center",
                }}
            >
                <Box
                sx={{
                    padding:"1.5%"
                }}
                >
                <Box
                sx={{
                    background: "#afafaf",
                    width:"40%",
                    margin: "0 auto",
                    borderRadius:"10px",
                    p:0.5,
                }}
                >
                <Typography variant="h5" gutterBottom>
                    Atividades do dia:
                </Typography>
                <Typography variant="h5" gutterBottom>
                    xx/xx/xxxx
                </Typography>
                </Box>
                </Box>
            </Box>
        </>
    );
};
