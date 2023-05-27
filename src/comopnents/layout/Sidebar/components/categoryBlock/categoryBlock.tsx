import { FC } from 'react';
import { ICategory } from 'comopnents/store/model/category';
import Button from 'comopnents/ui/Button';
import { ButtonTypes } from 'comopnents/ui/Button/button.types';
import useCategoryBlockStyles from './categoryBlock.styles';

interface ICategoryBlockProps {
  item: ICategory;
  onClick: () => void;
}

const CategoryBlock: FC<ICategoryBlockProps> = (props) => {
  const { classes } = useCategoryBlockStyles();

  return (
    <Button
      styleType={ButtonTypes.TEXT}
      title={props.item.categoryName}
      onClick={props.onClick}
      sx={{
        fontSize: '16px',
        justifyContent: 'start',
      }}
    />
  );
};

export default CategoryBlock;
