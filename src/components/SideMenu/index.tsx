import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Vector from "../../assets/Vector.svg";

export const SideMenu = () => {
    return (
        <>
            <Box
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
                        ":hover":{
                            filter: "brightness(90%)"
                        }
                    }}
                >
                    <CardContent>
                        <Typography variant="h6" gutterBottom>
                            04/11
                        </Typography>
                        <Typography variant="subtitle2" gutterBottom>
                            2022
                        </Typography>
                        <Chip sx={{cursor: "pointer",}} label="Hoje" />
                    </CardContent>
                </Card>
            </Box>

            <Box
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
                        ":hover":{
                            filter: "brightness(90%)"
                        }
                    }}
                >
                    <CardContent>
                        <Typography variant="h6" gutterBottom>
                            04/11
                        </Typography>
                        <Typography variant="subtitle2" gutterBottom>
                            2022
                        </Typography>
                        <Chip sx={{cursor: "pointer",}} label="Hoje" />
                    </CardContent>
                </Card>
            </Box>

            <Box
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
                        ":hover":{
                            filter: "brightness(90%)"
                        }
                    }}
                >
                    <CardContent>
                        <Typography variant="h6" gutterBottom>
                            04/11
                        </Typography>
                        <Typography variant="subtitle2" gutterBottom>
                            2022
                        </Typography>
                        <Chip sx={{cursor: "pointer",}} label="Hoje" />
                    </CardContent>
                </Card>
            </Box>

            <Box
                sx={{
                    margin: "0 auto",
                    justifyContent: "center",
                    alignItems: "center",
                    display: "flex",
                    p: "4",
                    padding: "6%",
                    marginTop: "1%",
                }}
            >
                <Image
                    src={Vector}
                    style={{
                        cursor: "pointer",
                    }}
                    height={25}
                    alt="Adicionar dia"
                ></Image>
            </Box>
            <Box
                sx={{
                    marginTop: "2%",
                }}
            >
            </Box>
        </>
    );
};
