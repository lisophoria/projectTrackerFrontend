import { FC, PropsWithChildren, useState } from 'react';
import AbstractLayout from 'comopnents/abstract/AbstractLayout';
import { Box } from '@mui/material';
import Sidebar from 'comopnents/layout/Sidebar';
import { ITask } from 'store/model/task';
import EditTaskModal from 'comopnents/modal/EditTaskModal';
import { useSaveTaskMutation } from 'store/api/task.api';

const BasicLayout: FC<PropsWithChildren> = (props) => {
  const [isEditTaskModalOpen, setEditTaskModalOpen] = useState<boolean>(false);
  const [saveTask] = useSaveTaskMutation();

  const handleSaveTaskClick = (value: ITask) => {
    saveTask(value);
    setEditTaskModalOpen(false);
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
