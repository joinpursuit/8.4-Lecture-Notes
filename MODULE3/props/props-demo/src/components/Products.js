import React from "react";
import Product from "./Product";
export default function Products() {
  const prods = [
      {name:"newItem",id:"adwawa16837426", price:1, description:"this will make everything rerender"},
    { name: "stuff",id:"adwawa1", price: 100, description: "pretty good" },
    { name: "other",id:"adwawa2", price: 1020, description: "pretty bad" },
    { name: "stuff1",id:"adwawa3", price: 102430, description: "pretty good!!!!!!!" },
    { name: "stuff2",id:"adwawa4", price: 1400, description: "terrible" },
    { name: "stuff3", id:"adwawa5", price: 1030, description: "the book was better" },
    {
      name: "stuff4",
      price: 1060,
      description: "I really like this I cant tell you why",
    },
  ];
 
  return (
    <div>
      <h2>Products are below</h2>
      <ul>
        { prods.map((prod) => {
          return (
            <li key = { prod.id }> 
              <Product
                name={prod.name}
                price={prod.price}
                description={prod.description}
              />
            </li>
          );
        }) }
      </ul>
    </div>
  );
}


 // class verison 
// export class Products extends React.Component {
//   constructor(){
//     this.prods = [
//     { name:"newItem",id:"adwawa16837426", price:1, description:"this will make everything rerender" },
//     { name: "stuff",id:"adwawa1", price: 100, description: "pretty good" },
//     { name: "other",id:"adwawa2", price: 1020, description: "pretty bad" },
//     { name: "stuff1",id:"adwawa3", price: 102430, description: "pretty good!!!!!!!" },
//     { name: "stuff2",id:"adwawa4", price: 1400, description: "terrible" },
//     { name: "stuff3", id:"adwawa5", price: 1030, description: "the book was better" },
//     {
//       name: "stuff4",
//       price: 1060,
//       description: "I really like this I cant tell you why",
//     },
//   ];
//   }
//   render(){
//     return (
//       <div>
//         <h2>Products are below</h2>
//         <ul>
//           { prods.map((prod) => {
//             return (
//               <li key = { prod.id }> 
//                 <Product
//                   name={prod.name}
//                   price={prod.price}
//                   description={prod.description}
//                 />
//               </li>
//             );
//           }) }
//         </ul>
//       </div>
//     );
//   }
// }