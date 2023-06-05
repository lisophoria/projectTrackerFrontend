import { FC, useState } from 'react';
import {
  Box, IconButton, Typography,
} from '@mui/material';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import CategoryBlock from 'comopnents/layout/Sidebar/components/categoryBlock';
import CreateCategoryModal from 'comopnents/modal/CreateCategoryModal';
import { useAppSelector } from 'store/hooks';
import { ICategory } from 'store/model/category';
import { useSaveCategoryMutation } from 'store/api/category.api';
import useCategoriesStyles from './Categories.styles';

const Categories: FC = () => {
  const { classes } = useCategoriesStyles();

  const [saveCategory] = useSaveCategoryMutation();

  const { categories } = useAppSelector((state) => state.categories);
  const { tokens } = useAppSelector((state) => state.user);

  const [isCreateCategoryModalOpen, setCreateCategoryModalOpen] = useState<boolean>(false);

  const handleConfirmCreateClick = async (item: ICategory) => {
    await saveCategory({
      ...item,
      userId: tokens?.userId!,
    });
    setCreateCategoryModalOpen(false);
  };

  return (
    <>
      <Box className={classes.headerWrapper}>
        <Typography
          fontSize={18}
          fontWeight={'bold'}
        >
          {'My lists'}
        </Typography>
        <IconButton
          onClick={() => setCreateCategoryModalOpen(true)}
          sx={{
            height: '40px',
            width: '40px',
          }}
        >
          <PlaylistAddIcon />
        </IconButton>
      </Box>
      <Box className={classes.categoriesListWrapper}>
        {categories ? (
          categories.map((item) => (
            <CategoryBlock
              key={item.categoryId}
              onSelectChange={() => { /* TODO */ }}
              item={item}
            />
          ))
        ) : (
          <Typography fontSize={16}>
            {'Create your first category'}
          </Typography>
        )}
      </Box>
      <CreateCategoryModal
        open={isCreateCategoryModalOpen}
        onClose={() => setCreateCategoryModalOpen(false)}
        onConfirmClick={handleConfirmCreateClick}
      />
    </>
  );
};

export default Categories;
