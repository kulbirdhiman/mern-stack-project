import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
const MainNavbar = () => {
    return (
        <>
            <Navbar bg="light" data-bs-theme="info">
                <Container>
                    <Navbar.Brand href="#home">let's Chat</Navbar.Brand>
                    <Nav className="ms-auto ">
                        <input type="text" placeholder='search' className='border text-center mx-2' />
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                Dropdown Button
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}
export default MainNavbar