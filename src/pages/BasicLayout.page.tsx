import { Navigate, Outlet } from 'react-router-dom';
import BasicLayout from 'comopnents/layout/BasicLayout';
import { useAppSelector } from 'store/hooks';
import { useGetCategoriesByUserIdQuery } from '../store/api/category.api';

const BasicLayoutPage = () => {
  const { tokens } = useAppSelector((state) => state.user);
  useGetCategoriesByUserIdQuery(2);

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
