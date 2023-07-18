import React from "react";
import styles from "./styles.scss";
import TopFooter from "./TopFooter/TopFooter";
export default function Footer() {
  return (
    <div className="footer ">
      <TopFooter />
      <div className="bottom-footer ">
        <div className="container">
          <div className="row footer-title">
            <div className="col-md-3 ">
              <h4 className="title-menu">
                Về chúng tôi
                <span className="Collapsible__Plus"></span>
              </h4>
              <div className="list-menu hidden-mobile">
                <a href="/" title="Trang chủ">
                  Trang chủ
                </a>

                <a href="/gioi-thieu" title="Giới thiệu">
                  Giới thiệu
                </a>

                <a href="/collections/all" title="Sản phẩm">
                  Sản phẩm
                </a>

                <a href="/tin-tuc" title="Tin tức">
                  Tin tức
                </a>

                <a href="/lien-he" title="Liên hệ">
                  Liên hệ
                </a>
              </div>
            </div>
            <div className="col-md-3">
              <h4 className="title-menu">
                Về chúng tôi
                <span className="Collapsible__Plus"></span>
              </h4>
              <div className="list-menu hidden-mobile">
                <a href="/" title="Trang chủ">
                  Trang chủ
                </a>

                <a href="/gioi-thieu" title="Giới thiệu">
                  Giới thiệu
                </a>

                <a href="/collections/all" title="Sản phẩm">
                  Sản phẩm
                </a>

                <a href="/tin-tuc" title="Tin tức">
                  Tin tức
                </a>

                <a href="/lien-he" title="Liên hệ">
                  Liên hệ
                </a>
              </div>
            </div>
            <div className="col-md-3">
              <h4 className="title-menu">
                Về chúng tôi
                <span className="Collapsible__Plus"></span>
              </h4>
              <div className="list-menu hidden-mobile">
                <a href="/" title="Trang chủ">
                  Trang chủ
                </a>

                <a href="/gioi-thieu" title="Giới thiệu">
                  Giới thiệu
                </a>

                <a href="/collections/all" title="Sản phẩm">
                  Sản phẩm
                </a>

                <a href="/tin-tuc" title="Tin tức">
                  Tin tức
                </a>

                <a href="/lien-he" title="Liên hệ">
                  Liên hệ
                </a>
              </div>
            </div>
            <div className="col-md-3">
              <h4 className="title-menu">
                Về chúng tôi
                <span className="Collapsible__Plus"></span>
              </h4>
              <div className="list-menu hidden-mobile">
                <a href="/" title="Trang chủ">
                  Trang chủ
                </a>

                <a href="/gioi-thieu" title="Giới thiệu">
                  Giới thiệu
                </a>

                <a href="/collections/all" title="Sản phẩm">
                  Sản phẩm
                </a>

                <a href="/tin-tuc" title="Tin tức">
                  Tin tức
                </a>

                <a href="/lien-he" title="Liên hệ">
                  Liên hệ
                </a>
              </div>
            </div>
          </div>
          <hr />
        </div>
        <div id="copyright" className="copyright">
          <div className="container">
            <div className="wsp">© Bản quyền thuộc về Huu Tam</div>
          </div>
        </div>
      </div>
    </div>
  );
}
