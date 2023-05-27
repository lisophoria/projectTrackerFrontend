import Tasks from 'screens/Tasks';
import { ITask } from '../store/model/task';

const TasksPage = () => {
  const tasks: ITask[] = [
    {
      taskId: 1,
      categoryId: 1,
      categoryName: 'personal',
      taskName: 'Create first task',
      description: 'test description',
      status: true,
      date: new Date('2023-05-28'),
    },
    {
      taskId: 2,
      categoryId: 1,
      categoryName: 'personal',
      taskName: 'Second task',
      description: 'description for second task',
      status: false,
      date: new Date('2023-05-29'),
    },
    {
      taskId: 3,
      categoryId: 2,
      categoryName: 'good',
      taskName: 'Good 1',
      description: 'test description',
      status: true,
      date: new Date('2023-05-28'),
    },
    {
      taskId: 4,
      categoryId: 2,
      categoryName: 'good',
      taskName: 'Good 2',
      description: 'description for second task',
      status: false,
      date: new Date('2023-06-25'),
    },
  ];
  
  return (
    <Tasks tasks={tasks} />
  );
};

export default TasksPage;
