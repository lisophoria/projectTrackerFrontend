import {
  Box, Checkbox, IconButton, Typography, 
} from '@mui/material';
import {
  ChangeEvent,
  FC, useState,
} from 'react';
import { ITask } from 'store/model/task';
import { setField } from 'utils/setField';
import Panel from 'comopnents/ui/Panel';
import CloseIcon from '@mui/icons-material/Close';
import EditIcon from '@mui/icons-material/Edit';
import useTaskCardStyles from './TaskCard.styles';

interface ITaskCardProps {
  task: ITask;
  onChange: (value: ITask) => void;
}

const TaskCard: FC<ITaskCardProps> = (props) => {
  const { classes } = useTaskCardStyles();

  const [task, setTask] = useState<ITask>(props.task);
  const [isHover, setHover] = useState<boolean>(false);

  const handleChange = (field: string, value: any) => {
    setField(task, field, value, setTask);
  };

  const handleCheckEvent = (e: ChangeEvent<HTMLInputElement>) => {
    handleChange('status', e.target.checked);
    props.onChange(task);
  };

  const conditionalValues = {
    actionsClassName: () => {
      if (isHover) return classes.actionsVisible;
      return classes.actionsHidden;
    },
  };

  return (
    <Panel sx={{ borderRadius: '8px' }}>
      <Box
        className={classes.taskWrapper}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <Checkbox
          checked={task.status}
          onChange={handleCheckEvent}
          className={classes.checkboxFlex}
        />
        <Box className={classes.insideFlex}>
          <Box className={classes.infoFlex}>
            <Typography>{task.taskName}</Typography>
            <Typography className={classes.categoryName}>{task.categoryName}</Typography>
          </Box>
          <Box className={conditionalValues.actionsClassName()}>
            <IconButton onClick={() => { /* TODO */ }}>
              <EditIcon />
            </IconButton>
            <IconButton onClick={() => { /* TODO */ }}>
              <CloseIcon />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Panel>
  );
};

export default TaskCard;
