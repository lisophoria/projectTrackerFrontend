import { FC, PropsWithChildren } from 'react';
import { Box } from '@mui/material';
import { IUser } from 'comopnents/store/model/user';
import useAbstractSidebarStyles from './AbstractSidebar.styles';
import Profile from './components/Profile';

interface IAbstractSidebarProps {
  user: IUser;
  onLogoutClick: () => void;
}

const AbstractSidebar: FC<PropsWithChildren<IAbstractSidebarProps>> = (props) => {
  const { classes } = useAbstractSidebarStyles();

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
      </Box>
      <Box className={classes.childrenWrapper}>
        {props.children}
      </Box>
    </Box>
  );
};

export default AbstractSidebar;
