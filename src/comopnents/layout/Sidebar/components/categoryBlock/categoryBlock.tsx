import {FC} from "react";
import {ICategory} from "../../../../store/model/category";
import useCategoryBlockStyles from "./categoryBlock.styles";
import Button from "../../../../ui/Button";
import {ButtonTypes} from "../../../../ui/Button/button.types";

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
  )
}

export default CategoryBlock;
