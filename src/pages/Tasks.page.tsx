import Tasks from 'screens/Tasks';
import { useAppSelector } from 'store/hooks';

const TasksPage = () => {
  const { tasks } = useAppSelector((state) => state.tasks);

  return (
    <Tasks
      tasks={tasks}
      onChange={() => { /* TODO */ }}
    />
  );
};

export default TasksPage;
