import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import {
  AiOutlineFieldTime,
  AiOutlinePhone,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import "./Header.scss";
function Header() {
  return (
    <div className="header">
      <div className="container">
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container fluid>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Brand href="#" className="logo">
              THIẾT BỊ ĐIỆN TỬ
            </Navbar.Brand>

            <Navbar.Brand href="#" className="contain_cart">
              <div class="d-lg-none">
                <div className="shopping_Cart">
                  <AiOutlineShoppingCart />
                </div>
              </div>
            </Navbar.Brand>

            <Navbar.Collapse id="navbarScroll">
              <Nav className="me-auto my-2 my-lg-0" navbarScroll>
                <Nav.Link href="#action1">TRANG CHỦ</Nav.Link>
                <Nav.Link href="#action2">GIỚI THIỆU</Nav.Link>
                <NavDropdown title="SẢN PHẨM" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#action3">DỊCH VỤ</Nav.Link>
                <Nav.Link href="#action4">LIÊN HỆ</Nav.Link>
              </Nav>
              <div className="contacts">
                <ul className="contact">
                  <li>
                    <span className="icon">
                      <AiOutlineFieldTime />
                    </span>
                    Hỗ trợ 24/7
                  </li>
                  <li className="icon">|</li>
                  <li>
                    <span className="icon">
                      <AiOutlinePhone />
                    </span>
                    0789.840.902
                  </li>
                </ul>
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  );
}

export default Header;
