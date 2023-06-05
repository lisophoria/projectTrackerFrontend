import { Box } from '@mui/material';
import { useAppSelector } from 'store/hooks';
import TasksCategoryPage from './TasksCategory.page';

const TasksPage = () => {
  const { categories } = useAppSelector((state) => state.categories);

  return (
    <Box
      sx={{
        height: '100%',
        overflow: 'overlay',
      }}
    >
      {categories.map((item) => (
        item && (
          <TasksCategoryPage category={item} />
        )
      ))}
    </Box>
  );
};

export default TasksPage;
