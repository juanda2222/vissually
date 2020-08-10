
import React from "react"
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import personal_logo from "../../assets/personal_logo.png"
import {Link as RouterLink} from "react-router-dom";
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    
    BigContainer: {
      backgroundColor: theme.palette.background.default,
      height: "calc(100vh - 124px)",
      minHeight: "100%",
      //padding: "10vh 6vw",
      paddingLeft: "12vw",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row",
      [theme.breakpoints.down('sm')]: {
        flexDirection: "column",
        textAlign: "center",
      },
    },
    container: {
      display: "flex",
      flexDirection: "column",
      marginLeft: "10vh",
      marginTop:"5vh",
      "& > *": {
        margin: "10px",
      }
    },
    button: {
      marginRight: "auto",
      [theme.breakpoints.down('sm')]: {
        margin: "12px auto"
      },
    }
  })
);

const HomePage = () => {

  const classes = useStyles();

  return (
    <Box className={classes.BigContainer}>
      <img style={{
        width: "auto",
        height: "auto",
        display: "block",
        maxWidth:"200px",

      }} alt="personal logo" src={personal_logo} />
      <div className={classes.container}>
        <Typography color="primary" variant="h2">
          Vissually
        </Typography>
        <Typography color="primary" variant="h5">
          React components for faster and easier web development. Build your own design system, or start with Vissually.
        </Typography>
        <Button
          className={classes.button}
          color="primary"
          variant="outlined"
          component={RouterLink}
          to="/get-started/installationh"
        >
          Get Started
        </Button>
      </div>
    </Box>
  );
};


export default HomePage