import Carousel from "react-bootstrap/Carousel";
import slider_1 from "../../../assets/product/carousel/slider_1.webp";
import slider_2 from "../../../assets/product/carousel/slider_2.webp";
import styles from "./styles.module.scss";
const CarouselProduct = () => {
  return (
    <Carousel
      id="carouselExampleInterval"
      className="carousel slide"
      data-mdb-ride="carousel"
      data-mdb-interval="false"
    >
      <Carousel.Item>
        <img className="d-block w-100 " src={slider_1} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={slider_2} alt="Second slide" />
      </Carousel.Item>
    </Carousel>
  );
};

const CarouselService = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <div className="item d-flex align-items-center">
            <div className="image">
              <img
                width="54"
                height="54"
                className="lazyload img-responsive loading"
                src="//bizweb.dktcdn.net/100/482/909/themes/903912/assets/image_service1.png?1685517211430"
                alt="Đổi trả dễ dàng"
                data-was-processed="true"
              />
            </div>
            <div className="text">
              <h3>Đổi trả dễ dàng</h3>
              <p className="text-dark">
                Đổi trả trong 30 ngày đầu tiên cho tất cả các sản phẩm
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="item  d-flex align-items-center">
            <div className="image">
              <img
                width="54"
                height="54"
                className="lazyload img-responsive loading"
                src="//bizweb.dktcdn.net/100/482/909/themes/903912/assets/image_service4.png?1685517211430"
                alt="Hỗ trợ online 24/7"
                data-was-processed="true"
              />
            </div>
            <div className="text">
              <h3>Giao hàng toàn quốc</h3>
              <p className="text-dark">
                Miễn phí giao hàng với các đơn hàng trị giá trên 5.000.000Đ
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="item  d-flex align-items-center">
            <div className="image">
              <img
                width="54"
                height="54"
                className="lazyload img-responsive loading"
                src="//bizweb.dktcdn.net/100/482/909/themes/903912/assets/image_service3.png?1685517211430"
                alt="Quà tặng hấp dẫn"
                data-was-processed="true"
              />
            </div>
            <div className="text">
              <h3>Quà tặng hấp dẫn</h3>
              <p className="text-dark">
                Chương trình khuyến mãi cực lớn và hấp dẫn hàng tháng
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="item  d-flex align-items-center">
            <div className="image">
              <img
                width="54"
                height="54"
                className="lazyload img-responsive loading"
                src="//bizweb.dktcdn.net/100/482/909/themes/903912/assets/image_service4.png?1685517211430"
                alt="Hỗ trợ online 24/7"
                data-was-processed="true"
              />
            </div>
            <div className="text">
              <h3>Hỗ trợ online 24/7</h3>
              <p className="text-dark">
                Luôn hỗ trợ khách hàng 24/24 giờ các ngày trong tuần
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export { CarouselProduct, CarouselService };
