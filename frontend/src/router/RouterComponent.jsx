import React from 'react';
import { Routes, Route } from "react-router-dom";
import HomeComponent from '../pages/home/HomeComponent';
import AdminMiddleware from '../middleware/AdminMiddleware';
import DashboardComponent from '../admin/DashboardComponent';
import UsersComponents from '../admin/UsersComponents';
import LoginComponent from '../auth/LoginComponent';
import RegisterComponent from '../auth/RegisterComponent';
import ContactComponent from '../pages/contact/ContactComponent';
import AboutComponent from '../pages/about/AboutComponent';
import AddNewsComponent from '../admin/AddNewsComponent';

function RouterComponent() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/about" element={<AboutComponent />} />
        <Route path="/contact" element={<ContactComponent />} />
        <Route path="/login" element={<LoginComponent />} />
        <Route path="/register" element={<RegisterComponent />} />

        <Route path="/admin" element={<AdminMiddleware />} >
          <Route path="/admin" element={<DashboardComponent />} />
          <Route path="users" element={<UsersComponents />} />
          <Route path="add-news" element={<AddNewsComponent />} />

        </Route>
      </Routes>

    </React.Fragment>
  )
}

export default RouterComponent