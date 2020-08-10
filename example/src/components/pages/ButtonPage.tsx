
import React from "react"

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

import ButtonBanner from "../banners/ButtonBanner"

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

const ButtonPage = (props: {dark?:boolean}) => {
  
  const classes = useStyles();
  const { dark } = props

  return (
    <div className={classes.container}>
      <Typography className={classes.text} variant="h2">
        VButton
      </Typography>
      <Typography className={classes.text} variant="h5">
        Buttons allow users to take actions, and make choices, with a single tap.
      </Typography>
      <ButtonBanner dark={dark} />
      <Typography className={classes.text} variant="h5">
        Keep reading!
      </Typography>
      <ul className={classes.linkContanier}>
        <li>
          <Link style={{ backgroundColor: dark ? "rgb(28, 29, 33)" : "#f0f0f0"}}
            color="secondary" 
            href="/components/input" >
            {"<VInput/>"}
          </Link>
        </li>
        <li>
          <Link style={{ backgroundColor: dark ? "rgb(28, 29, 33)" : "#f0f0f0"}}
            color="secondary" 
            href="/components/select" >
              {"<VSelect/>"}
          </Link>
        </li>
        <li>
          <Link style={{ backgroundColor: dark ? "rgb(28, 29, 33)" : "#f0f0f0"}}
            color="secondary" 
            href="/components/autocomplete" >
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


export default ButtonPage