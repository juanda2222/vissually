
import React from "react"
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import personal_logo from "../../assets/personal_logo.png"
import {Link as RouterLink} from "react-router-dom";
//import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    
    BigContainer: {
      backgroundColor: theme.palette.background.default,
      height: "calc(100vh - 124px)",
      width: "100%",
      minHeight: "100%",
      paddingTop: "4%",
      //padding: "10vh 6vw",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row",
      [theme.breakpoints.down('sm')]: {
        paddingTop: "0px",
        flexDirection: "column",
        textAlign: "center",
      },
    },
    img: {
      margin: "0px",
      [theme.breakpoints.up('md')]: {
        marginLeft: "12vw",
      },
    },
    container: {
      display: "flex",
      flexDirection: "column",
      marginLeft: "10vh",
      [theme.breakpoints.down('sm')]: {
        marginLeft: "0px"
      },
      marginTop:"5vh",
      "& > *": {
        margin: "10px",
      },
    },
    text: {
      color: theme.palette.type==="dark" ? theme.palette.text.primary: theme.palette.primary.main,
    },
    button: {
      color: theme.palette.type==="dark" ? theme.palette.primary.light : theme.palette.primary.dark,
      marginRight: "auto",
      [theme.breakpoints.down('sm')]: {
        margin: "12px auto"
      },
    }
  })
);

function HomePage () {

  const classes = useStyles();

  return (
    <div className={classes.BigContainer}>
      <img
        className={classes.img}
        style={{
        width: "auto",
        height: "auto",
        display: "block",
        maxWidth:"170px",

      }} alt="Alfagenos David personal logo" src={personal_logo} />
      <div className={classes.container}>
        <Typography className={classes.text} color="primary" variant="h2">
          Vissually
        </Typography>
        <Typography className={classes.text} color="primary" variant="h5">
          React components for faster and easier web development. Build your own design system, or start with Vissually.
        </Typography>
        <Button
          className={classes.button}
          color="primary"
          variant="outlined"
          component={RouterLink}
          to="/get-started/installation"
        >
          Get Started
        </Button>
      </div>
    </div>
  );
};


export default HomePage