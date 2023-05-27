import { FC } from 'react';
import { Box } from '@mui/material';
import { ITask } from 'store/model/task';
import { isFarAway, isThisWeek, isToday } from 'utils/datetime';
import TaskGroup from './components/TaskGroup';

interface ITasksProps {
  tasks?: ITask[];
  onChange: (value: ITask) => void;
}

const Tasks: FC<ITasksProps> = (props) => {
  const todayTasks = (props.tasks ?? []).filter((item) => isToday(item.date!));
  const weekTasks = (props.tasks ?? []).filter((item) => isThisWeek(item.date!));
  const farAwayTasks = (props.tasks ?? []).filter((item) => isFarAway(item.date!));

  return (
    <Box
      sx={{
        height: '100%',
        overflow: 'auto',
      }}
    >
      <TaskGroup
        name={'Today'}
        noTasksString={'for today'}
        onChange={props.onChange}
        tasks={todayTasks}
      />
      <TaskGroup
        name={'This week'}
        noTasksString={'for this week'}
        tasks={weekTasks}
        onChange={props.onChange}
      />
      <TaskGroup
        name={'Far away'}
        noTasksString={'that far away'}
        tasks={farAwayTasks}
        onChange={props.onChange}
      />
    </Box>
  );
};

export default Tasks;
