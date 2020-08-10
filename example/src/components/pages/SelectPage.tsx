
import React from "react"

import { createStyles, makeStyles, /*Theme*/ } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

import SelectInputBanner from "../banners/SelectInputBanner"

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

const SelectPage = (props: {dark?:boolean}) => {
  
  const classes = useStyles();
  const { dark } = props

  return (
    <div className={classes.container}>
      <Typography color="inherit" variant="h2">
        VSelect
      </Typography>
      <Typography color="inherit" variant="h5">
        Select components are used for collecting user provided information from a list of options.
      </Typography>
      <Typography color="inherit" variant="h4">
        Select Input
      </Typography>
      <SelectInputBanner dark={dark} />
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
            href="/components/input" >
              {"<VInput/>"}
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


export default SelectPage