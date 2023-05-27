import { FC } from 'react';
import { Box } from '@mui/material';
import TaskGroup from './components/TaskGroup/TaskGroup';

const Tasks: FC = () => {
  return (
    <Box
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'auto',
      }}
    >
      <TaskGroup
        name={'Today'}
        tasks={[
          {
            taskId: 1,
            categoryName: 'personal',
            taskName: 'Create first task',
            description: 'test description',
            status: true,
            date: new Date(),
          },
          {
            taskId: 2,
            categoryName: 'personal',
            taskName: 'Second task',
            description: 'description for second task',
            status: true,
            date: new Date(),
          },
        ]}
      />
      <TaskGroup
        name={'This week'}
        tasks={[
          {
            taskId: 3,
            categoryName: 'personal',
            taskName: 'Create first task',
            description: 'test description',
            status: true,
            date: new Date(),
          },
          {
            taskId: 4,
            categoryName: 'personal',
            taskName: 'Second task',
            description: 'description for second task',
            status: true,
            date: new Date(),
          },
        ]}
      />
      <TaskGroup
        name={'Far away'}
        noTasksString={'that far away'}
      />
    </Box>
  );
};

export default Tasks;
