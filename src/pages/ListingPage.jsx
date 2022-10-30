import React from "react";
import ImageBlock from "../components/ImageBlock";
import Loading from "../components/Loading";

export default function ListingPage(props) {
  return (
    <>
      <div className="w-screen h-screen grid grid-cols-3 gap-x-[10px] gap-y-[30px] px-[10px] md:gap-x-[30px] md:gap-y-[90px] md:px-[30px] scrollbar-hide">
        {props.datas.map((data, i) => {
          return (
            <div key={i}>
              {data["poster-image"] && data["poster-image"].length ? (
                <ImageBlock
                  poster={require(`../assets/Slices/${data["poster-image"]}`)}
                />
              ) : (
                <Loading />
              )}
              <h1 className="text-xs md:text-sm lg:text-base mt-3">
                {data.name}
              </h1>
            </div>
          );
        })}
      </div>
    </>
  );
}
