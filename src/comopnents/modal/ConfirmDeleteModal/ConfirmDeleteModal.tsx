import { FC } from 'react';
import AbstractModal from 'comopnents/abstract/AbstractModal';
import { ButtonTypes } from 'comopnents/ui/Button/Button.types';

interface IConfirmDeleteModalProps {
  open: boolean;
  onClose: () => void;
  onDeleteClick: () => void;
  nameOfDeletingObject: string;
}

const ConfirmDeleteModal: FC<IConfirmDeleteModalProps> = (props) => {
  return (
    <AbstractModal
      open={props.open}
      onClose={props.onClose}
      heading={`Confirm deletion of ${props.nameOfDeletingObject}`}
      buttons={[
        {
          styleType: ButtonTypes.ACCENT,
          title: 'Confirm',
          onClick: props.onDeleteClick,
        },
        {
          styleType: ButtonTypes.SECONDARY,
          title: 'Cancel',
          onClick: props.onClose,
        },
      ]}
    />
  );
};

export default ConfirmDeleteModal;
