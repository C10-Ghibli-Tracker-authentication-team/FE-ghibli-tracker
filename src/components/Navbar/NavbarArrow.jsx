import React from "react";
import arrow from "./arrow-back.png";
import search from "./search.svg";
import { Container, Arrow, ArrowIcon, Search, SearchIcon } from "../../styles/Navbar/NavbarArrowStyles";


const NavbarArrow = () => {
    return (
        <>
            <Container className = "container-menu">
                    <Arrow href="/"><ArrowIcon src={arrow} alt="back" className="arrow-icon" /></Arrow>

                    <Search href="/ToSearch"><SearchIcon src={search} alt="search" className="search-icon" /></Search>
            </Container>
        </>
    );
};


export default NavbarArrow;