import React, { useState } from "react";

const  Moving =(props)=> {
const[state ,setState] = useState ({
      username: "",
      isActive: false,
      colors: ["grey"],
      id: props.id,
    })
// setState(state.id)

    return (
      <div
        className="boxes col-sm-2"
        id={state.id}
        onClick={() => {
          props.setTarget(state.id);
          console.log("Moving",state.id)
        }}

        style={{
          zIndex: props.id,
          height: "100px",
          backgroundColor: state.colors[state.id % 1],
          top: "0px",
          left: "0px",
          margin: "10px 20px 10px 20px",
        }}
      >
        {state.id}
      </div>
    );
}
export default Moving;
