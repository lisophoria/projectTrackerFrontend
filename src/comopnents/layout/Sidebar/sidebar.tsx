import {FC} from "react";
import AssignmentIcon from '@mui/icons-material/Assignment';import AbstractSidebar from "../../abstract/AbstractSidebar";

const Sidebar: FC = () => {
  return (
    <AbstractSidebar
      tabs={[
        {
          icon: (<AssignmentIcon />),
          title: 'My tasks',
          link: '/',
        },
      ]}
   />
  );
};

export default Sidebar;