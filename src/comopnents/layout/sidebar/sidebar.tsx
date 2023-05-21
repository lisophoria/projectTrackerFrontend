import {FC} from "react";
import AssignmentIcon from '@mui/icons-material/Assignment';import AbstractSidebar from "../../abstract/abstractSidebar";

const Sidebar: FC = () => {
  return (
    <AbstractSidebar
      tabs={[
        {
          icon: (<AssignmentIcon />),
          title: 'My issues',
          link: '/',
        },
        {
          icon: (<AssignmentIcon />),
          title: 'Categories',
          link: '/2',
        },
      ]}
   />
  );
};

export default Sidebar;
