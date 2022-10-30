import React from "react";

export default function ImageBlock(props) {
  return (
    <div>
      <img className="w-[100%]" src={props.poster} alt="Poster" />
    </div>
  );
}
