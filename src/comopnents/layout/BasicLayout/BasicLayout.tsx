import { FC, PropsWithChildren, useState } from 'react';
import AbstractLayout from 'comopnents/abstract/AbstractLayout';
import { Box } from '@mui/material';
import Sidebar from 'comopnents/layout/Sidebar';
import { ITask } from 'store/model/task';
import { useAppDispatch } from 'store/hooks';
import { createTask } from 'store/slice/tasks.slice';
import EditTaskModal from 'comopnents/modal/EditTaskModal';

const BasicLayout: FC<PropsWithChildren> = (props) => {
  const dispatch = useAppDispatch();

  const [isEditTaskModalOpen, setEditTaskModalOpen] = useState<boolean>(false);

  const handleSaveTaskClick = (value: ITask) => {
    dispatch(createTask(value));
    // TODO: Сохранить на беке
  };

  return (
    <>
      <Box
        sx={{
          height: '100vh',
          width: '100vw',
          backgroundColor: '#f4f5f7',
        }}
      >
        <AbstractLayout
          leftBlock={(
            <Sidebar
              onLogoutClick={() => { /* TODO */ }}
              onAddCategoryClick={() => { /* TODO */ }}
              onCreateTaskClick={() => setEditTaskModalOpen(true)}
            />
          )}
        >
          <Box
            sx={{
              height: '100%',
              padding: '18px 0 0 18px',
              boxSizing: 'border-box',
              overflow: 'hidden',
            }}
          >
            {props.children}
          </Box>
        </AbstractLayout>
      </Box>
      <EditTaskModal
        open={isEditTaskModalOpen}
        onClose={() => setEditTaskModalOpen(false)}
        onSaveClick={handleSaveTaskClick}
        task={{}}
      />
    </>
  );
};

export default BasicLayout;
