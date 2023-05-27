import { FC, PropsWithChildren } from 'react';
import AbstractLayout from 'comopnents/abstract/AbstractLayout';
import { Box } from '@mui/material';
import Sidebar from 'comopnents/layout/Sidebar';
import { ICategory } from 'comopnents/store/model/category';
import { IUser } from 'comopnents/store/model/user';

interface IBasicLayoutProps {
  categories?: ICategory[];
  user: IUser;
}

const BasicLayout: FC<PropsWithChildren<IBasicLayoutProps>> = (props) => {
  return (
    <Box
      sx={{
        height: '100vh',
        width: '100vw',
        backgroundColor: '#f4f5f7',
      }}
    >
      <AbstractLayout
        topRightBlock={<div>hahaha</div>}
        leftBlock={(
          <Sidebar
            onLogoutClick={() => { /* TODO */ }}
            onAddCategoryClick={() => { /* TODO */ }}
            onCreateTaskClick={() => { /* TODO */ }}
            categories={props.categories}
            user={props.user}
          />
        )}
      >
        <Box
          sx={{
            height: '100%',
            // padding: '18px',
            // boxSizing: 'border-box',
            overflow: 'hidden',
          }}
        >
          {props.children}
        </Box>
      </AbstractLayout>
    </Box>
  );
};

export default BasicLayout;