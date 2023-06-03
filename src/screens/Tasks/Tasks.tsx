import { FC } from 'react';
import { Box } from '@mui/material';
import { ITask } from 'store/model/task';
import {
  isFarAway, isPassed, isThisWeek, isToday, 
} from 'utils/datetime';
import TaskGroup from './components/TaskGroup';

interface ITasksProps {
  tasks?: ITask[];
  onChange: (value: ITask) => void;
}

const Tasks: FC<ITasksProps> = (props) => {
  // TODO 03.06.2023: Рефакторинг
  const todayTasks = (props.tasks ?? []).filter((item) => isToday(item.date!));
  const weekTasks = (props.tasks ?? []).filter((item) => isThisWeek(item.date!));
  const farAwayTasks = (props.tasks ?? []).filter((item) => isFarAway(item.date!));
  const recentTasks = (props.tasks ?? []).filter((item) => isPassed(item.date!));

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
