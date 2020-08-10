
import React from "react"

import { createStyles, makeStyles, /*Theme*/ } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

import ButtonBanner from "../banners/ButtonBanner"

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

const ButtonPage = (props: {dark?:boolean}) => {
  
  const classes = useStyles();
  const { dark } = props

  return (
    <div className={classes.container}>
      <Typography color="inherit" variant="h2">
        VButton
      </Typography>
      <Typography color="inherit" variant="h5">
        Buttons allow users to take actions, and make choices, with a single tap.
      </Typography>
      <ButtonBanner dark={dark} />
      <Typography color="inherit" variant="h5">
        Keep reading!
      </Typography>
      <ul className={classes.linkContanier}>
        <li>
          <Link style={{ backgroundColor: dark ? "#0f0f0f" : "#f0f0f0"}}
            color="secondary" 
            href="/components/input" >
            {"<VInput/>"}
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


export default ButtonPage