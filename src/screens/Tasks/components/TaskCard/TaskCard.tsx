import { Box, Checkbox, Typography } from '@mui/material';
import {
  ChangeEvent, FC, useState,
} from 'react';
import useTaskCardStyles from './TaskCard.styles';
import { ITask } from '../../../../store/model/task';
import { setField } from '../../../../utils/setField';
import Panel from '../../../../comopnents/ui/Panel';

interface ITaskCardProps {
  task: ITask;
  onChange: (value: ITask) => void;
}

const TaskCard: FC<ITaskCardProps> = (props) => {
  const { classes } = useTaskCardStyles();
  const [task, setTask] = useState<ITask>(props.task);

  const handleChange = (field: string, value: any) => {
    setField(task, field, value, setTask);
  };

  const handleCheckEvent = (e: ChangeEvent<HTMLInputElement>) => {
    handleChange('status', e.target.checked);
    props.onChange(task);
  };

  return (
    <Panel>
      <Box className={classes.taskWrapper}>
        <Checkbox
          checked={task.status}
          onChange={handleCheckEvent}
        />
        <Typography>{task.taskName}</Typography>
        <Typography className={classes.categoryName}>{task.categoryName}</Typography>
      </Box>
    </Panel>
  );
};

export default TaskCard;
