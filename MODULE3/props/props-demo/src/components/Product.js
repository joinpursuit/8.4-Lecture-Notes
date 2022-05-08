import React from "react";

export default function Product(props) {
    console.log(props)
const { name, price, description } = props
  const styleObj = {
    border: "2px solid green",
    padding: "25px",
    width: "50%",
  };
  return (
    <div style={ styleObj }>
      <h3>
        { name } - { price }
      </h3>
      <p>Desc: { description }</p>
    </div>
  );
}
