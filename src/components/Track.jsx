import React, { useState } from "react";

function Track(props) {
  return (
    <div>
        <img src={props.img} alt="cover art"></img>
        <h1>{props.title}</h1>
        <h3>{props.author}</h3>
        <h5>{props.url}</h5>
    </div>
  );
}

export default Track;
