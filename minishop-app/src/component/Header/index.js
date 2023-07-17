import React from "react";

function Header() {
  return (
    <div className="header bg-dark">
      <div className="container py-3 text-white">
        <div className="row ">
          <div className="col md-12 sm-12 lg-12 ">
            Giờ mở cửa: 08:30 - 21:30 các ngày trong tuần
          </div>
        </div>
        <hr />
        <div className="row d-flex align-items-baseline ">
          <div className="col-md-2  text-white">
            <img
              src="https://bizweb.dktcdn.net/100/482/909/themes/903912/assets/logo.png?1685517211430"
              alt="logo"
              className="img-fluid"
            />
          </div>
          <div className="col-md-6">
            <div className="input-group mb-3">
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
              <div className="col">
                <div className="row">
                  <div className="col-3  d-flex align-items-center">
                    <div className="fs-3 text-white">
                      <i className="fa-solid fa-phone"></i>
                    </div>
                  </div>
                  <div className="col-9">
                    Hỗ trợ
                    <br />
                    <strong className="text-white"> 078999999 </strong>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="row">
                  <div className="col-3  d-flex align-items-center">
                    <div className="fs-3 text-white">
                      <i className="fa-solid fa-user"></i>
                    </div>
                  </div>
                  <div className="col-9">
                    Tài khoản <br />
                    <strong className="text-white"> Đăng nhập </strong>
                  </div>
                </div>
              </div>

              <div class="col">
                <a href="!#" class="position-relative">
                  <span class="fs-3 ">
                    <i class="fa-solid fa-cart-shopping"></i>
                  </span>

                  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    0
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
