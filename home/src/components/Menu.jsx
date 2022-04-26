import React from "react";
import user from "./User-icon.png";
import search from "./search.png";
import "./Menu.css";


const Menu = () => {
    return (
        <>
            <div className = "container-menu">
                    <a href="/toAccount" className="user-icon"><img src={user} alt="account" /></a>

                    <a href="/ToSearch" className="search-icon"><img src={search} alt="search" /></a>
            </div>
        </>
    );
};


export default Menu;