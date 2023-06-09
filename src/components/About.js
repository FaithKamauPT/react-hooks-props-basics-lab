import React from 'react';
import Links from './Links';

function About({ bio, github, linkedin }) {
  return (
    <div id="about">
      <h2>About Me</h2>
           {bio && <p>'I am A student learnning how to code'</p>}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github='https://github.com/Liza' linkedin='https://linkedin.com/in/Liza' />
    </div>
  );
}

export default About;





