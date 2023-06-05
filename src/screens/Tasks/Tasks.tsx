import { FC } from 'react';
import { ITask } from 'store/model/task';
import TaskGroup from './components/TaskGroup';

interface ITasksProps {
  categoryName?: string;
  tasks: ITask[];
}

const Tasks: FC<ITasksProps> = (props) => {
  return (
    <TaskGroup
      name={props.categoryName ?? 'category'}
      noTasksString={'in this category'}
      tasks={props.tasks}
      defaultClosed
    />
  );
};

export default Tasks;
