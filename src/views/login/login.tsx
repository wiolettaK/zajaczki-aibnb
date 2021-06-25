import { Avatar, Box, Button, Checkbox, Container, CssBaseline, FormControlLabel, Grid, makeStyles, TextField, Typography, withStyles } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Link from '@material-ui/core/Link';
import React, { FunctionComponent, SyntheticEvent, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import './login.scss';

const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%',
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
}));

const CssTextField = withStyles({
    root: {
      '& label.Mui-focused': {
        color: 'green',
      },
      '& .MuiOutlinedInput-root': {

        '&.Mui-focused fieldset': {
          borderColor: 'green',
        },
      },
    },
  })(TextField);

const Login: FunctionComponent<any> = (): JSX.Element => {

    const classes = useStyles();

    const submitForm = (e: React.FormEvent): void => {
        console.log('Siemaneczko');
     };

    return (
        <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Zaloguj
          </Typography>
          <form className={classes.form} onSubmit={submitForm} noValidate>
            <CssTextField 
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Adres email użytkownika"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Hasło"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={`login-button ${classes.submit}`}
            >
              Zaloguj się
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Zapomniałeś hasła?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Nie masz konta? Zarejestruj się!"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    );
 };
 
 export default Login;