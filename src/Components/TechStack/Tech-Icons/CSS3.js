import React from 'react'

const icon = {
  width: "50px",
  height: "50px",
  fill: "#1572B6",
  display: "inline-block",
  margin: "4px auto",
};

function CSS3() {
  return (
    <div>
      <svg style={icon} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <title>CSS3</title>
        <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z" />
      </svg>
    </div>
  );
}

export default CSS3