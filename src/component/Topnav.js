import React from 'react'
import {Navbar,Nav, Col,Button, Row, Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

 const Topnav = () => {
    return (
        <>
            <header className='header '>
                <Navbar className="navbar" collapseOnSelect fixed='top' expand='sm'  variant="dark" >
                    {/* <Navbar.Brand href="#home"><img src={logo1} /></Navbar.Brand> */}
                        <Container >
                            <Navbar.Toggle aria-controls='responsive-navbar-nav ' className="dropbar position-fixed top-0 end-0" />
                            <Navbar.Collapse id='responsive-navbar-nav'  >             
                                <Nav className="justify-content-end" style={{ width: "100%" }}>
                                    <Nav.Link  href="/" >Home</Nav.Link>
                                    <Nav.Link href="/About">About</Nav.Link>
                                    <Nav.Link href="/Gallery">Gallery</Nav.Link>
                                    <Nav.Link href="https://drive.google.com/drive/folders/12q88rjO9_YUnq_hXCvNHDopx0jm17bwO?usp=sharing">More</Nav.Link>

                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>

            </header>
        </>
    )
}

export default Topnav
