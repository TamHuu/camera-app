import Carousel from "react-bootstrap/Carousel";
import slider_1 from "../../../assets/product/carousel/slider_1.webp";
import slider_2 from "../../../assets/product/carousel/slider_2.webp";
function CarouselProduct() {
  return (
    <Carousel
      id="carouselExampleInterval"
      class="carousel slide"
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
}

export default CarouselProduct;
