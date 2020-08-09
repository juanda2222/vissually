
import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import  SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
// @ts-ignore: has no exported member 'anOldHope'
import { anOldHope } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles({
  title: {
    flexGrow: 1,
  },
});

const InstallationPage = (props: { dark?: boolean }) => {
  
  const classes = useStyles();

  return (
    <div>
      <Typography variant="h1" className={classes.title} >
          Installation
      </Typography>  
      <Typography variant="body1" >
          Install Vissually, the world's less popular React UI Library!
      </Typography> 
      <Typography variant="h6" >Vissually is available as a </Typography>
      <Link
        href="https://www.npmjs.com/package/@juandara22/vissually"
        onClick={(event: React.SyntheticEvent) => event.preventDefault()}>
        npm package
        </Link>
      <Typography variant="h3" className={classes.title} >
        npm
      </Typography>  
      <Typography variant="h6" className={classes.title} >
        To install and save in your <code>package.json</code> dependencies, run:
      </Typography>  
      <SyntaxHighlighter language="bash" style={props.dark ? anOldHope : docco}>
        {
          `// with npm
          npm install @material-ui/core

          // with yarn
          yarn add @material-ui/core`
        }
      </SyntaxHighlighter>

    </div>
  );
};


export default InstallationPage