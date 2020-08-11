
import React from "react"

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { Link as RouterLink } from "react-router-dom";
import AutoCompleteBanner from "../banners/AutoCompleteBanner"


const useStyles = makeStyles((theme: Theme) =>
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


const AutoCompletePage = (props: {dark?:boolean}) => {
  
  const classes = useStyles();
  const { dark } = props
  
  return (
    <div className={classes.container}>
      <Typography className={classes.text} variant="h2">
        VAutoComplete
      </Typography>
      <Typography className={classes.text} variant="h5">
        The autocomplete is a normal text input enhanced by a panel of suggested options.
      </Typography>
      <AutoCompleteBanner dark={dark}/>
      <Typography className={classes.text}  variant="h5">
        Keep reading!
      </Typography>
      <ul className={classes.linkContanier}>
        <li>
          <Link 
            component={RouterLink}
            style={{ backgroundColor: dark ? "rgb(28, 29, 33)" : "#f0f0f0"}}
            color="secondary" 
            to="/components/button" >
            {"<VButton/>"}
          </Link>
        </li>
        <li>
          <Link 
            component={RouterLink}
            style={{ backgroundColor: dark ? "rgb(28, 29, 33)" : "#f0f0f0"}}
            color="secondary" 
            to="/components/select" >
              {"<VSelect/>"}
          </Link>
        </li>
        <li>
          <Link 
            component={RouterLink}
            style={{ backgroundColor: dark ? "rgb(28, 29, 33)" : "#f0f0f0"}}
            color="secondary" 
            to="/components/input" >
              {"<VInput/>"}
          </Link>
        </li>
      </ul>
      <Typography className={classes.text} variant="h6">
        Need more? See the full documentation <Link color="secondary" href="https://personal-public-files-23rde2.s3.amazonaws.com/documentation/index.html" >here.</Link>
      </Typography>
    </div>
  );
};


export default AutoCompletePage