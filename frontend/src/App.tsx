/** @format */

import Sidebar from "./components/Sidebar";
import { createUseStyles } from "react-jss";

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
    background: "#f4f6fa",
    padding: 32,
  },
});

function App() {
  const classes = useStyles();
  return (
    <div className={classes.app}>
      <Sidebar />
      <div className={classes.main}></div>
    </div>
  );
}

export default App;
