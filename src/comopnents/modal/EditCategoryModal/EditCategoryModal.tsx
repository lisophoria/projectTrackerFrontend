import {
  ChangeEvent, FC, useEffect, useState,
} from 'react';
import AbstractModal from 'comopnents/abstract/AbstractModal';
import { ButtonTypes } from 'comopnents/ui/Button/Button.types';
import { Box, TextField } from '@mui/material';
import { ICategory } from 'store/model/category';
import { setField } from 'utils/setField';

interface IEditCategoryModal {
  category: ICategory;
  open: boolean;
  onClose: () => void;
  onConfirmClick: (item: ICategory) => void;
}

const EditCategoryModal: FC<IEditCategoryModal> = (props) => {
  const [data, setData] = useState<ICategory>(props.category);

  const handleChange = (field: string, value: any) => {
    setField(data, field, value, setData);
  };

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    handleChange('categoryName', event.target.value);
  };

  useEffect(() => {
    setData(props.category);
  }, [props.category]);

  const handleSaveClick = () => {
    props.onConfirmClick(data);
  };

  return (
    <AbstractModal
      open={props.open}
      onClose={props.onClose}
      heading={`Editing ${data.categoryName} category`}
      buttons={[
        {
          styleType: ButtonTypes.PRIMARY,
          title: 'Confirm',
          onClick: handleSaveClick,
        },
        {
          styleType: ButtonTypes.SECONDARY,
          title: 'Cancel',
          onClick: props.onClose,
        },
      ]}
    >
      <Box
        component={'form'}
        noValidate
      >
        <TextField
          sx={{ width: '100%' }}
          label={'Name'}
          variant={'outlined'}
          value={data.categoryName}
          onInput={handleInput}
        />
      </Box>
    </AbstractModal>
  );
};

export default EditCategoryModal;
