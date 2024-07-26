import { createBrowserRouter } from 'react-router-dom';
import LayoutSite from '../appPages/site/components/layout/LayoutSite';
import HomePage from '../appPages/site/components/pages/HomePage';
import AboutPage from '../appPages/site/components/pages/AboutPage';
import LayoutAuth from '../appPages/auth/components/layout/LayoutAuth';
import LoginPage from '../appPages/auth/components/pages/LoginPage';
import RegistrationPage from '../appPages/auth/components/pages/RegistrationPage';

export const router: ReturnType<typeof createBrowserRouter> =
	createBrowserRouter([
		{
			path: '/',
			element: <LayoutSite />,
			children: [
				{
					path: '/',
					element: <HomePage />
				},
				{
					path: '/about',
					element: <AboutPage />
				}
			]
		},
		{
			path: '/auth',
			element: <LayoutAuth />,
			children: [
				{
					path: '/auth/sign-in',
					element: <LoginPage />
				},
				{
					path: '/auth/sign-up',
					element: <RegistrationPage />
				}
			]
		}
	]);
