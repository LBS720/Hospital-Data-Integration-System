/** @format */

import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import Sidebar from "../components/Sidebar";
import { createUseStyles } from "react-jss";
import { theme } from "../theme";
import { GenericTable } from "../components/GenericTable";
import Loader from "../components/Loader";
import { SidebarOption } from "../constants/SidebarOptions";
import { columnsMap } from "../constants/TableColumns";
import { sidebarStore } from "../store";
import { dataMap } from "../constants/TableDataMap";
import { loadingMap } from "../constants/TableLoadingMap";
import { fetchMap } from "../constants/TableFetchMap";

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
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  tableContainer: {
    width: "100%",
    maxWidth: 1200,
    background: theme.tableCellBg,
    borderRadius: 16,
    boxShadow: "0 2px 12px rgba(0,0,0,0.07)",
    padding: 24,
    marginTop: 32,
    overflowX: "auto",
    overflowY: "auto",
    maxHeight: "70vh",
  },
});

const BasePage: React.FC = observer(() => {
  const classes = useStyles();
  const selected = sidebarStore.selected || SidebarOption.Patients;

  useEffect(() => {
    fetchMap[selected]();
  }, [selected]);

  const columns = columnsMap[selected];
  const data = dataMap[selected];
  const isLoading = loadingMap[selected];

  return (
    <div className={classes.app}>
      <Sidebar />
      <main className={classes.main}>
        <div className={classes.tableContainer}>
          {isLoading ? (
            <Loader />
          ) : (
            <GenericTable columns={columns} data={data()} />
          )}
        </div>
      </main>
    </div>
  );
});

export default BasePage;
