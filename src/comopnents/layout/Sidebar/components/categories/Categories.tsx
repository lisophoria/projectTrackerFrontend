import { FC, useState } from 'react';
import { ICategory } from 'store/model/category';
import {
  Box, IconButton, SxProps, Typography, 
} from '@mui/material';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import CategoryBlock from 'comopnents/layout/Sidebar/components/categoryBlock';
import CreateCategoryModal from 'comopnents/modal/CreateCategoryModal';
import useCategoriesStyles from './Categories.styles';

interface ICategoriesProps {
  categories?: ICategory[];
  sx?: SxProps;
}

const Categories: FC<ICategoriesProps> = (props) => {
  const { classes } = useCategoriesStyles();

  const [isCreateCategoryModalOpen, setCreateCategoryModalOpen] = useState<boolean>(false);

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
        {props.categories ? (
          props.categories.map((item) => (
            <CategoryBlock
              onSelectChange={() => { /* TODO */ }}
              item={{
                categoryName: item.categoryName,
              }}
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
        onConfirmClick={() => { /* TODO */ }}
      />
    </>
  );
};

export default Categories;
