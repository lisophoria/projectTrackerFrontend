import { ChangeEvent, FC, useState } from 'react';
import {
  Box, MenuItem, Select, SelectChangeEvent, TextField,
} from '@mui/material';
import { ITask } from 'store/model/task';
import AbstractModal from 'comopnents/abstract/AbstractModal';
import { ButtonTypes } from 'comopnents/ui/Button/Button.types';
import { setField } from 'utils/setField';
import { useAppSelector } from 'store/hooks';

interface IEditTaskModalProps {
  open: boolean;
  onClose: () => void;
  onSaveClick: (value: ITask) => void;
  task: ITask;
}

const EditTaskModal: FC<IEditTaskModalProps> = (props) => {
  const [task, setTask] = useState<ITask>(props.task);

  const { categories } = useAppSelector((state) => state.categories);

  const handleChange = (field: string, value: any) => {
    setField(task, field, value, setTask);
  };

  const handleInput = (event: ChangeEvent<HTMLInputElement>, field: string) => {
    handleChange(field, event.target.value);
  };
  
  return (
    <AbstractModal
      width={500}
      open={props.open}
      onClose={props.onClose}
      heading={`Editing ${props.task.taskName} task`}
      buttons={[
        {
          styleType: ButtonTypes.PRIMARY,
          title: 'Save',
          onClick: () => props.onSaveClick(task),
        },
        {
          styleType: ButtonTypes.SECONDARY,
          title: 'Cancel',
          onClick: () => props.onClose(),
        },
      ]}
    >
      <Box
        component={'form'}
        noValidate
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '18px',
        }}
      >
        <Select
          value={task.categoryId}
          onChange={(event: SelectChangeEvent<number>) => handleChange('categoryId', event.target.value)}
        >
          {categories.map((item) => (
            <MenuItem key={item.categoryId!} value={item.categoryId!}>{item.categoryName}</MenuItem>
          ))}
        </Select>
        <TextField
          sx={{ width: '100%' }}
          label={'Name'}
          variant={'outlined'}
          value={task.taskName}
          onInput={(e: ChangeEvent<HTMLInputElement>) => handleInput(e, 'taskName')}
        />
        <TextField
          sx={{ width: '100%' }}
          multiline
          rows={5}
          label={'Description'}
          variant={'outlined'}
          value={task.description}
          onInput={(e: ChangeEvent<HTMLInputElement>) => handleInput(e, 'description')}
        />
      </Box>
    </AbstractModal>
  );
};

export default EditTaskModal;
