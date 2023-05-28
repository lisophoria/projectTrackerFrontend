import { ChangeEvent, FC } from 'react';
import { ICategory } from 'store/model/category';
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
import { Checkbox, FormControlLabel } from '@mui/material';
import AbstractPanelWithActions from 'comopnents/abstract/AbstractPanelWithActions';

interface ICategoryBlockProps {
  item: ICategory;
  onSelectChange: (value: boolean) => void;
  onEditClick: () => void;
  onDeleteClick: () => void;
}

const CategoryBlock: FC<ICategoryBlockProps> = (props) => {
  const onSelectChange = (e: ChangeEvent<HTMLInputElement>) => {
    props.onSelectChange(e.target.checked);
  };
  
  return (
    <AbstractPanelWithActions
      actions={[
        {
          icon: <EditIcon />,
          onClick: props.onEditClick,
        },
        {
          icon: <CloseIcon />,
          onClick: props.onDeleteClick,
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
  );
};

export default CategoryBlock;
