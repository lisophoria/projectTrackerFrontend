import { FC } from 'react';
import { Box, Typography } from '@mui/material';
import CollapsiblePanel from 'comopnents/ui/CollapsibePanel';
import { ITask } from 'store/model/task';
import TaskCard from 'screens/Tasks/components/TaskCard';

interface ITaskGroupProps {
  name?: string;
  noTasksString?: string;
  onChange: (value: ITask) => void;
  tasks?: ITask[];
  defaultClosed?: boolean;
}

const TaskGroup: FC<ITaskGroupProps> = (props) => {
  return (
    <CollapsiblePanel
      name={props.name}
      defaultClosed={props.defaultClosed}
    >
      {(props.tasks && props.tasks.length > 0) ? (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
          {props.tasks.map((item) => (
            <TaskCard
              task={item}
              onChange={props.onChange}
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
