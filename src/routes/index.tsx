import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { RootLayout } from '../layouts/RootLayout';
import { Home } from '../pages/Home';
import { DevotionalDesk } from '../pages/DevotionalDesk';
import { TempleDirectory } from '../pages/TempleDirectory';
import { AboutHistory } from '../pages/AboutHistory';

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="desk" element={<DevotionalDesk />} />
        <Route path="temples" element={<TempleDirectory />} />
        <Route path="about" element={<AboutHistory />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
