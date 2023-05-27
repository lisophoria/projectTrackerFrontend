import { FC } from 'react';
import { ICategory } from 'comopnents/store/model/category';
import Button from 'comopnents/ui/Button';
import { ButtonTypes } from 'comopnents/ui/Button/button.types';

interface ICategoryBlockProps {
  item: ICategory;
  onClick: () => void;
}

// TODO 27.05.2023: Переделать как чекбокс
const CategoryBlock: FC<ICategoryBlockProps> = (props) => {
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
