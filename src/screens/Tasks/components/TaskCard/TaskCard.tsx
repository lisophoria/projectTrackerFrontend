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
import { useDeleteTaskByIdMutation, useSaveTaskMutation } from 'store/api/task.api';

interface ITaskCardProps {
  task: ITask;
}

const TaskCard: FC<ITaskCardProps> = (props) => {
  const [task, setTask] = useState<ITask>(props.task);
  const [isConfirmDeleteModalOpen, setConfirmDeleteModalOpen] = useState<boolean>(false);
  const [isEditTaskModalOpen, setEditTaskModalOpen] = useState<boolean>(false);

  const [deleteTask] = useDeleteTaskByIdMutation();
  const [saveTask] = useSaveTaskMutation();

  const handleChange = (field: string, value: any) => {
    setField(task, field, value, setTask);
  };

  const handleCheckEvent = (e: ChangeEvent<HTMLInputElement>) => {
    handleChange('status', e.target.checked);
    // props.onChange(task);
  };

  const handleSaveClick = (value: ITask) => {
    setTask(((prevState) => ({ ...value, status: prevState.status })));
    saveTask(task);
    setEditTaskModalOpen(false);
  };

  const handleDeleteClick = () => {
    deleteTask(props.task.taskId!);
    setConfirmDeleteModalOpen(false);
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
