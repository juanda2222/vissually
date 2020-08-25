
import React from "react"

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { Link as RouterLink } from "react-router-dom";
import InputBanner from "../banners/InputBanner"
import NumberInputBanner from "../banners/NumberInputBanner"

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
    linkContainer: {
      display: "flex",
      flexDirection: "column",
      "& > *": {
        margin: "4px",
      }
    },
  })
);

const InputPage = (props: {dark?:boolean}) => {
  
  const classes = useStyles();
  const { dark } = props

  return (
    <div className={classes.container}>
      <Typography className={classes.text} variant="h2">
        VInput
      </Typography>
      <Typography className={classes.text} variant="h5">
        Text and number fields let users enter and edit values like a normal html input tag.
      </Typography>
      <Typography className={classes.text} variant="h6">
        Text fields allow users to enter text into a UI. They typically appear in forms and dialogs.
      </Typography>
      <Typography className={classes.text} variant="h4">
        Text Input
      </Typography>
      <InputBanner dark={dark} />
      <Typography className={classes.text} variant="h4">
        Number Input
      </Typography>
      <NumberInputBanner dark={dark} />
      <Typography className={classes.text} variant="h5">
        Keep reading!
      </Typography>
      <ul className={classes.linkContainer}>
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
            to="/components/autocomplete" >
              {"<VAutoComplete/>"}
          </Link>
        </li>
      </ul>
      <Typography className={classes.text} variant="h6">
        Need more? See the full documentation
        <Link
          color="secondary"
          href="https://personal-public-files-23rde2.s3.amazonaws.com/documentation/index.html"
        >
          here.
        </Link>
      </Typography>
    </div>
  );
};


export default InputPage