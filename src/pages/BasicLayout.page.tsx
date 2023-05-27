import { Outlet } from 'react-router-dom';
import BasicLayout from 'comopnents/layout/BasicLayout';

const BasicLayoutPage = () => {
  const mock = {
    user: {
      userId: 1,
      username: 'Helluva Boss',
    },
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
    <BasicLayout
      user={mock.user}
      categories={mock.categories}
    >
      <Outlet />
    </BasicLayout>
  );
};

export default BasicLayoutPage;
