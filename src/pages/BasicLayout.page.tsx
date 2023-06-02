import { Outlet } from 'react-router-dom';
import BasicLayout from 'comopnents/layout/BasicLayout';

const BasicLayoutPage = () => {
  const mock = {
    categories: [
      {
        categoryId: 1,
        categoryName: 'Personal',
      },
      {
        categoryId: 2,
        categoryName: 'Job',
      },
      {
        categoryId: 3,
        categoryName: 'Other',
      },
    ],
  };

  return (
    <BasicLayout categories={mock.categories}>
      <Outlet />
    </BasicLayout>
  );
};

export default BasicLayoutPage;
