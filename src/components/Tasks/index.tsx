import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Box, Button, Card, CardContent } from "@mui/material";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Container from '@mui/material/Container';
import Chip from '@mui/material/Chip';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';

export const Tasks = () => {
    return (
        <>
            <Box
                sx={{
                    marginTop: "2%",
                    background: "#C4C4C4",
                    height: "95vh",
                    display: "block",
                    textAlign: "center",
                }}
            >
                <Box
                    sx={{
                        padding: "1.5%",
                    }}
                >
                </Box>
                <Container maxWidth="xl">
            
                <Box>
                    <Card
                        sx={{
                            width: "25%",
                            borderRadius: "10px",
                        }}
                    >
                        <CardContent>
                            <Stack direction="row" spacing={9}>
                                <Typography
                                    variant="button"
                                    display="block"
                                    gutterBottom
                                >
                                    <strong>Fazer o almoço:</strong>
                                </Typography>
                                <MoreHorizIcon
                                    sx={{
                                        color: "#cfcccc",
                                    }}
                                />
                            </Stack>
                            <Typography
                                sx={{
                                    textAlign: "left",
                                }}
                                variant="subtitle1"
                                gutterBottom
                            >
                                Fazer uma lasanha de frango com molho branco, um
                                bife a parmegiana, e um macarrão carbonara...
                            </Typography>
                            <Box sx={{
                                textAlign: "left",
                                justifyContent:"left"
                            }}>
                            <Chip
                            color="info"
                            size="medium"
                            sx={{
                                color:"#ffff"
                            }}
                             label="🕗 Mar 09:30" />
                            </Box>
                        </CardContent>
                    </Card>

                    
                </Box>

                </Container>
            
                <footer
                    style={{
                        bottom: 70,
                        position: "fixed",
                        marginRight: "10%",
                        width: "83.5%",
                    }}
                >
                    <Button variant="contained">
                        Insira uma nova atividade do dia
                    </Button>
                </footer>
            </Box>
        </>
    );
};
