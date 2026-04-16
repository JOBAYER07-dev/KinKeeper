import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Shared/Navbar';
import Footer from '../Components/Shared/Footer';
import { TimelineProvider } from '../Context/TimelineContext';

const RootLayout = () => {
  return (
    <TimelineProvider>
      <div>
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </TimelineProvider>
  );
};

export default RootLayout;
