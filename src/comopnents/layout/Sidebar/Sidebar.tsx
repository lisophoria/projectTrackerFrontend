import { FC } from 'react';
import AbstractSidebar from 'comopnents/abstract/AbstractSidebar';
import Categories from 'comopnents/layout/Sidebar/components/categories';
import { Box } from '@mui/material';
import Button from 'comopnents/ui/Button';
import { ButtonTypes } from 'comopnents/ui/Button/Button.types';

interface ISidebarProps {
  onLogoutClick: () => void;
  onAddCategoryClick: () => void;
  onCreateTaskClick: () => void;
}

const Sidebar: FC<ISidebarProps> = (props) => {
  return (
    <AbstractSidebar onLogoutClick={props.onLogoutClick}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          boxSizing: 'border-box',
          padding: '18px',
        }}
      >
        <Box
          sx={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Box
            sx={{
              flex: '1',
              overflow: 'auto',
            }}
          >
            <Categories />
          </Box>
          <Box
            sx={{
              flex: '0',
            }}
          >
            <Button
              styleType={ButtonTypes.PRIMARY}
              onClick={props.onCreateTaskClick}
              title={'Create task'}
              sx={{
                width: '100%',
              }}
            />
          </Box>
        </Box>
      </Box>
    </AbstractSidebar>
  );
};

export default Sidebar;
