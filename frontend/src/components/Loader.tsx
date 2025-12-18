/** @format */

import React from "react";
import { createUseStyles } from "react-jss";
import { theme } from "../theme";

const useStyles = createUseStyles({
  loaderContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    minHeight: 200,
    width: "100%",
  },
  spinner: {
    border: `6px solid ${theme.tableBorder}`,
    borderTop: `6px solid ${theme.sidebarBg}`,
    borderRadius: "50%",
    width: 48,
    height: 48,
    animation: "$spin 1s linear infinite",
  },
  "@keyframes spin": {
    "0%": { transform: "rotate(0deg)" },
    "100%": { transform: "rotate(360deg)" },
  },
});

const Loader: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.loaderContainer}>
      <div className={classes.spinner}></div>
    </div>
  );
};

export default Loader;
