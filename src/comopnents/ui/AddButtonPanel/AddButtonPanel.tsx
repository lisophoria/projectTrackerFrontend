import React, { FC } from 'react';
import AddIcon from '@mui/icons-material/Add';
import { ButtonBase, SxProps } from '@mui/material';
import Panel from 'comopnents/ui/Panel';

interface IAddButtonPanelProps {
  onClick: () => void;
  sx?: SxProps;
}

const AddButtonPanel: FC<IAddButtonPanelProps> = (props) => {
  return (
    <ButtonBase
      sx={{ width: '100%' }}
      onClick={props.onClick}
    >
      <Panel
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          ...props.sx,
        }}
      >
        <AddIcon />
      </Panel>
    </ButtonBase>
  );
};

export default AddButtonPanel;
