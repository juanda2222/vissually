
import React from "react"
import Typography from '@material-ui/core/Typography';
//import Button from '@material-ui/core/Button';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
//import { Link as RouterLink } from "react-router-dom";
import Link from '@material-ui/core/Link';

// @ts-ignore: has no exported member 'anOldHope'
import { anOldHope, docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import  SyntaxHighlighter from 'react-syntax-highlighter';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    
    root: {
      backgroundColor: theme.palette.background.default,
      margin:"8vh 6vw",
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
      margin: "5vh",
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

const GetStartedPage = () => {

  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Typography color="inherit" variant="h2">
        Installation
      </Typography>
      <Typography color="inherit" variant="h5">
        Install Vissually, the world's most popular React UI framework.
      </Typography>
      <Typography color="inherit" variant="h6">
        Vissually is available as an <Link color="secondary" href="https://www.npmjs.com/package/@juandara22/vissually" >npm package.</Link>
      </Typography>
      <Typography  color="inherit" variant="h2" >
        npm
      </Typography>  
      <Typography color="inherit" variant="h5" >
        To install and save in your <code>package.json</code> dependencies, run:
      </Typography>  
      <SyntaxHighlighter language="bash" style={false ? anOldHope : docco}>
        {
          `
          # with npm
          npm install @juandara22/vissually

          # with yarn
          yarn add @juandara22/vissually
          `
        }
      </SyntaxHighlighter>
      <Typography style={{ display: "flex" }} color="inherit" variant="h6">
        Go to the
        <Link style={{ marginLeft: "5px", marginRight: "5px" }} color="secondary" href="/get-started/usage" >
          usage 
        </Link>
        page to start!
      </Typography>
    </div>
  );
};


export default GetStartedPage