
import React from "react"
import { createStyles, makeStyles, /*Theme*/ } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

import StylesBanner from "../banners/StylesBanner"
import StylesThemeBanner from "../banners/StylesThemeBanner"

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      display: "flex",
      flexDirection: "column",
      margin: "5vh",
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
  })
);


const StylePage = () => {
  
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Typography color="inherit" variant="h2">
        Styling
      </Typography>  
      <Typography variant="h5" >
        Use your normal inline style and css modules to style the components:
      </Typography> 
      <Typography color="inherit" variant="h4">
        Basic Styles
      </Typography>
      <StylesBanner />
      <Typography color="inherit" variant="h4">
        Themed Styles
      </Typography>
      <StylesThemeBanner />
      <Typography color="inherit" variant="h5">
        Keep reading!
      </Typography>
      <Typography color="inherit" variant="h5">
        Need more? See the full documentation <Link color="secondary" href="https://www.npmjs.c2/vissually" >here.</Link>
      </Typography>
    </div>
  );
};


export default StylePage