
import React from "react"
import { makeStyles } from '@material-ui/core/styles';
//import  SyntaxHighlighter from 'react-syntax-highlighter';
//import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
// @ts-ignore: has no exported member 'anOldHope'
//import { anOldHope } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import Typography from '@material-ui/core/Typography';
//import Link from '@material-ui/core/Link';

const useStyles = makeStyles({
  title: {
    flexGrow: 1,
  },
});

const InstallationPage = () => {
  
  const classes = useStyles();

  return (
    <div>
      <Typography variant="h1" className={classes.title} >
          Basic Style
      </Typography>  
      <Typography variant="body1" >
          Install Vissually, the world's less popular React UI Library!
      </Typography> 
    </div>
  );
};


export default InstallationPage