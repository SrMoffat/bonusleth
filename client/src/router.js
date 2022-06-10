import { Suspense, lazy } from 'react';
import { Navigate } from 'react-router-dom';

import SidebarLayout from 'src/layouts/SidebarLayout';

import SuspenseLoader from 'src/components/SuspenseLoader';

const Loader = (Component) => (props) =>
  (
    <Suspense fallback={<SuspenseLoader />}>
      <Component {...props} />
    </Suspense>
  );

// Dashboards
const Transactions = Loader(lazy(() => import('src/content/applications/Transactions')));
const Overview = Loader(lazy(() => import('src/content/overview')));

const routes = [
  {
    path: 'dashboards',
    element: <SidebarLayout />,
    children: [
      {
        path: '/',
        element: <Navigate to="/dashboards/tasks" replace />
      },
      {
        path: 'tasks',
        element: <Transactions />
      }
    ]
  }
];

export default routes;
