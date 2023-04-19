import React, { useState } from "react";
import Link from "next/link";
import UseForm from "@/src/hooks/UseForm";
import { useRouter } from "next/router";
import {
  Grid,
  Container,
  Paper,
  Avatar,
  Typography,
  TextField,
  Button,
  CssBaseline,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { LockOutlined as LockOutlinedIcon } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
  },
  container: {
    opacity: "0.8",
    height: "80%",
    marginTop: theme.spacing(10),
    [theme.breakpoints.down(400 + theme.spacing(2) + 2)]: {
      marginTop: 0,
      width: "100%",
      height: "100%",
    },
  },
  div: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },

  button2: {
    textDecoration: "none",
  },
  btn: {
    marginTop: "20px",
  },
}));

const LoginPage = () => {
  const router = useRouter();
  const [form, handlerChangeForm, handlerResetForm] = UseForm({
    email: "",
    password: "",
  });
  const { email, password } = form;

  //LOGIN
  const login = async (e) => {
    const response = await fetch(
      "https://blog-backend-production-9b56.up.railway.app/auth/login",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      }
    );

    if (response.ok) {
      router.push("/");
    } else {
      const errorData = await response.json();
    }
    handlerResetForm();
  };

  const classes = useStyles();

  const onSubmit = () => {};

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Container
        component={Paper}
        elevation={5}
        maxWidth="xs"
        className={classes.container}
      >
        <div className={classes.div} onSubmit={login}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign In
          </Typography>
          <form className={classes.form}>
            <TextField
              fullWidth
              autoFocus
              color="primary"
              margin="normal"
              variant="outlined"
              label="Email"
              name="email"
              value={email}
              onChange={handlerChangeForm}
            />
            <TextField
              fullWidth
              type="password"
              color="primary"
              margin="normal"
              variant="outlined"
              label="Password"
              name="password"
              value={password}
              onChange={handlerChangeForm}
            />
            <a href="" className="forgotPassword">
              ¿Forgot your password?
            </a>

            <Button
              fullWidth
              variant="contained"
              color="secondary"
              className={classes.btn}
              onClick={() => login()}
            >
              Sign In
            </Button>

            <Link className={classes.button2} href="/auth/register">
              <Button
                fullWidth
                variant="contained"
                color="secondary"
                onClick={() => onSubmit()}
                className={classes.btn}
              >
                Register
              </Button>
            </Link>
          </form>
        </div>
      </Container>
    </Grid>
  );
};

export default LoginPage;
