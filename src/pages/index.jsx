import React, { useState } from "react";
import Link from "next/link";
import validator from "validator";
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

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [submitError, setSubmitError] = useState("");

  //LOGIN
  const login = async (e) => {
    // validate email
    if (!email) {
      setEmailError("Enter your email please");
    } else {
      if (!validator.isEmail(email)) {
        setEmailError("Enter a valid email");
      }
    }
    // validate password

    if (!password) {
      setPasswordError("Enter your password please");
    } else {
      setPasswordError("");
    }
    if (!emailError && !passwordError) {
      try {
        const response = await fetch(
          "https://blog-backend-production-9b56.up.railway.app/auth/login",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
          }
        );
        if (response.ok) {
          router.push("/home");
        } else {
          setSubmitError("Wrong email or password");
        }
      } catch (error) {
        submitError("se produjo un error al iniciar sesion");
        console.log(error);
      }
    }
  };
  const classes = useStyles();

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
              onChange={(e) => setEmail(e.target.value)}
            />
            {emailError && <p className="text-danger">{emailError}</p>}
            {submitError && <p className="text-danger">{submitError}</p>}
            <TextField
              fullWidth
              type="password"
              color="primary"
              margin="normal"
              variant="outlined"
              label="Password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {passwordError && <p className="text-danger">{passwordError}</p>}
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
