import arrow from './arrow-back.svg';
import search from './search.svg';
import { Container } from '../../styles/Navbar/NavbarArrowStyles';
import { Link } from 'react-router-dom';

const NavbarArrow = () => {
  return (
    <>
      <Container className="container-menu">
        <Link to={'/'}>
          <img src={arrow} alt="back" className="arrow-icon" />
        </Link>

        <Link to={'/search'}>
          <img src={search} alt="search" className="search-icon" />
        </Link>
      </Container>
    </>
  );
};

export default NavbarArrow;
