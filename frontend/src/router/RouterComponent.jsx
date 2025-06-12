import React from 'react';
import { Routes, Route } from "react-router-dom";
import HomeComponent from '../pages/home/HomeComponent';
import AdminMiddleware from '../middleware/AdminMiddleware';
import DashboardComponent from '../admin/DashboardComponent';

function RouterComponent() {
  return (
    <React.Fragment>
      <Routes>
          <Route  path="/" element={<HomeComponent />} />

            <Route  path="/admin" element={<AdminMiddleware />} >
                    <Route  path="/admin" element={<DashboardComponent />} />
            </Route>
      </Routes>

    </React.Fragment>
  )
}

export default RouterComponent