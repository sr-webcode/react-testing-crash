import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from '@components/Layout';

const HomePage = React.lazy(() => import('./pages/Home' /* webpackChunkName: "Home" */));
const AboutPage = React.lazy(() => import('./pages/About' /* webpackChunkName: "About" */));
const RecordsListPage = React.lazy(() => import('./pages/Records' /* webpackChunkName: "Records" */));
const RecordPage = React.lazy(() => import('./pages/Record' /* webpackChunkName: "Record" */));
const LoginPage = React.lazy(() => import('./pages/Login' /* webpackChunkName: "Record" */));

const PageRoutes: React.FC = () => (
  <React.Suspense fallback={<div>loading ...</div>}>
    <Routes>
      <Route path='/'>
        <Route index={true} element={<HomePage />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/product' element={<AboutPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='records'>
          <Route index element={<RecordsListPage />} />
          <Route path=':recordId' element={<RecordPage />} />
        </Route>
        <Route path='admin' element={<Layout />}>
          <Route index element={<RecordsListPage />} />
          <Route path='records'>
            <Route index element={<RecordsListPage />} />
            <Route path=':recordId' element={<RecordPage />} />
          </Route>
        </Route>
        <Route path='*' element={<div> page not found...</div>} />
      </Route>
    </Routes>
  </React.Suspense>
);

export default PageRoutes;
