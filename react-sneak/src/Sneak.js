import React from "react";

export default (props) => {
  return (
    <div>
      {props.sneakPart.map((part, i) => {
        const style = {
          left: `${part[0]}%`,
          top: `${part[1]}%`,
        };
        return <div className="sneakPart" key={i} style={style}></div>;
      })}
    </div>
  );
};
