
import React from "react"
import Typography from '@material-ui/core/Typography';
//import Button from '@material-ui/core/Button';
import { createStyles, makeStyles, /*Theme*/ } from '@material-ui/core/styles';
//import { Link as RouterLink } from "react-router-dom";
import Link from '@material-ui/core/Link';

import  SyntaxHighlighter from 'react-syntax-highlighter';
// @ts-ignore: has no exported member 'anOldHope'
import { anOldHope, docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';


const useStyles = makeStyles(() =>
  createStyles({
    
    container: {
      display: "flex",
      flexDirection: "column",
      margin: "5vh",
      "& > *": {
        margin: "10px",
      }
    }
  })
);

const GetStartedPage = (props: { dark: boolean }) => {

  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Typography color="inherit" variant="h2">
        Usage
      </Typography>
      <Typography color="inherit" variant="h5">
        Get started with React and Vissually in no time.
      </Typography>
      <Typography color="inherit" variant="h6">
        You can use any of the components as demonstrated in the documentation. Please refer to each component's demo page to see how they should be imported.
        <Link style={{marginLeft:"6px"}} color="secondary" href="/components/button" >demo page.</Link>
      </Typography>
      <Typography color="inherit" variant="h3">
        Quick start
      </Typography>
      <div style={{ display: "flex" }}>
        <Typography color="inherit" variant="h6">
          Here's a quick example to get you started, it's
        </Typography>
        <Typography color="inherit" variant="h6" style={{marginLeft:"6px" ,fontWeight:550}}>
            literally all you need:
          </Typography>
      </div>
      <SyntaxHighlighter language="javascript" style={props.dark ? anOldHope : docco}>
        {
          `
          import React from 'react';
          import ReactDOM from 'react-dom';
          import VButton from '@juandara/vissually';

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
    </div>
  );
};


export default GetStartedPage