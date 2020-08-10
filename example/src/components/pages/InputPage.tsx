
import React from "react"

import { createStyles, makeStyles, /*Theme*/ } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

import TextInputBanner from "../banners/TextInputBanner"
import NumberInputBanner from "../banners/NumberInputBanner"

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

const InputPage = (props: {dark?:boolean}) => {
  
  const classes = useStyles();
  const { dark } = props

  return (
    <div className={classes.container}>
      <Typography color="inherit" variant="h2">
        VInput
      </Typography>
      <Typography color="inherit" variant="h5">
        Text and number fields let users enter and edit values like a normal html input tag.
      </Typography>
      <Typography color="inherit" variant="h6">
        Text fields allow users to enter text into a UI. They typically appear in forms and dialogs.
      </Typography>
      <Typography color="inherit" variant="h4">
        Text Input
      </Typography>
      <TextInputBanner />
      <Typography color="inherit" variant="h4">
        Number Input
      </Typography>
      <NumberInputBanner />
      <Typography color="inherit" variant="h5">
        Keep reading!
      </Typography>
      <ul className={classes.linkContanier}>
        <li>
          <Link style={{ backgroundColor: dark ? "#0f0f0f" : "#f0f0f0"}}
            color="secondary" 
            href="/components/button" >
            {"<VButton/>"}
          </Link>
        </li>
        <li>
          <Link style={{ backgroundColor: dark ? "#0f0f0f" : "#f0f0f0"}}
            color="secondary" 
            href="/components/select" >
              {"<VSelect/>"}
          </Link>
        </li>
        <li>
          <Link style={{ backgroundColor: dark ? "#0f0f0f" : "#f0f0f0"}}
            color="secondary" 
            href="/components/autocomplete" >
              {"<VAutoComplete/>"}
          </Link>
        </li>
      </ul>
    </div>
  );
};


export default InputPage