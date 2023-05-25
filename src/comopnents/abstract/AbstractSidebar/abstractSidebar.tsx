import {FC, PropsWithChildren} from "react";
import {
  Box,
  Tabs as MuiTabs,
  Tab as MuiTab,
} from "@mui/material";
import useAbstractSidebarStyles from "./abstractSidebar.styles";
import {Link, useLocation} from "react-router-dom";
import Profile from "./components/Profile";
import {IUser} from "../../store/model/user";

interface ISidebarTab {
  icon?: JSX.Element;
  title: string;
  link: string;
}

interface IAbstractSidebarProps {
  user: IUser;
  tabs: ISidebarTab[];
  onLogoutClick: () => void;
}

const AbstractSidebar: FC<PropsWithChildren<IAbstractSidebarProps>> = (props) => {
  const { classes } = useAbstractSidebarStyles();
  const { pathname } = useLocation();

  return (
    <Box className={classes.sidebarContainer}>
      <Box className={classes.contentWrapper}>
        <Profile
          onLogoutClick={props.onLogoutClick}
          name={props.user.username ?? 'User'}
          sx={{
            padding: '18px 18px 0 18px',
          }}
        />
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
      <Box className={classes.childrenWrapper}>
        {props.children}
      </Box>
    </Box>
  );
};

export default AbstractSidebar;
