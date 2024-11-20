import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function NavbarComponent() {
  return (
    <Navbar bg="light" expand="lg" fixed="top">
      <div className="container-fluid">
        <Navbar.Brand href="/" className="text-danger fw-bold fs-4">
          MyTube
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav" className="justify-content-between">
          <Nav className="me-auto">
            <Nav.Link href="/" className="text-dark fw-semibold">
              Home
            </Nav.Link>
            <Nav.Link href="/trending" className="text-dark fw-semibold">
              Trending
            </Nav.Link>
            <Nav.Link href="/subscriptions" className="text-dark fw-semibold">
              Subscriptions
            </Nav.Link>
            <Nav.Link href="/library" className="text-dark fw-semibold">
              Library
            </Nav.Link>
          </Nav>
          <Form className="d-flex ms-auto">
            <FormControl
              type="text"
              placeholder="Search"
              className="me-2"
            />
            <Button variant="danger" className="px-4">
              Search
            </Button>
          </Form>
          <div className="profile-icon ms-3" style={{ fontSize: '24px', cursor: 'pointer' }}>
            👤
          </div>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default NavbarComponent;
