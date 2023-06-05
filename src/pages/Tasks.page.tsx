import Tasks from 'screens/Tasks';
import { useGetCategoriesByUserIdQuery } from 'store/api/category.api';

const TasksPage = () => {
  useGetCategoriesByUserIdQuery(2);

  return (
    <Tasks
      onChange={() => { /* TODO */ }}
    />
  );
};

export default TasksPage;
