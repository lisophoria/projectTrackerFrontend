import { FC } from 'react';
import AbstractLayout from 'comopnents/abstract/AbstractLayout';
import { Box } from '@mui/material';
import Sidebar from 'comopnents/layout/Sidebar';

const BasicLayout: FC = () => {
  return (
    <Box
      sx={{
        height: '100vh',
        width: '100vw',
      }}
    >
      <AbstractLayout
        topRightBlock={(
          <Box sx={{ backgroundColor: 'red' }}>header</Box>
        )}
        leftBlock={(
          <Sidebar
            onLogoutClick={() => { /* TODO */ }}
            onAddCategoryClick={() => { /* TODO */ }}
            onCreateTaskClick={() => { /* TODO */ }}
          />
        )}
      >
        <Box sx={{ backgroundColor: 'pink', height: '100%' }}>content</Box>
      </AbstractLayout>
    </Box>
  );
};

export default BasicLayout;
