import React, {useContext} from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { ContextLogin } from "./ContextLogin";

const Header = () => {

  const {loggedIn, setLoggedIn} = useContext(ContextLogin)

  //logout function
  const handleLogOut = () => {
    localStorage.removeItem('isLoggedIn')
    setLoggedIn(!loggedIn)
    window.location.reload()
  }
  
  return (
    <>
 <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          
            <Navbar.Brand href="#home">My Task-App</Navbar.Brand>

           {loggedIn && <> 
           <Navbar.Toggle aria-controls="responsive-navbar-nav" />
           <Navbar.Collapse id="responsive-navbar-nav">
              <div className="me-auto"></div>
              <Nav>
                <Nav.Link href="#users">Users</Nav.Link>
                <Nav.Link eventKey={2} href="#profile">
                  Profile
                </Nav.Link>
                <Button onClick= {handleLogOut}
                variant="light">Log Out</Button>
              </Nav>
            </Navbar.Collapse>
            </> }
         
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
