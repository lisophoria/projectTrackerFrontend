import { FC } from 'react';
import { Box, Typography } from '@mui/material';
import CollapsiblePanel from '../../../../comopnents/ui/CollapsibePanel';
import { ITask } from '../../../../store/model/task';
import TaskCard from '../TaskCard/TaskCard';

interface ITaskGroupProps {
  name?: string;
  noTasksString?: string;
  tasks?: ITask[];
}

const TaskGroup: FC<ITaskGroupProps> = (props) => {
  return (
    <CollapsiblePanel
      name={props.name}
    >
      {(props.tasks && props.tasks.length > 0) ? (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
          {props.tasks.map((item) => (
            <TaskCard
              task={item}
              onChange={(value) => console.log(value)}
            />
          ))}
        </Box>
      ) : (
        <Typography>{`No planned tasks ${props.noTasksString}`}</Typography>
      )}
    </CollapsiblePanel>
  );
};

export default TaskGroup;
