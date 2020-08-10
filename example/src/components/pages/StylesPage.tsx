
import React from "react"
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

import StylesBanner from "../banners/StylesBanner"
import StylesThemeBanner from "../banners/StylesThemeBanner"

const useStyles = makeStyles((theme:Theme) =>
  createStyles({
    text: {
      color: theme.palette.text.primary,
    },
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
  })
);


const StylePage = (props: {dark:boolean}) => {
  
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Typography className={classes.text} variant="h2">
        Styling
      </Typography>  
      <Typography className={classes.text} variant="h5" >
        Use your normal inline style and css modules to style the components:
      </Typography> 
      <Typography className={classes.text} variant="h4">
        Basic Styles
      </Typography>
      <StylesBanner dark={props.dark}/>
      <Typography className={classes.text} variant="h4">
        Themed Styles
      </Typography>
      <StylesThemeBanner dark={props.dark}/> 
      
      <Typography className={classes.text} variant="h6">
        Need more? See the full documentation <Link color="secondary" href="https://personal-public-files-23rde2.s3.amazonaws.com/documentation/index.html" >here.</Link>
      </Typography>
    </div>
  );
};


export default StylePage