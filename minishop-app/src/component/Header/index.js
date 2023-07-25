import React from "react";
import styles from "./styles.module.scss";
import HeaderMenu from "./Menu/HeaderMenu";
const HeaderContent = () => {
  return (
    <div className="container  text-white">
      {/* topbar */}
      <div className={styles.topbar}>
        <div className="container">
          <div className="row ">
            <div className=" col-lg-12 col-md-12 col-12 ">
              Giờ mở cửa: 08:30 - 21:30 các ngày trong tuần
            </div>
          </div>
        </div>
      </div>

      {/* header-middle */}
      <div className={styles.header_middle}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-3">
              <img
                src="https://bizweb.dktcdn.net/100/482/909/themes/903912/assets/logo.png?1685517211430"
                alt="logo"
                className="img-fluid"
              />
            </div>
            <div className="col-md-5">
              <div className="input-group ">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Từ khóa tìm kiếm"
                  aria-label="Từ khóa tìm kiếm"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text" id="basic-addon2">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </span>
              </div>
            </div>
            <div className="col-md-4">
              <div className="row">
                <div className="col-4 block_phone">
                  <div className="row d-flex align-items-center">
                    <div className="col-3">
                      <div className="fs-4 text-white">
                        <i className="fa-solid fa-phone"></i>
                      </div>
                    </div>
                    <div className="col-9">
                      Hỗ trợ
                      <br />
                      <small className="text-white"> 078999999 </small>
                    </div>
                  </div>
                </div>
                <div className="col-4 block_account">
                  <div className="row d-flex align-items-center">
                    <div className="col-3">
                      <div className="fs-4 text-white">
                        <i className="fa-solid fa-user"></i>
                      </div>
                    </div>
                    <div className="col-9">
                      Hỗ trợ
                      <br />
                      <small className="text-white"> 078999999 </small>
                    </div>
                  </div>
                </div>
                <div className={`col-4 ${styles.block_cart}`}>
                  <div className="row d-flex align-items-center">
                    <div className="col-3">
                      <div className="fs-4 text-white">
                        <i className="fa-solid fa-cart-shopping"></i>
                      </div>
                    </div>
                    <div className="col-9">Giỏ hàng</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.header_menu}>
        <HeaderMenu />
      </div>
    </div>
  );
};
function Header() {
  return (
    <header className={styles.header}>
      <HeaderContent />
    </header>
  );
}

export default Header;
