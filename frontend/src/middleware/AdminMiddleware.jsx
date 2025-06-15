import React from 'react'
import "../css/admin.css";
import { Link, Outlet } from 'react-router-dom';
import { useGetVerifyQuery } from '../store/reducers/authSlice';

function AdminMiddleware() {
  const { data, isLoading, isError } = useGetVerifyQuery();


  const logout = () => {
    localStorage.clear();
    window.location.href = "/login";
  }

  if (!isLoading) {
    if (data.status) {
      return (
        <React.Fragment>

          <header id="header" className="header fixed-top d-flex align-items-center">
            <div className="d-flex align-items-center justify-content-between">
              <a href="index.html" className="logo d-flex align-items-center">
                <span className="d-none d-lg-block">MERN8PM</span>
              </a>
              <i className="bi bi-list toggle-sidebar-btn" />
            </div>
            <div className="search-bar">
              <form className="search-form d-flex align-items-center" method="POST" action="#">
                <input type="text" name="query" placeholder="Search" title="Enter search keyword" />
                <button type="submit" title="Search"><i className="bi bi-search" /></button>
              </form>
            </div>
            <nav className="header-nav ms-auto">
              <ul className="d-flex align-items-center">
                <li className="nav-item d-block d-lg-none">
                  <a className="nav-link nav-icon search-bar-toggle " href="#">
                    <i className="bi bi-search" />
                  </a>
                </li>

                <li className="nav-item dropdown pe-3">
                  <a className="nav-link nav-profile d-flex align-items-center pe-0" href="#" data-bs-toggle="dropdown">
                    <img src={data.user.image} alt="Profile" className="rounded-circle" />
                    <span className="d-none d-md-block dropdown-toggle ps-2">
                      {data.user.name ? data.user.name : "User Name"}
                    </span>
                  </a>
                  <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                    <li className="dropdown-header">
                      <h6>
                        {data.user.name ? data.user.name : "User Name"}
                      </h6>
                      <span>
                        {data.user.role ? data.user.role : "User"}
                      </span>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item d-flex align-items-center" href="users-profile.html">
                        <i className="bi bi-person" />
                        <span>My Profile</span>
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item d-flex align-items-center" href="users-profile.html">
                        <i className="bi bi-gear" />
                        <span>Account Settings</span>
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item d-flex align-items-center" href="pages-faq.html">
                        <i className="bi bi-question-circle" />
                        <span>Need Help?</span>
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <button
                        onClick={logout}
                        className="dropdown-item d-flex align-items-center">
                        <i className="bi bi-box-arrow-right" />
                        <span>Sign Out</span>
                      </button>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
          </header>
          <aside id="sidebar" className="sidebar">
            <ul className="sidebar-nav" id="sidebar-nav">
              <li className="nav-item">
                <Link className="nav-link " to="/admin">
                  <i className="bi bi-grid" />
                  <span>Dashboard</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/admin/users">
                  <i className="bi bi-people" />
                  <span>Manage Users</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link collapsed" data-bs-target="#news-nav" data-bs-toggle="collapse" to="#">
                  <i className="bi bi-people" /><span>News</span><i className="bi bi-chevron-down ms-auto" />
                </Link>
                <ul id="news-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                  <li>
                    <Link to="">
                      <i className="bi bi-circle" /><span>Add News</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="">
                      <i className="bi bi-circle" /><span>Show News</span>
                    </Link>
                  </li>

                </ul>
              </li>

            </ul>
          </aside>
          <main id="main" className="main">
            <section className="section dashboard">
              <div className="row">
                <Outlet />
              </div>
            </section>
          </main>

          <footer id="footer" className="footer">
            <div className="copyright">
              © Copyright <strong><span>NiceAdmin</span></strong>. All Rights Reserved
            </div>
            <div className="credits">
              Designed by <Link to="/">MERN</Link>
            </div>
          </footer>
          <Link to="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short" /></Link>
        </React.Fragment>
      )
    } else {
      window.location.href = "/login";
    }

  } else {
    return (<div>Loading</div>)
  }

}

export default AdminMiddleware