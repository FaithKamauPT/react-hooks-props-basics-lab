import React from "react";


function Home({ name, city }) {
  return (
    <div id="home">
      <h1 style={{ color: 'firebrick' }}>
        Liza is a Web Developer from New York
      </h1>
    </div>
  );
}










// function Home(props) {
//   return (
//     <div id="home">
//       <h1 style={{ color: props.color }}>
//         {props.name} is a Web Developer from {props.city}
//       </h1>
//     </div>
//   );
// }

export default Home;
