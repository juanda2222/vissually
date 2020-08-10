
import React from "react"

import { createStyles, makeStyles, /*Theme*/ } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

import AutoCompleteBanner from "../banners/AutoCompleteBanner"


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


const AutoCompletePage = (props: {dark?:boolean}) => {
  
  const classes = useStyles();
  const { dark } = props
  
  return (
    <div className={classes.container}>
      <Typography color="inherit" variant="h2">
        VAutoComplete
      </Typography>
      <Typography color="inherit" variant="h5">
        The autocomplete is a normal text input enhanced by a panel of suggested options.
      </Typography>
      <AutoCompleteBanner />
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
            href="/components/input" >
              {"<VInput/>"}
          </Link>
        </li>
      </ul>
    </div>
  );
};


export default AutoCompletePage