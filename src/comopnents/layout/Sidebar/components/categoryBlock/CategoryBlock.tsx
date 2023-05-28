import { ChangeEvent, FC, useState } from 'react';
import { ICategory } from 'store/model/category';
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
import { Checkbox, FormControlLabel } from '@mui/material';
import AbstractPanelWithActions from 'comopnents/abstract/AbstractPanelWithActions';
import ConfirmDeleteModal from 'comopnents/modal/ConfirmDeleteModal';

interface ICategoryBlockProps {
  item: ICategory;
  onSelectChange: (value: boolean) => void;
  onEditClick: () => void;
}

const CategoryBlock: FC<ICategoryBlockProps> = (props) => {
  const [isConfirmDeleteModalOpen, setConfirmDeleteModalOpen] = useState<boolean>(false);

  const onSelectChange = (e: ChangeEvent<HTMLInputElement>) => {
    props.onSelectChange(e.target.checked);
  };
  
  return (
    <>
      <AbstractPanelWithActions
        actions={[
          {
            icon: <EditIcon />,
            onClick: props.onEditClick,
          },
          {
            icon: <CloseIcon />,
            onClick: () => setConfirmDeleteModalOpen(true),
          },
        ]}
      >
        <FormControlLabel
          control={(
            <Checkbox
              checked
              onChange={onSelectChange}
            />
          )}
          label={props.item.categoryName}
        />
      </AbstractPanelWithActions>
      <ConfirmDeleteModal
        open={isConfirmDeleteModalOpen}
        onClose={() => setConfirmDeleteModalOpen(false)}
        onDeleteClick={() => setConfirmDeleteModalOpen(false)}
        nameOfDeletingObject={props.item.categoryName ?? 'category'}
      />
    </>
  );
};

export default CategoryBlock;
