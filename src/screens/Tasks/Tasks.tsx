import { FC } from 'react';
import { Box } from '@mui/material';
import { ITask } from 'store/model/task';
import {
  isFarAway, isPassed, isThisWeek, isToday, 
} from 'utils/datetime';
import { useAppSelector } from 'store/hooks';
import TaskGroup from './components/TaskGroup';

interface ITasksProps {
  onChange: (value: ITask) => void;
}

const Tasks: FC<ITasksProps> = (props) => {
  const { tasks } = useAppSelector((state) => state.tasks);

  const todayTasks = (tasks ?? []).filter((item) => isToday(new Date(item.date!)));
  const weekTasks = (tasks ?? []).filter((item) => isThisWeek(new Date(item.date!)));
  const farAwayTasks = (tasks ?? []).filter((item) => isFarAway(new Date(item.date!)));
  const recentTasks = (tasks ?? []).filter((item) => isPassed(new Date(item.date!)));

  return (
    <Box
      sx={{
        height: '100%',
        overflow: 'overlay',
      }}
    >
      <TaskGroup
        name={'Recent'}
        noTasksString={'recently'}
        onChange={props.onChange}
        tasks={recentTasks}
        defaultClosed
      />
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
