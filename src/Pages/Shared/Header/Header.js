import React from 'react';
import { useContext } from 'react';
import { Image } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import SideNave from '../SideNav/SideNave';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    return (
        <Navbar collapseOnSelect className='mb-3' expand="lg" bg="light" variant="light">
            <Container>
                <> <Link className=' me-3 text-decoration-none text-dark' to={'/'}>HM Academy</Link> </>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto align-items-center">
                        <Link className='me-3 text-decoration-none text-dark' to='/courses'>Our Courses</Link>
                        <Link className='me-3 text-decoration-none text-dark' to='/blog'>Blog</Link>
                        <Link className='me-3 text-decoration-none text-dark' to='/fag'>FAQ</Link>
                        <Link className='me-3 text-decoration-none text-dark' to='/about'>About us</Link>

                    </Nav>
                    <Nav>
                        <>
                            {
                                user?.uid ?
                                    <>
                                        <span className='me-2'> {user?.displayName} </span>
                                        <Button variant="light" onClick={handleLogOut}>Log out </Button>
                                    </>
                                    :
                                    <>
                                        <Link className='me-2' to={'/login'}>Login</Link>
                                        <Link className='me-2' to={'/register'}>Register</Link>
                                    </>
                            }


                        </>
                        <Link to='/profile'>
                            {
                                user?.photoURL ?
                                    <Image style={{ height: '30px' }} roundedCircle src={user.photoURL} />
                                    : <FaUser />
                            }
                        </Link>
                    </Nav>
                    <div className='d-lg-none'>
                        <SideNave />
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;