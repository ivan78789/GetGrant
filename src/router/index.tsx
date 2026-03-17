import { createBrowserRouter, RouteObject } from 'react-router-dom';
import App from '../App';
import { HomePage } from '../pages/HomePage';
import { NotFoundPage } from '../pages/NotFoundPage';
import { AboutPage } from '../pages/AboutPage';

import { LoginPage } from '../pages/auth/LoginPage';
import { RegisterPage } from '../pages/auth/RegisterPage';
import { DashboardPage } from '../pages/dashboard/DashboardPage';
import { UniversitiesPage } from '../pages/universities/UniversityCatalogPage';
import { UniversityDetailPage } from '../pages/universities/[id]/UniversityDetailPage';
import { CountryCatalogPage } from '../pages/countries/CountryCatalogPage';
import { CountryDetailPage } from '../pages/countries/[id]/CountryDetailPage';
import { ProgramCatalogPage } from '../pages/programs/ProgramCatalogPage';
import { ProgramDetailPage } from '../pages/programs/[id]/ProgramDetailPage';
import { OnlineCoursesPage } from '../pages/courses/OnlineCoursesPage';
import { AdminDashboard } from '../pages/admin/AdminDashboard';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'universities', element: <UniversitiesPage /> },
      { path: 'universities/:id', element: <UniversityDetailPage /> },
      { path: 'countries', element: <CountryCatalogPage /> },
      { path: 'countries/:id', element: <CountryDetailPage /> },
      { path: 'programs', element: <ProgramCatalogPage /> },
      { path: 'programs/:id', element: <ProgramDetailPage /> },
      { path: 'courses', element: <OnlineCoursesPage /> },
      { path: 'dashboard', element: <DashboardPage /> },
      { path: 'admin', element: <AdminDashboard /> },
    ],
  },
  { path: 'login', element: <LoginPage onSwitchToRegister={() => {}} /> },
  { path: 'register', element: <RegisterPage onSwitchToLogin={() => {}} /> },
  { path: '*', element: <NotFoundPage /> },
];

export const router = createBrowserRouter(routes);
