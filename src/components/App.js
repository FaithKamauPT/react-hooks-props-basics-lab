import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";


function App() {
  const user = {
    name: 'Liza',
    city: 'New York',
    bio: 'I am A student learnning how to code',
    github: 'https://github.com/Liza',
    linkedin: 'https://linkedin.com/in/Liza',
  };

  return (
    <div>
      <Home name={user.name} city={user.city} />
      <About bio={user.bio} github={user.github} linkedin={user.linkedin} />

      
      <NavBar />
      <Home />
      <About />
    </div>
    
  );
}

  export default App;
