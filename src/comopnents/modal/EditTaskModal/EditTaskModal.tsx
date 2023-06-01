import { ChangeEvent, FC, useState } from 'react';
import { Box, TextField } from '@mui/material';
import { ITask } from 'store/model/task';
import AbstractModal from 'comopnents/abstract/AbstractModal';
import { ButtonTypes } from 'comopnents/ui/Button/Button.types';
import { setField } from 'utils/setField';

interface IEditTaskModalProps {
  open: boolean;
  onClose: () => void;
  onSaveClick: (value: ITask) => void;
  task: ITask;
}

const EditTaskModal: FC<IEditTaskModalProps> = (props) => {
  const [task, setTask] = useState<ITask>(props.task);

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
