import { FC, PropsWithChildren } from 'react';
import { Box } from '@mui/material';
import usePanelStyles from './Panel.styles';

const Panel: FC<PropsWithChildren> = (props) => {
  const { classes } = usePanelStyles();

  return (
    <Box className={classes.panelWrapper}>
      {props.children}
    </Box>
  );
};

export default Panel;
