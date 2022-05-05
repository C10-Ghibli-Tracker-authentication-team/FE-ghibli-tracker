import React from "react";
import user from "./User-icon.png";
import search from "./search.png";
import { Container, User, UserIcon, Search, SearchIcon } from "../../../styles/Navbar/NavbarTabletStyles";


const NavbarTablet = () => {
    return (
        <>
            <Container className = "container-menu">
                    <User href="/toAccount"><UserIcon src={user} alt="account" className="user-icon" /></User>

                    <Search href="/ToSearch"><SearchIcon src={search} alt="search" className="search-icon" /></Search>
            </Container>
        </>
    );
};


export default NavbarTablet;