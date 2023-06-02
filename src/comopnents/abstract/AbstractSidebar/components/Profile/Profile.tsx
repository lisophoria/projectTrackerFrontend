import React, { FC } from 'react';
import {
  Avatar, Box, IconButton, SxProps, Typography, 
} from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import { useAppSelector } from 'store/hooks';
import useProfileStyles from './Profile.styles';

interface IProfileProps {
  onLogoutClick: () => void;
  sx?: SxProps;
}

const Profile: FC<IProfileProps> = (props) => {
  const { classes } = useProfileStyles();

  const { user } = useAppSelector((state) => state.user);

  if (!user) {
    return (
      <Typography
        fontSize={16}
        fontWeight={'bold'}
      >
        {'User not defined'}
      </Typography>
    );
  }
  
  return (
    <Box
      className={classes.profileWrapper}
      sx={props.sx}
    >
      <Box className={classes.infoWrapper}>
        <Avatar sx={{ backgroundColor: '#0767DB' }}>
          {user.username ? user.username[0] : 'U'}
        </Avatar>
        <Box>
          <Typography
            fontSize={16}
            fontWeight={'bold'}
          >
            {user.username ?? 'User Name'}
          </Typography>
          <Typography
            fontSize={14}
            color={'#888888'}
          >
            {'Just user'}
          </Typography>
        </Box>
      </Box>
      <IconButton
        onClick={props.onLogoutClick}
        sx={{
          height: '40px',
          width: '40px',
        }}
      >
        <LogoutIcon />
      </IconButton>
    </Box>
  );
};

export default Profile;
