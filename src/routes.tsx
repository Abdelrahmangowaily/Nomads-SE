import { RouteObject } from 'react-router-dom';
import { SiteWrapper } from './components/site-wrapper/site-wrapper';
import { HomePage } from './components/home-page/home-page';
import { About } from './components/about/about';
import { Login } from './components/login/login';
import { Register } from './components/login/register';
import { Admin } from './components/admin/admin';
import { Donor } from './components/donor/donor';
import { Organization } from './components/organization/organization';
import { DonationsReceived } from './components/organization/donations-received';
import { ManagePosts } from './components/organization/manage-posts';
import { CreatePost } from './components/organization/create-post';

export const routes: RouteObject[] = [
    {
        path: '/',
        element: <SiteWrapper />,
        children: [
            { index: true, element: <HomePage /> },
            { path: 'about', element: <About /> },
            { path: 'login', element: <Login /> },
            { path: 'register', element: <Register /> },
            { path: 'admin', element: <Admin /> },
            { path: 'donor', element: <Donor /> },
            { path: 'organization', element: <Organization /> },
            { path: 'organization/create-post', element: <CreatePost /> },
            { path: 'organization/manage-posts', element: <ManagePosts /> },
            { path: 'organization/donations-received', element: <DonationsReceived /> },
        ],
    },
];
