import React, { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
<<<<<<< HEAD:src/ToggleHeart.jsx
import { Toggle } from "./Styles/CardsStyles";
=======
import { Toggle } from "../../../styles/Cards/CardsStyles";
>>>>>>> santiago:src/components/HomeComponents/Cards/ToggleHeart.jsx


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
