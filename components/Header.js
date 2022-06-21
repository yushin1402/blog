import 'bootstrap/dist/css/bootstrap.min.css';
import LOGO from '../public/vercel.svg'
import {Navbar, Nav, NavDropdown, Container} from 'react-bootstrap'
import Link from 'next/link';

const Header = (props) => {
    return (
        <Navbar collapseOnSelect bg="dark" variant="dark">
            <Nav className="me-auto">
                <Link href="/" passHref>
                    <Nav.Link>Home</Nav.Link>
                </Link>
                <Link href="/blog" passHref>
                    <Nav.Link>Blogs</Nav.Link>
                </Link>
            </Nav>
            <Nav>
                <NavDropdown title="Menu" id="collasible-nav-dropdown" className="dropdown-menu-right">
                    <NavDropdown.Item href="github">GitHub</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <Link href="/signup" passHref>
                    <NavDropdown.Item>SignUp</NavDropdown.Item>
                    </Link>
                    <Link href="/login" passHref>
                        <NavDropdown.Item>Login</NavDropdown.Item>
                    </Link>
                </NavDropdown>
            </Nav>
        </Navbar>
    );
}
export default Header;