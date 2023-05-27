import { FC } from 'react';
import { ICategory } from 'comopnents/store/model/category';
import {
  Box, IconButton, SxProps, Typography, 
} from '@mui/material';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import CategoryBlock from 'comopnents/layout/Sidebar/components/categoryBlock';
import useCategoriesStyles from './categories.styles';

interface ICategoriesProps {
  onAddCategoryClick: () => void;
  categories?: ICategory[];
  sx?: SxProps;
}

const Categories: FC<ICategoriesProps> = (props) => {
  const { classes } = useCategoriesStyles();

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
          onClick={props.onAddCategoryClick}
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
              onClick={() => { /* TODO */ }}
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
    </>
  );
};

export default Categories;
