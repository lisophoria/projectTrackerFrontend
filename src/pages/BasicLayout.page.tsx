import { Navigate, Outlet } from 'react-router-dom';
import BasicLayout from 'comopnents/layout/BasicLayout';
import { useAppSelector } from 'store/hooks';

const BasicLayoutPage = () => {
  const { tokens } = useAppSelector((state) => state.user);

  return (
    <BasicLayout>
      {tokens?.accessToken ? (
        <Outlet />
      ) : (
        <Navigate to={'/login'} />
      )}
    </BasicLayout>
  );
};

export default BasicLayoutPage;
