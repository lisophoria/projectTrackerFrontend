import { FC, PropsWithChildren, useState } from 'react';
import { Box, IconButton } from '@mui/material';
import Panel from 'comopnents/ui/Panel';
import useAbstractPanelWithActionsStyles from './AbstractPanelWithActions.styles';

interface IAbstractPanelWithActionsProps {
  leftAction?: JSX.Element;
  actions?: {
    icon: JSX.Element;
    onClick: () => void;
  }[];
}

const AbstractPanelWithActions: FC<PropsWithChildren<IAbstractPanelWithActionsProps>> = (props) => {
  const { classes } = useAbstractPanelWithActionsStyles();
  const [isHover, setHover] = useState<boolean>(false);

  const conditionalValues = {
    actionsClassName: () => {
      if (isHover) return classes.actionsVisible;
      return classes.actionsHidden;
    },
  };
  
  return (
    <Panel>
      <Box
        className={classes.wrapper}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {props.leftAction && (
          <Box className={classes.leftBlockFlex}>
            {props.leftAction}
          </Box>
        )}
        <Box className={classes.rightBlockFlex}>
          <Box>
            {props.children}
          </Box>
          {props.actions && (
            <Box className={conditionalValues.actionsClassName()}>
              {props.actions.map((item) => (
                <IconButton onClick={item.onClick}>
                  {item.icon}
                </IconButton>
              ))}
            </Box>
          )}
        </Box>
      </Box>
    </Panel>
  );
};

export default AbstractPanelWithActions;
