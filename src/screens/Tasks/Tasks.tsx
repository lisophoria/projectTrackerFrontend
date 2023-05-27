import { FC } from 'react';
import { Box } from '@mui/material';
import { ITask } from 'store/model/task';
import TaskGroup from './components/TaskGroup/TaskGroup';
import { isFarAway, isThisWeek, isToday } from '../../utils/datetime';

interface ITasksProps {
  tasks?: ITask[];
}

const Tasks: FC<ITasksProps> = (props) => {
  const todayTasks = (props.tasks ?? []).filter((item) => isToday(item.date!));
  const weekTasks = (props.tasks ?? []).filter((item) => isThisWeek(item.date!));
  const farAwayTasks = (props.tasks ?? []).filter((item) => isFarAway(item.date!));

  console.log(todayTasks, weekTasks, farAwayTasks);

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
        tasks={todayTasks}
      />
      <TaskGroup
        name={'This week'}
        noTasksString={'for this week'}
        tasks={weekTasks}
      />
      <TaskGroup
        name={'Far away'}
        noTasksString={'that far away'}
        tasks={farAwayTasks}
      />
    </Box>
  );
};

export default Tasks;
