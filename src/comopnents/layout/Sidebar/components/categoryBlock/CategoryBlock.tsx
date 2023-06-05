import {
  FC, useState,
} from 'react';
import { ICategory } from 'store/model/category';
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
import { Typography } from '@mui/material';
import AbstractPanelWithActions from 'comopnents/abstract/AbstractPanelWithActions';
import ConfirmDeleteModal from 'comopnents/modal/ConfirmDeleteModal';
import EditCategoryModal from 'comopnents/modal/EditCategoryModal';
import { useDeleteCategoryByIdMutation, useSaveCategoryMutation } from 'store/api/category.api';

interface ICategoryBlockProps {
  item: ICategory;
  onSelectChange: (value: boolean) => void;
}

const CategoryBlock: FC<ICategoryBlockProps> = (props) => {
  const [del] = useDeleteCategoryByIdMutation();
  const [upd] = useSaveCategoryMutation();

  const [isConfirmDeleteModalOpen, setConfirmDeleteModalOpen] = useState<boolean>(false);
  const [isEditCategoryModalOpen, setEditCategoryModalOpen] = useState<boolean>(false);

  const handleDeleteClick = async () => {
    await del(props.item.categoryId!);
    setConfirmDeleteModalOpen(false);
  };

  const handleSaveClick = async (item: ICategory) => {
    await upd(item);
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
        <Typography>{props.item.categoryName}</Typography>
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
