import { FC } from 'react';
import { Typography } from '@mui/material';
import { ICategory } from 'store/model/category';
import Tasks from '../screens/Tasks';
import { useGetTasksByCategoryIdQuery } from '../store/api/task.api';

interface ITaskCategoryPage {
  category: ICategory;
}

const TasksCategoryPage: FC<ITaskCategoryPage> = (props) => {
  const { data, isLoading } = useGetTasksByCategoryIdQuery(props.category.categoryId!);

  return (
    (!isLoading && data) ? (
      <Tasks
        categoryName={props.category.categoryName}
        tasks={data!}
      />
    ) : (
      <Typography>loading</Typography>
    )
  );
};

export default TasksCategoryPage;
