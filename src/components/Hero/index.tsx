import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";
import Image from "next/image";
import Audit from "../../assets/Audit-pana.svg";

export const Hero = () => {
  return (
    <>
      <Container maxWidth="md">
        <Box sx={{ width: "80%",
       }}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid
              sx={{
                margin: "0 auto",
                textAlign: "center",
                justifyContent: "center",
                alignItems: "center",
                marginY: "29%",
              }}
              xs={6}
            >
              <Box
                sx={{
                  color: "#ffffff",
                  width: "80%",
                }}
              >
                <Typography 
                variant="h4" gutterBottom>
                  Agenda Loopis
                </Typography>
                <Typography
                  sx={{
                    marginBlock: "4%",
                  }}
                  variant="subtitle1"
                  gutterBottom
                >
                  Seja bem vindo a agenda da Loopis. Vamos começar a anotar suas
                  programações?
                </Typography>
                <Button
                  color="primary"
                  fullWidth
                  sx={{
                    width: "90%",
                    marginBlock: "5%",
                    borderRadius:"75px"
                  }}
                  size="large"
                  variant="contained"
                >
                  Começar
                </Button>
              </Box>
            </Grid>
            <Grid
              sx={{
                margin: "0 auto",
                textAlign: "center",
                justifyContent: "center",
                alignItems: "center",
                marginY: "5%",
              }}
              xs={6}
            >
              <Image
                src={Audit}
                height={545}
                alt="Picture of the author"
              ></Image>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};
