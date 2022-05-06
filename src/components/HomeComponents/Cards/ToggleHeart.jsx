import React, { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { Toggle } from "../../../styles/Cards/CardsStyles";


const FavIcon = () => {
    const  [toggleHeart, setToggleHeart] = useState(false);

    const handleClick = () => {
        setToggleHeart(!toggleHeart);
    }

    return (
        <div className="toggle">
            <Toggle type="button"onClick={handleClick}>{ toggleHeart ? <AiFillHeart /> : <AiOutlineHeart /> }</Toggle>
        </div>
    );
}

export default FavIcon;
