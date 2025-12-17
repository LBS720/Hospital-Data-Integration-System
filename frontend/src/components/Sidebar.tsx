/** @format */

import React from "react";
import { createUseStyles } from "react-jss";
import { theme } from "../theme";
import PersonIcon from "@mui/icons-material/Person";
import HotelIcon from "@mui/icons-material/Hotel";
import ScienceIcon from "@mui/icons-material/Science";
import DescriptionIcon from "@mui/icons-material/Description";
import MonitorHeartIcon from "@mui/icons-material/MonitorHeart";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { SidebarOption } from "../constants/SidebarOptions";
import { observer } from "mobx-react-lite";
import sidebarStore from "../store/sidebarStore";
import { Link } from "react-router-dom";

const useStyles = createUseStyles({
  sidebar: {
    width: ({ collapsed }: { collapsed: boolean }) => (collapsed ? 60 : 220),
    height: "100vh",
    background: theme.sidebarBg,
    color: theme.sidebarText,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: 24,
    fontFamily: "'Inter', sans-serif",
    transition: "width 0.2s",
    boxSizing: "border-box",
  },
  logo: {
    width: 40,
    marginBottom: 32,
    transition: "width 0.2s",
  },
  menu: {
    listStyle: "none",
    padding: 0,
    width: "100%",
    flex: 1,
  },
  menuItem: {
    width: "100%",
    marginBottom: 16,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  link: {
    color: theme.sidebarText,
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    padding: [12, 16],
    borderRadius: 4,
    transition: "background 0.2s",
    width: "100%",
    justifyContent: "flex-start",
    fontSize: 16,
    fontFamily: "'Inter', sans-serif",
    "&:hover": {
      background: theme.sidebarHover,
    },
  },
  icon: {
    fontSize: 20,
    marginRight: ({ collapsed }: { collapsed: boolean }) =>
      collapsed ? 0 : 12,
    minWidth: 20,
    textAlign: "center",
  },
  collapseBtn: {
    margin: 16,
    marginTop: "auto",
    background: "none",
    border: "none",
    color: theme.sidebarText,
    cursor: "pointer",
    fontSize: 22,
    outline: "none",
    transition: "color 0.2s",
    "&:hover": {
      color: theme.sidebarHover,
    },
  },
});

const sidebarLinks = [
  {
    label: SidebarOption.Patients,
    href: "/patients",
    icon: <PersonIcon />,
  },
  {
    label: SidebarOption.Admissions,
    href: "/admissions",
    icon: <HotelIcon />,
  },
  {
    label: SidebarOption.LabTests,
    href: "/lab-tests",
    icon: <ScienceIcon />,
  },
  {
    label: SidebarOption.LabResults,
    href: "/lab-results",
    icon: <DescriptionIcon />,
  },
  {
    label: SidebarOption.Monitoring,
    href: "/monitoring",
    icon: <MonitorHeartIcon />,
  },
];

const Sidebar: React.FC = observer(() => {
  const collapsed = sidebarStore.collapsed;
  const classes = useStyles({ collapsed });

  return (
    <div className={classes.sidebar}>
      <ul className={classes.menu}>
        {sidebarLinks.map((item) => (
          <li className={classes.menuItem} key={item.href}>
            <Link
              className={classes.link}
              to={item.href}
              onClick={() =>
                sidebarStore.setSelected(item.label as SidebarOption)
              }
            >
              <span className={classes.icon}>{item.icon}</span>
              {!collapsed && item.label}
            </Link>
          </li>
        ))}
      </ul>
      <button
        className={classes.collapseBtn}
        onClick={() => sidebarStore.toggleCollapsed()}
        aria-label="Collapse sidebar"
      >
        {collapsed ? <ChevronRightIcon /> : <ChevronLeftIcon />}
      </button>
    </div>
  );
});

export default Sidebar;
