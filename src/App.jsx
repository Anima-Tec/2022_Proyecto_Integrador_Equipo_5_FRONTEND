import React from 'react';
import LandingLayout from './components/layouts/LandingLayout';
import AppRoutes from './routers';

export default function App() {
  return (
    <LandingLayout>
      <AppRoutes />
    </LandingLayout>
  );
}
