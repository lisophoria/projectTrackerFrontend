import { FC, PropsWithChildren } from 'react';
import AbstractLayout from 'comopnents/abstract/AbstractLayout';
import { Box } from '@mui/material';
import Sidebar from 'comopnents/layout/Sidebar';
import { ICategory } from 'store/model/category';

interface IBasicLayoutProps {
  categories?: ICategory[];
}

const BasicLayout: FC<PropsWithChildren<IBasicLayoutProps>> = (props) => {
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
              onCreateTaskClick={() => { /* TODO */ }}
              categories={props.categories}
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
    </>
  );
};

export default BasicLayout;
