import React from "react";
import Missing from "../assets/Slices/placeholder_for_missing_posters.png";

export default function Loading() {
  return (
    <div className="w-[100%]">
      <img
        className="w-full h-full"
        src={Missing}
        alt="placeholder_for_missing_posters"
      />
    </div>
  );
}
