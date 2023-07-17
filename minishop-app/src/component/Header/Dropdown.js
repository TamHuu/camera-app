import React from "react";
import styles from "./styles.scss";
function Dropdown() {
  return (
    <div className="container">
      <div className="row d-flew ">
        <div className="col-md-4 block-cate">
          <ul>
            <li className="nav-item dropdown">
              <a
                className="nav-link  text-white "
                href="2#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <div className="text-white category-menu">
                  <span className="fs-3">
                    <i className="fa-solid fa-bars"></i>
                  </span>
                  Danh mục sản phẩm
                </div>
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="2#">
                    Action
                  </a>
                </li>
                <br />
                <li>
                  <a className="dropdown-item" href="2#">
                    Another action
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="2#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="col-md-8 ">
          <nav className="navbar navbar-expand-lg navbar-light ">
            <a className="navbar-brand d-none" href="#2">
              Navbar
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a
                    className="nav-link text-white active"
                    aria-current="page"
                    href="2#"
                  >
                    Trang chủ
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="2#">
                    Giới thiệu
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle text-white "
                    href="2#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Sản phẩm
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <a className="dropdown-item" href="2#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="2#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="2#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link disabled text-white"
                    href="2#"
                    tabindex="-1"
                    aria-disabled="true"
                  >
                    Tuyển dụng
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link disabled text-white"
                    href="2#"
                    tabindex="-1"
                    aria-disabled="true"
                  >
                    Tin tức
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link disabled text-white"
                    href="2#"
                    tabindex="-1"
                    aria-disabled="true"
                  >
                    Liên hệ
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Dropdown;
