import {
  ChangeEvent, FC, useState,
} from 'react';
import { ICategory } from 'store/model/category';
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
import { Checkbox, FormControlLabel } from '@mui/material';
import AbstractPanelWithActions from 'comopnents/abstract/AbstractPanelWithActions';
import ConfirmDeleteModal from 'comopnents/modal/ConfirmDeleteModal';
import EditCategoryModal from 'comopnents/modal/EditCategoryModal';
import { useAppDispatch } from 'store/hooks';
import { deleteCategory, updateCategory } from 'store/slice/categories.slice';

interface ICategoryBlockProps {
  item: ICategory;
  onSelectChange: (value: boolean) => void;
}

const CategoryBlock: FC<ICategoryBlockProps> = (props) => {
  const dispatch = useAppDispatch();

  const [isConfirmDeleteModalOpen, setConfirmDeleteModalOpen] = useState<boolean>(false);
  const [isEditCategoryModalOpen, setEditCategoryModalOpen] = useState<boolean>(false);

  const onSelectChange = (e: ChangeEvent<HTMLInputElement>) => {
    props.onSelectChange(e.target.checked);
  };

  const handleDeleteClick = () => {
    dispatch(deleteCategory(props.item.categoryId!));
    setConfirmDeleteModalOpen(false);
  };

  const handleSaveClick = (item: ICategory) => {
    dispatch(updateCategory(item));
    setEditCategoryModalOpen(false);
  };
  
  return (
    <>
      <AbstractPanelWithActions
        actions={[
          {
            icon: <EditIcon />,
            onClick: () => setEditCategoryModalOpen(true),
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
        onDeleteClick={handleDeleteClick}
        nameOfDeletingObject={props.item.categoryName ?? 'category'}
      />
      <EditCategoryModal
        category={props.item}
        open={isEditCategoryModalOpen}
        onClose={() => setEditCategoryModalOpen(false)}
        onConfirmClick={handleSaveClick}
      />
    </>
  );
};

export default CategoryBlock;
