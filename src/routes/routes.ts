// Layouts
import { MainLayout, UploadLayout, BlankLayout, AuthLayout } from '~/layouts';
import { Login } from '~/pages/auth/Login';
import Register from '~/pages/auth/Register/Register';
// Pages
import { Home } from '~/pages/Home';
import { Profile } from '~/pages/Profile';
import { Upload } from '~/pages/Upload';

type RouteType = {
  path: string;
  component: React.ComponentType;
  layout: React.ComponentType<{ children: React.ReactNode }>;
};

const publicRoutes: Array<RouteType> = [
  {
    path: '/',
    component: Home,
    layout: MainLayout,
  },
  {
    path: '/login',
    component: Login,
    layout: AuthLayout,
  },
  {
    path: '/register',
    component: Register,
    layout: AuthLayout,
  },
  {
    path: '/profile',
    component: Profile,
    layout: MainLayout,
  },
  {
    path: '/upload',
    component: Upload,
    layout: UploadLayout,
  },
];

const privateRoutes: Array<RouteType> = [];

export { publicRoutes, privateRoutes };
