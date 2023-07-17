import React from "react";
import { Nav, NavDropdown } from "react-bootstrap";

function Dropdown() {
  return (
    <div className="container text-white">
      <Nav variant="pills" activeKey="/home" as="ul">
        <Nav.Item as="li">
          <Nav.Link href="/home">Trang chủ</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link>Giới thiệu </Nav.Link>
        </Nav.Item>
        <NavDropdown title="Sản phẩm" id="nav-dropdown">
          <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
          <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
          <NavDropdown.Item eventKey="4.3">
            Something else here
          </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
        </NavDropdown>
        <Nav.Item as="li">
          <Nav.Link>Tin tức</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link> Liên hệ</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}

export default Dropdown;
