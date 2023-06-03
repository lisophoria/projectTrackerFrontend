import { FC, PropsWithChildren } from 'react';
import {
  Accordion, AccordionDetails, AccordionSummary, Typography, 
} from '@mui/material';
import { ExpandMoreRounded } from '@mui/icons-material';
import useCollapsiblePanelStyles from './CollapsiblePanel.styles';

interface ICollapsiblePanelProps {
  name?: string;
  defaultClosed?: boolean;
}

const CollapsiblePanel: FC<PropsWithChildren<ICollapsiblePanelProps>> = (props) => {
  const { classes } = useCollapsiblePanelStyles();

  return (
    <Accordion
      className={classes.collapsiblePanelWrapper}
      defaultExpanded={!props.defaultClosed}
      disableGutters
    >
      <AccordionSummary
        expandIcon={<ExpandMoreRounded />}
      >
        <Typography className={classes.header}>{props.name}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        {props.children}
      </AccordionDetails>
    </Accordion>
  );
};

export default CollapsiblePanel;
