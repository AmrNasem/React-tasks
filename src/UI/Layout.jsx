import React from "react";
import { Link } from "react-router-dom";
const Layout = ({ children }) => {
  return (
    <>
      <header
        className="py-3"
        style={{ boxShadow: "0 1px 10px rgba(0, 0, 0, 0.1)" }}
      >
        <div className=" d-flex gap-3 align-items-center justify-content-between container">
          <h1>
            <Link to="/" className="text-decoration-none text-black">
              Tasks
            </Link>
          </h1>
          <nav>
            <ul className="d-flex gap-3 mb-0">
              <li>
                <Link
                  className="text-decoration-none text-turquiose"
                  to="/counter"
                >
                  Counter
                </Link>
              </li>
              <li>
                <Link
                  className="text-decoration-none text-turquiose"
                  to="/contacts"
                >
                  Contacts
                </Link>
              </li>
              <li>
                <Link
                  className="text-decoration-none text-turquiose"
                  to="/form"
                >
                  Form
                </Link>
              </li>
              <li>
                <Link
                  className="text-decoration-none text-turquiose"
                  to="/project"
                >
                  Project
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="my-5 px-10 container">{children}</main>
    </>
  );
};

export default Layout;
