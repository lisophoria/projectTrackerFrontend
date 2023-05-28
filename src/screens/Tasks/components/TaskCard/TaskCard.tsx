import {
  Box,
  Checkbox, Typography,
} from '@mui/material';
import {
  ChangeEvent,
  FC, useState,
} from 'react';
import { ITask } from 'store/model/task';
import { setField } from 'utils/setField';
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
import AbstractPanelWithActions from 'comopnents/abstract/AbstractPanelWithActions';

interface ITaskCardProps {
  task: ITask;
  onChange: (value: ITask) => void;
}

const TaskCard: FC<ITaskCardProps> = (props) => {
  const [task, setTask] = useState<ITask>(props.task);

  const handleChange = (field: string, value: any) => {
    setField(task, field, value, setTask);
  };

  const handleCheckEvent = (e: ChangeEvent<HTMLInputElement>) => {
    handleChange('status', e.target.checked);
    props.onChange(task);
  };

  return (
    <AbstractPanelWithActions
      leftAction={(
        <Checkbox
          checked={task.status}
          onChange={handleCheckEvent}
        />
      )}
      actions={[
        {
          icon: <EditIcon />,
          onClick: () => { /* TODO */ },
        },
        {
          icon: <CloseIcon />,
          onClick: () => { /* TODO */ },
        },
      ]}
    >
      <Box
        sx={{
          display: 'flex',
          gap: '10px',
        }}
      >
        <Typography>{task.taskName}</Typography>
        <Typography color={'#888888'}>{task.categoryName}</Typography>
      </Box>
    </AbstractPanelWithActions>
  );
};

export default TaskCard;
