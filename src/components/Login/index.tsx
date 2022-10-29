import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { Alert, Box, Button, Modal, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import moment from "moment";
import { useRouter } from "next/router";
import { FormEvent, useState } from "react";
import { useCookies } from "react-cookie";
import { api } from "../../utils/apí";

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
    const router = useRouter();
    const [cookies, setCookie, removeCookie] = useCookies(["token"]);
    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        try {
            const res = await api.post("/user/login", {
                email: data.get("email"),
                password: data.get("password"),
            });
            setCookie("token", res.data.token, {
                expires: new Date(moment().add(24, "hours").format()),
            });
            router.push("/dashboard");
        } catch (e: any) {
            setErr(
                <>
                    <Alert severity="warning">{e.response.data.message}</Alert>
                </>
            );
        }
    };


    const [err, setErr] = useState<any>(<></>);
    const [contents, setContents] = useState<any>(
        <>
            <Box component="form" onSubmit={handleSubmit} sx={style}>
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
                    id="email"
                    name="email"
                    label="Email"
                    fullWidth
                    type="email"
                    autoComplete="current-email"
                    color="info"
                    sx={{
                        marginBlockEnd: "3%",
                        background: "#f8f8f8",
                    }}
                />
                <TextField
                    id="password"
                    name="password"
                    label="Senha"
                    fullWidth
                    color="info"
                    type="password"
                    autoComplete="current-password"
                    sx={{
                        background: "#f8f8f8",
                    }}
                />
                <Box
                    sx={{
                        marginBlockEnd: "20%",
                        marginTop: "1%",
                    }}
                >
                    {err}
                </Box>
                <Button
                    type="submit"
                    fullWidth
                    size="large"
                    sx={{
                        marginBlockEnd: "3%",
                        borderRadius: "75px",
                    }}
                    variant="contained"
                >
                    Entrar
                </Button>

                <Button
                    fullWidth
                    color="info"
                    size="large"
                    onClick={() => handleRegistration()}
                    sx={{
                        marginBlockEnd: "3%",
                        borderRadius: "75px",
                    }}
                    variant="text"
                >
                    <strong>Cadastre-se</strong>
                </Button>
            </Box>
        </>
    );

    const handleRegistration = () => {
        setContents(
            <>
                <Box component="form" onSubmit={handleSubmitSingUp} sx={style}>
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
                        <strong>Cadastro</strong>
                    </Typography>
                    <Divider
                        sx={{
                            marginBlockEnd: "8%",
                        }}
                    />
                    <TextField
                        id="email"
                        name="email"
                        label="Email"
                        fullWidth
                        type="email"
                        autoComplete="current-email"
                        color="info"
                        sx={{
                            marginBlockEnd: "3%",
                            background: "#f8f8f8",
                        }}
                    />
                    <TextField
                        id="password"
                        name="password"
                        label="Senha"
                        fullWidth
                        color="info"
                        type="password"
                        autoComplete="current-password"
                        sx={{
                            background: "#f8f8f8",
                            marginBlockEnd: "3%",
                        }}
                    />
                    <TextField
                        id="confirm"
                        name="confirm"
                        label="Confirmar senha"
                        fullWidth
                        color="info"
                        type="password"
                        autoComplete="current-password"
                        sx={{
                            background: "#f8f8f8",
                        }}
                    />
                    <Box
                        sx={{
                            marginBlockEnd: "20%",
                            marginTop: "1%",
                        }}
                    >
                    </Box>
                    <Button
                        type="submit"
                        fullWidth
                        size="large"
                        sx={{
                            marginBlockEnd: "3%",
                            borderRadius: "75px",
                        }}
                        variant="contained"
                    >
                        Cadastrar-se
                    </Button>

                    <Button
                        fullWidth
                        color="info"
                        size="large"
                        onClick={()=>handleLogin()}
                        sx={{
                            marginBlockEnd: "3%",
                            borderRadius: "75px",
                        }}
                        variant="text"
                    >
                        <strong>Voltar</strong>
                    </Button>
                </Box>
            </>
        );
    };

    const handleLogin = () => {
        setContents( <>
            <Box component="form" onSubmit={handleSubmit} sx={style}>
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
                    id="email"
                    name="email"
                    label="Email"
                    fullWidth
                    type="email"
                    autoComplete="current-email"
                    color="info"
                    sx={{
                        marginBlockEnd: "3%",
                        background: "#f8f8f8",
                    }}
                />
                <TextField
                    id="password"
                    name="password"
                    label="Senha"
                    fullWidth
                    color="info"
                    type="password"
                    autoComplete="current-password"
                    sx={{
                        background: "#f8f8f8",
                    }}
                />
                <Box
                    sx={{
                        marginBlockEnd: "20%",
                        marginTop: "1%",
                    }}
                >
                    {err}
                </Box>
                <Button
                    type="submit"
                    fullWidth
                    size="large"
                    sx={{
                        marginBlockEnd: "3%",
                        borderRadius: "75px",
                    }}
                    variant="contained"
                >
                    Entrar
                </Button>

                <Button
                    fullWidth
                    color="info"
                    size="large"
                    onClick={() => handleRegistration()}
                    sx={{
                        marginBlockEnd: "3%",
                        borderRadius: "75px",
                    }}
                    variant="text"
                >
                    <strong>Cadastre-se</strong>
                </Button>
            </Box>
        </>)
    }

    const handleSubmitSingUp = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        if (data.get("password")===data.get("confirm")) {
            try {
              const create = await api.post("/user/create",{
                    email:data.get("email"),
                    password:data.get("password")
                }).then(()=>handleLogin()
                )

            } catch (error) {
                console.log(error);
            }
        }
    }

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
                {contents}
            </Modal>
        </>
    );
};
