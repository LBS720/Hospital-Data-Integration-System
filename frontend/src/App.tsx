/** @format */

import Sidebar from "./components/Sidebar";
import { createUseStyles } from "react-jss";
import { theme } from "./theme";
import { BrowserRouter } from "react-router-dom";

const useStyles = createUseStyles({
  app: {
    fontFamily: "'Inter', sans-serif",
    display: "flex",
    minHeight: "100vh",
    width: "100vw",
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
  },
  main: {
    flex: 1,
    background: theme.mainBg,
    padding: 32,
  },
});

function App() {
  const classes = useStyles();
  return (
    <BrowserRouter>
      <div className={classes.app}>
        <Sidebar />
        <div className={classes.main}></div>
      </div>
    </BrowserRouter>
  );
}

export default App;
