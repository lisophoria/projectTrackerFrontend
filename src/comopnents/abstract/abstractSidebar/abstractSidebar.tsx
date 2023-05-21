import {FC} from "react";
import {
  Box,
  Tabs as MuiTabs,
  Tab as MuiTab,
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

const AbstractSidebar: FC<IAbstractSidebarProps> = (props) => {
  const { classes } = useAbstractSidebarStyles();
  const { pathname } = useLocation();

  return (
    <Box className={classes.sidebarContainer}>
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
    </Box>
  );
};

export default AbstractSidebar;
