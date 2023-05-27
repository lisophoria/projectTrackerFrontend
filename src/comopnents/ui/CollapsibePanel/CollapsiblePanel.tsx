import { FC, PropsWithChildren } from 'react';
import {
  Accordion, AccordionDetails, AccordionSummary, Typography, 
} from '@mui/material';
import { ExpandMoreRounded } from '@mui/icons-material';
import useCollapsiblePanelStyles from './CollapsiblePanel.styles';

interface ICollapsiblePanelProps {
  name?: string;
}

const CollapsiblePanel: FC<PropsWithChildren<ICollapsiblePanelProps>> = (props) => {
  const { classes } = useCollapsiblePanelStyles();

  return (
    <Accordion
      className={classes.collapsiblePanelWrapper}
      defaultExpanded
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
