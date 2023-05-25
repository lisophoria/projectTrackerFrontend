import React, {FC} from "react";
import {Avatar, Box, IconButton, SxProps, Typography} from "@mui/material";
import useProfileStyles from "./profile.styles";
import LogoutIcon from '@mui/icons-material/Logout';

interface IProfileProps {
  name: string;
  onLogoutClick: () => void;
  sx?: SxProps;
}

const Profile: FC<IProfileProps> = (props) => {
  const { classes } = useProfileStyles();

  return (
    <Box
      className={classes.profileWrapper}
      sx={props.sx}
    >
      <Box className={classes.infoWrapper}>
        <Avatar
          sx={{
            backgroundColor: '#0767DB',
          }}
        >
          {props.name[0]}
        </Avatar>
        <Box>
          <Typography
            fontSize={16}
            fontWeight={'bold'}
          >{props.name}</Typography>
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
      }}>
        <LogoutIcon />
      </IconButton>
    </Box>
  );
};

export default Profile;
