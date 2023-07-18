import React from "react";
import styles from "./styles.scss";
export default function TopFooter() {
  return (
    <div className="footer text-dark bg-white">
      <div className="mid-footer">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <h4>Đăng ký để nhận tin tức khuyến mãi mới nhất</h4>
              <p>
                Bạn hãy để lại email để không bỏ lỡ hàng ngàn sản phẩm và các
                chương trình khuyến mại khác
              </p>
            </div>
            <div className="col-md-5">
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Từ khóa tìm kiếm"
                  aria-label="Từ khóa tìm kiếm"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text" id="basic-addon2">
                  Gửi
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
