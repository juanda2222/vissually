
import React from "react"
import Typography from '@material-ui/core/Typography';
//import Button from '@material-ui/core/Button';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
//import { Link as RouterLink } from "react-router-dom";
import Link from '@material-ui/core/Link';
import { Link as RouterLink } from "react-router-dom";
import  SyntaxHighlighter from 'react-syntax-highlighter';
// @ts-ignore: has no exported member 'anOldHope'
import { anOldHope, docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';


const useStyles = makeStyles((theme:Theme) =>
  createStyles({
    
    container: {
      backgroundColor: theme.palette.background.default,
      display: "flex",
      flexDirection: "column",
      padding: "5vh",
      "& > *": {
        margin: "10px",
      }
    },
    linkContanier: {
      display: "flex",
      flexDirection: "column",
      "& > *": {
        margin: "4px",
      }
    },
    text: {
      color: theme.palette.text.primary,
    },
  })
);

const GetStartedPage = (props: { dark: boolean }) => {

  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Typography className={classes.text} variant="h2">
        Usage
      </Typography>
      <Typography className={classes.text} variant="h5">
        Get started with React and Vissually in no time.
      </Typography>
      <Typography className={classes.text} variant="h6">
        You can use any of the components as demonstrated in the documentation. Please refer to each component's demo page to see how they should be imported.
        <Link
          component={RouterLink}
          style={{ marginLeft: "6px" }}
          color="secondary"
          to="/components/button" >
          demo page.
        </Link>
      </Typography>
      <Typography className={classes.text} variant="h3">
        Quick start
      </Typography>
      <div style={{ display: "flex" }}>
        <Typography className={classes.text} variant="h6">
          Here's a quick example to get you started, it's
        </Typography>
        <Typography className={classes.text} variant="h6" style={{marginLeft:"6px" ,fontWeight:550}}>
            literally all you need:
          </Typography>
      </div>
      <SyntaxHighlighter language="javascript" style={props.dark ? anOldHope : docco}>
        {
          `
          import React from 'react';
          import ReactDOM from 'react-dom';
          import VButton from '@juandara/vissually';
          import '@juandara22/vissually/dist/index.css'

          function App() {
            return (
              <Button primary>
                Hello World
              </Button>
            );
          }

          ReactDOM.render(<App />, document.querySelector('#app'));
          `
        }
      </SyntaxHighlighter>
      <Typography className={classes.text} variant="h5">
        Keep reading!
      </Typography>
      <ul className={classes.linkContanier}>
        <li>
          <Link
            component={RouterLink}
            style={{ backgroundColor: props.dark ? "rgb(28, 29, 33)" : "#f0f0f0" }}
            color="secondary" 
            to="/components/button" >
            {"<VInput/>"}
          </Link>
        </li>
        <li>
          <Link
            component={RouterLink}
            style={{ backgroundColor: props.dark ? "rgb(28, 29, 33)" : "#f0f0f0" }}
            color="secondary" 
            to="/components/input" >
            {"<VInput/>"}
          </Link>
        </li>
        <li>
          <Link
            component={RouterLink}
            style={{ backgroundColor: props.dark ? "rgb(28, 29, 33)" : "#f0f0f0" }}
            color="secondary" 
            to="/components/select" >
              {"<VSelect/>"}
          </Link>
        </li>
        <li>
          <Link
            component={RouterLink}
            style={{ backgroundColor: props.dark ? "rgb(28, 29, 33)" : "#f0f0f0" }}
            color="secondary" 
            to="/components/autocomplete" >
              {"<VAutoComplete/>"}
          </Link>
        </li>
      </ul>
      <Typography className={classes.text} variant="h6">
        Need more? See the full documentation <Link color="secondary" href="https://personal-public-files-23rde2.s3.amazonaws.com/documentation/index.html" >here.</Link>
      </Typography>
    </div>
  );
};


export default GetStartedPage