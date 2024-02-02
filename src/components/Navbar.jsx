import React from 'react';

const Navbar = ({ brandName, links }) => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          {brandName}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {links.map((link, index) => (
              <li className="nav-item" key={index}>
                <a
                  className={`nav-link ${link.active ? 'active' : ''}`}
                  href={link.href}
                  aria-current={link.active ? 'page' : undefined}
                  disabled={link.disabled}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
