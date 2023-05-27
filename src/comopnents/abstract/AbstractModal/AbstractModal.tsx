import { FC, PropsWithChildren } from 'react';
import { Box, Modal } from '@mui/material';
import { IAbstractBlockWithButtonsProps } from 'comopnents/abstract/AbstractBlockWithButtons/AbstractBlockWithButtons';
import AbstractBlockWithButtons from 'comopnents/abstract/AbstractBlockWithButtons';

interface IAbstractModalComponent extends IAbstractBlockWithButtonsProps {
  open: boolean;
  onClose: () => void;
}

const AbstractModal: FC<PropsWithChildren<IAbstractModalComponent>> = (props) => {
  return (
    <Modal
      open={props.open}
      onClose={props.onClose}
    >
      <Box
        sx={{
          height: '100%',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <AbstractBlockWithButtons
          width={props.width}
          height={props.height}
          heading={props.heading}
          buttons={props.buttons}
        >
          {props.children}
        </AbstractBlockWithButtons>
      </Box>
    </Modal>
  );
};

export default AbstractModal;
