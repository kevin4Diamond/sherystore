import {Navbar, Nav} from 'react-bootstrap'

export default function Navig() {
  return (
    <>
          <Navbar style={{fontSize:18, color:'black',backgroundColor:'silver', textAlign:"center"}}   expand='lg' collapseOnSelect sticky="top"          >
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="justify-content-center">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link as="a" href="/contact" >Contact</Nav.Link>
              
            </Nav>
          </Navbar.Collapse>
          </Navbar>

    </>

    )
  }