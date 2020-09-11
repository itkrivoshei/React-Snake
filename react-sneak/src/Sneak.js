import React from "react";

export default (props) => {
  return (
    <div>
      {props.sneakPart.map((part, i) => {
        const style = {
          left: `${dot[0]}%`,
          top: `${dot[1]}%`
        }
        return (
          <div className="sneakPart" key={i} style={style}></div>
        )
      })}
    </div>
  )
}