import {FC, PropsWithChildren} from "react";
import {
  Box,
  Tabs as MuiTabs,
  Tab as MuiTab, Divider,
} from "@mui/material";
import useAbstractSidebarStyles from "./abstractSidebar.styles";
import {Link, useLocation} from "react-router-dom";

interface ISidebarTab {
  icon?: JSX.Element;
  title: string;
  link: string;
}

interface IAbstractSidebarProps {
  tabs: ISidebarTab[];
}

const AbstractSidebar: FC<PropsWithChildren<IAbstractSidebarProps>> = (props) => {
  const { classes } = useAbstractSidebarStyles();
  const { pathname } = useLocation();

  return (
    <Box className={classes.sidebarContainer}>
      <Box className={classes.contentWrapper}>
        <Box>Profile</Box>
        <Divider />
        <MuiTabs
          value={pathname}
          orientation={'vertical'}
          className={classes.tabs}
        >
          {props.tabs.map((item) => (
            <MuiTab
              to={item.link}
              component={Link}
              value={item.link}
              label={item.title}
              icon={item.icon}
              iconPosition={'start'}
              className={classes.tab}
            />
          ))}
        </MuiTabs>
        <Divider />
      </Box>
      <Box className={classes.childrenWrapper}>
        {props.children}
      </Box>
    </Box>
  );
};

export default AbstractSidebar;
