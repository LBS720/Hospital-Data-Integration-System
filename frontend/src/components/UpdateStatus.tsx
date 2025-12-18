/** @format */

import React, { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { patientsMonitoringStore } from "../store";
import { createUseStyles } from "react-jss";

export const useUpdateStatus = () => {
  const lastUpdated = patientsMonitoringStore.lastUpdated;
  const [secondsAgo, setSecondsAgo] = useState(0);

  useEffect(() => {
    if (!lastUpdated) return;
    setSecondsAgo(0);
    const interval = setInterval(() => {
      setSecondsAgo(Math.floor((Date.now() - lastUpdated.getTime()) / 1000));
    }, 1000);
    return () => clearInterval(interval);
  }, [lastUpdated]);

  return { lastUpdated, secondsAgo };
};

const useStyles = createUseStyles({
  status: {
    marginBottom: 16,
    color: "#888",
    fontSize: 14,
  },
});

const UpdateStatus: React.FC = observer(() => {
  const classes = useStyles();
  const { lastUpdated, secondsAgo } = useUpdateStatus();
  if (!lastUpdated) return null;
  return <div className={classes.status}>Updated {secondsAgo} seconds ago</div>;
});

export default UpdateStatus;
