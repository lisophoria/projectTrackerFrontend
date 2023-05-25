import {FC} from "react";
import ModeStandbyIcon from '@mui/icons-material/ModeStandby';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AbstractSidebar from "../../abstract/AbstractSidebar";
import Categories from "./components/categories";
import {Box} from "@mui/material";
import Button from "../../ui/Button";
import {ButtonTypes} from "../../ui/Button/button.types";

interface ISidebarProps {
  onLogoutClick: () => void;
  onAddCategoryClick: () => void;
  onCreateTaskClick: () => void;
}

const Sidebar: FC<ISidebarProps> = (props) => {
  return (
    <AbstractSidebar
      // TODO 25.05.2023: Подставить значения из стора
      onLogoutClick={props.onLogoutClick}
      user={{ username: 'Helluva Boss' }}
      tabs={[
        {
          icon: (<ModeStandbyIcon />),
          title: 'My day',
          link: '/',
        },
        {
          icon: (<AccountCircleIcon />),
          title: 'Edit profile',
          link: '/profile'
        }
      ]}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          boxSizing: 'border-box',
          padding: '18px'
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
            <Categories
              onAddCategoryClick={props.onAddCategoryClick}
              categories={[
                {
                  categoryName: 'Personal',
                },
                {
                  categoryName: 'Job',
                },
                {
                  categoryName: 'Friends',
                },
              ]}
            />
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
