import { FC } from 'react';
import AbstractSidebar from 'comopnents/abstract/AbstractSidebar';
import Categories from 'comopnents/layout/Sidebar/components/categories';
import { Box } from '@mui/material';
import Button from 'comopnents/ui/Button';
import { ButtonTypes } from 'comopnents/ui/Button/button.types';
import { ICategory } from 'comopnents/store/model/category';
import { IUser } from 'comopnents/store/model/user';

interface ISidebarProps {
  onLogoutClick: () => void;
  onAddCategoryClick: () => void;
  onCreateTaskClick: () => void;
  categories?: ICategory[];
  user: IUser;
}

const Sidebar: FC<ISidebarProps> = (props) => {
  return (
    <AbstractSidebar
      // TODO 25.05.2023: Подставить значения из стора
      onLogoutClick={props.onLogoutClick}
      user={props.user}
    >
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
            }}
          >
            {props.categories && (
              <Categories
                onAddCategoryClick={props.onAddCategoryClick}
                categories={props.categories}
              />
            )}
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
