import React from "react";

export default function Container(props) {
  return (
    <div
      className={`container p-x py-4 mx-auto ${
        props.className ? props.className : ""
      }`}
    >
      {props.children}
    </div>
  );
}
