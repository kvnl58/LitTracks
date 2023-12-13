import React, { useState } from "react";
import TitleCard from "./TitleCard";

function Book(props) {
    const [songs, setSongs] = useState({
        name: "",
        artist: "",
        url: "",
        start: "",
        end: "",
    });

    return (
        <div>
            <TitleCard 
                title={props.title}
                author={props.author}
                img={props.img}
                url={props.url}
            />
        </div>
    );
}

export default Book;
