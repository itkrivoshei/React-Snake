import React from "react";

export default (props) => {
  return (
    <>
      {props.snakePart.map((part, i) => {
        const style = {
          left: `${part[0]}%`,
          top: `${part[1]}%`,
        };
        return <div className="snakePart" key={i} style={style}></div>;
      })}
    </>
  );
};
