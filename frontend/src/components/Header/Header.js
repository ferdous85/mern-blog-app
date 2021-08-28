import {Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap'

const Header = () => {
  return (
    
        <Navbar bg="primary" expand="lg" variant="dark">
          <Container>
          <Navbar.Brand href="/" >NotteZipper</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav
              className="m-auto"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Form className="d-flex">
              <FormControl
                type="search"                
                className="mr-sm-2"
                placeholder="Search"
              />              
            </Form>
            </Nav>
            <Nav>
              <Nav.Link href="/mynotes">My Notes</Nav.Link>
              <NavDropdown title="John Doe" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Profile</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Logout</NavDropdown.Item>
      
              </NavDropdown> 
            </Nav>
          </Navbar.Collapse>
          </Container>
        </Navbar>
  
  )
}

export default Header
