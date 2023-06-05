import {
  Box,
  Checkbox, Typography,
} from '@mui/material';
import {
  ChangeEvent,
  FC, useState,
} from 'react';
import { ITask } from 'store/model/task';
import { setField } from 'utils/setField';
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
import AbstractPanelWithActions from 'comopnents/abstract/AbstractPanelWithActions';
import ConfirmDeleteModal from 'comopnents/modal/ConfirmDeleteModal';
import EditTaskModal from 'comopnents/modal/EditTaskModal';
import { useAppDispatch } from 'store/hooks';
import { deleteTask, updateTask } from 'store/slice/tasks.slice';

interface ITaskCardProps {
  task: ITask;
}

const TaskCard: FC<ITaskCardProps> = (props) => {
  const dispatch = useAppDispatch();

  const [task, setTask] = useState<ITask>(props.task);
  const [isConfirmDeleteModalOpen, setConfirmDeleteModalOpen] = useState<boolean>(false);
  const [isEditTaskModalOpen, setEditTaskModalOpen] = useState<boolean>(false);

  const handleChange = (field: string, value: any) => {
    setField(task, field, value, setTask);
  };

  const handleCheckEvent = (e: ChangeEvent<HTMLInputElement>) => {
    handleChange('status', e.target.checked);
    // props.onChange(task);
  };

  const handleSaveClick = (value: ITask) => {
    setTask(((prevState) => ({ ...value, status: prevState.status })));
    dispatch(updateTask(value));
    setEditTaskModalOpen(false);
  };

  const handleDeleteClick = () => {
    dispatch(deleteTask(task.taskId!));
    setConfirmDeleteModalOpen(false);
    // TODO: Сохранить на бек
  };

  return (
    <>
      <AbstractPanelWithActions
        bordered
        leftAction={(
          <Checkbox
            checked={task.status}
            onChange={handleCheckEvent}
          />
        )}
        actions={[
          {
            icon: <EditIcon />,
            onClick: () => setEditTaskModalOpen(true),
          },
          {
            icon: <CloseIcon />,
            onClick: () => setConfirmDeleteModalOpen(true),
          },
        ]}
      >
        <Box
          sx={{
            display: 'flex',
            gap: '10px',
          }}
        >
          <Typography>{task.taskName}</Typography>
          <Typography color={'#888888'}>{task.categoryName}</Typography>
        </Box>
      </AbstractPanelWithActions>
      <ConfirmDeleteModal
        open={isConfirmDeleteModalOpen}
        onClose={() => setConfirmDeleteModalOpen(false)}
        onDeleteClick={handleDeleteClick}
        nameOfDeletingObject={task.taskName ?? 'task'}
      />
      <EditTaskModal
        open={isEditTaskModalOpen}
        onClose={() => setEditTaskModalOpen(false)}
        onSaveClick={handleSaveClick}
        task={task}
      />
    </>
  );
};

export default TaskCard;
