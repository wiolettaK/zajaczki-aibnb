import {
  Avatar,
  Button,
  Container,
  CssBaseline,
  Grid,
  //Link,
  makeStyles,
  TextField,
  Typography,
  withStyles,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import React, { FunctionComponent, useState } from "react";
import { Link } from "react-router-dom";
import colors from "styles/variables.module.scss";

const useStyles = makeStyles((theme: any) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", 
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: colors.secondary,
  },
}));

const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: colors.secondary,
    },
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: colors.secondary,
      },
    },
  },
})(TextField);

const Register: FunctionComponent<any> = (): JSX.Element => {
  const classes = useStyles();
  const validEmailRegex = new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+[.][a-z]{2,}$/);

  const [values, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    showPassword: false,
    errors: {
      email: "",
      password: "",
      confirmPassword: "",
      lastName: "",
      firstName: "",
    },
  });
  const validateFiltr = (name: string, value: string): void => {
    let error: string;

    switch (name) {
      case "email":
        error = validEmailRegex.test(value)
          ? ""
          : "Wpisz poprawny adres email.";
        break;
      case "password":
        error =
          value.length < 8 ? "Zbyt krótkie hasło (minimum 8 znaków)." : "";
        break;
      case "confirmPassword":
        console.log(values.password, values.confirmPassword);
        error =
          value.length < 8
            ? "Zbyt krótkie hasło (minimum 8 znaków)."
            : (
                values.password &&
                values.confirmPassword &&
                values.password === values.confirmPassword
                  ? ""
                  : "Hasła nie są takie same. Spróbuj ponownie.");
        break;
      case "firstName":
      case "lastName":
        error = value.length < 1 ? "Wpisz imię i nazwisko." : "";
        break;
      default:
        error = "";
        break;
    }
    
    setState(prevState => {
      return {
        ...prevState,
        [name]: value,
        errors: { ...prevState.errors, [name]: error },
      };
    });
    // setValues({
    //    ...values,
    //    [name]: value,
    //    errors: { ...values.errors, [name]: error },
    //  });
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    validateFiltr(name, value);
  };

  const validateForm = (): boolean => {
    const { firstName, lastName, email, password, confirmPassword } = values;
    return (
      firstName.length > 0 &&
      lastName.length > 0 &&
      validEmailRegex.test(email) &&
      password.length > 7 &&
      confirmPassword.length > 7 &&
      password === confirmPassword
    );
  };
  const submitForm = (e: React.FormEvent): void => {
    const { firstName, lastName, email, password, confirmPassword } = values;
    e.preventDefault();
    if (validateForm()){  
       alert("Zarejestrowano");
     }else{
      validateFiltr("firstName", firstName);
      validateFiltr("lastName", lastName);
      validateFiltr("email", email);
      validateFiltr("password", password);
      if (password.length > 7){
        validateFiltr("confirmPassword", confirmPassword);
      }
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Zarejestruj się
        </Typography>
        <form className={classes.form} onSubmit={submitForm} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <CssTextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="Imię"
                autoFocus
                value={values.firstName}
                onChange={handleChange}
                helperText={values.errors.firstName}
                error={!!values.errors.firstName}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CssTextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Nazwisko"
                name="lastName"
                autoComplete="lname"
                value={values.lastName}
                onChange={handleChange}
                helperText={values.errors.lastName}
                error={!!values.errors.lastName}
              />
            </Grid>
            <Grid item xs={12}>
              <CssTextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Adres email"
                name="email"
                autoComplete="email"
                value={values.email}
                onChange={handleChange}
                helperText={values.errors.email}
                error={!!values.errors.email}
              />
            </Grid>
            <Grid item xs={12}>
              <CssTextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Hasło"
                type="password"
                id="password"
                value={values.password}
                onChange={handleChange}
                helperText={values.errors.password}
                error={!!values.errors.password}
              />
            </Grid>
            <Grid item xs={12}>
              <CssTextField
                variant="outlined"
                required
                fullWidth
                name="confirmPassword"
                label="Powtórz hasło"
                type="password"
                id="confirmPassword"
                value={values.confirmPassword}
                onChange={handleChange}
                helperText={values.errors.confirmPassword}
                error={!!values.errors.confirmPassword}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Zarejestruj się
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link to="/login" href="#" style={{ color: colors.secondary }}>
                Masz już konto? Zaloguj się!
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default Register;
