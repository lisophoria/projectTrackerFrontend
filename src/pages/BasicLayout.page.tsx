import { Outlet } from 'react-router-dom';
import BasicLayout from 'comopnents/layout/BasicLayout';

const BasicLayoutPage = () => {
  return (
    <BasicLayout>
      <Outlet />
    </BasicLayout>
  );
};

export default BasicLayoutPage;
