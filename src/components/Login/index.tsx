import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { Box, Button, Modal, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";

type Props = {
  open: boolean;
  setOpen: any;
};

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#e7e7e7",
  p: 4,
  borderRadius: "10px",
};

export const Login = ({ open, setOpen }: Props) => {
  const handleClose = () => setOpen(false);
  return (
    <>
      <Modal
        sx={{
          background: "rgba( 255, 255, 255, 0.25 )",
          boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
          backdropFilter: "blur( 4px )",
          "-webkit-backdrop-filter": "blur( 4px )",
        }}
        open={open}
        onClose={handleClose}
        aria-labelledby="login"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box
            sx={{
              justifyContent: "space-between",
            }}
          >
            <CloseOutlinedIcon
              sx={{
                color: "#cac5c5",
                marginLeft: "95%",
                cursor: "pointer",
              }}
              onClick={() => handleClose()}
            ></CloseOutlinedIcon>
          </Box>
          <Typography
            sx={{
              marginBlockEnd: "5%",
            }}
            variant="h5"
            gutterBottom
          >
            <strong>Login</strong>
          </Typography>
          <Divider
            sx={{
              marginBlockEnd: "8%",
            }}
          />
          <TextField
            id="outlined-disabled"
            label="Email"
            fullWidth
            type="email"
            autoComplete="current-email"
            color="info"
            sx={{
              marginBlockEnd: "3%",
              background:"#f8f8f8"
            }}
          />
          <TextField
            id="outlined-disabled"
            label="Senha"
            fullWidth
            color="info"
            type="password"
            autoComplete="current-password"
            sx={{
              marginBlockEnd: "20%",
              background:"#f8f8f8"
            }}
          />
          <Button
            fullWidth
            size="large"
            sx={{
              marginBlockEnd: "3%",
              borderRadius:"75px"
            }}
            variant="contained"
          >
            Entrar
          </Button>

          <Button
            fullWidth
            color="info"
            size="large"
            sx={{
              marginBlockEnd: "3%",
              borderRadius:"75px"
            }}
            variant="text"
          >
            <strong>Cadastre-se</strong>
          </Button>
        </Box>
      </Modal>
    </>
  );
};
