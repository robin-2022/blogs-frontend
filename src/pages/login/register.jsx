import React, { useState } from "react";
import UseForm from "@/src/hooks/UseForm";
import Link from "next/link";

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
import axios from "axios";

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
    marginTop: "30px",
    padding: "10px",
  },
}));

const RegisterPage = () => {
  const [form, handlerChangeForm, handlerResetForm] = UseForm({
    name: "",
    email: "",
    password: "",
  });
  const { name, email, password } = form;

  //// VALIDACIONES/////////

  const [errors, setErrors] = useState({});

  const validate = () => {
    let errors = {};
    if (!values.name.trim()) {
      errors.name = "El nombre es requerido";
    }
    if (!values.email) {
      errors.email = "El correo electrónico es requerido";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "El correo electrónico es inválido";
    }
    if (!values.password) {
      errors.password = "La contraseña es requerida";
    } else if (values.password.length < 6) {
      errors.password = "La contraseña debe tener al menos 6 caracteres";
    }
    setErrors(errors);
    return errors;
  };

  //SAVE USERS

  const StoreUsers = async (e) => {
    const errors = validate();
    if (Object.keys(errors).length === 0) {
      await axios.post(
        "https://blog-backend-production-9b56.up.railway.app/auth/signup",
        {
          name: name,
          email: email,
          password: password,
        }
      );
      handlerResetForm();
      alert("Usuerio Registrado Correctamente");
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
        <div className={classes.div} onSubmit={StoreUsers}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Create Account
          </Typography>
          <form className={classes.form}>
            <TextField
              fullWidth
              autoFocus
              color="primary"
              margin="normal"
              variant="outlined"
              label="Name"
              name="name"
              value={name}
              onChange={handlerChangeForm}
            />
            <TextField
              fullWidth
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
            <Link href="/login/login">
              <Button
                fullWidth
                variant="contained"
                color="secondary"
                onClick={() => StoreUsers()}
                className={classes.btn}
              >
                SIGN UP
              </Button>
            </Link>
          </form>
        </div>
      </Container>
    </Grid>
  );
};

export default RegisterPage;
