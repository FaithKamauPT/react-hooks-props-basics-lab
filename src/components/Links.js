import React from 'react';

function Links({ github, linkedin }) {
  return (
    <div>
      <h3>Links</h3>
      <a href='https://github.com/Liza'>{github}</a>
      <a href='https://linkedin.com/in/Liza'>{linkedin}</a>
    </div>
  );
}

export default Links;
