import { FC, PropsWithChildren } from 'react';
import { Box, SxProps } from '@mui/material';
import usePanelStyles from './Panel.styles';

interface IPanelProps {
  sx?: SxProps;
}

const Panel: FC<PropsWithChildren<IPanelProps>> = (props) => {
  const { classes } = usePanelStyles();

  return (
    <Box className={classes.panelWrapper} sx={props.sx}>
      {props.children}
    </Box>
  );
};

export default Panel;
