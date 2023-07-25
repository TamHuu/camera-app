import React from "react";
import styles from "./styles.module.scss";
function HeaderMenu() {
  return (
    <div className="header_menu">
      <nav
        className="navbar navbar-expand-lg navbar-light "
        style={{ display: "flex", gap: "60px" }}
      >
        <div className={styles.block_cate}>
          <a
            className={`navbar-brand text-white ${styles.title_menu}`}
            href="#2"
          >
            <span className="fs-3">
              <i className="fa-solid fa-bars"></i>
            </span>
            <div> Danh mục sản phẩm </div>
          </a>
        </div>
        <div className="content-nav">
          {" "}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
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
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
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
                  aria-disabled="true"
                >
                  Tuyển dụng
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link disabled text-white"
                  href="2#"
                  aria-disabled="true"
                >
                  Tin tức
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link disabled text-white"
                  href="2#"
                  aria-disabled="true"
                >
                  Liên hệ
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default HeaderMenu;
