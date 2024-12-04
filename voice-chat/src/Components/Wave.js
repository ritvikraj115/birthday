import React, { useState } from 'react';
// import Wavify from 'react-wavify';
const Wave = ({ isSpeaking }) => {
  {console.log(isSpeaking)}
  return(
  <div
  style={{
    marginTop: '10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }}
>
  <div
    style={{
      width: '100px',
      height: '100px',
      borderRadius: '50%',
      overflow: 'hidden',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white', // Optional background color
      border: isSpeaking ? '5px solid green' : '5px solid green',
      boxShadow: isSpeaking ? '0 0 15px 5px rgba(0, 255, 0, 0.6)' : '0 0 15px 5px rgba(0, 255, 0, 0.6)',
      transition: 'border 0.3s ease, box-shadow 0.3s ease', // Smooth transition effect
    }}
  >
    <img
      src={isSpeaking ? 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Shah_Rukh_Khan_graces_the_launch_of_the_new_Santro.jpg/220px-Shah_Rukh_Khan_graces_the_launch_of_the_new_Santro.jpg' : 'https://res.cloudinary.com/dzhowk5kf/image/upload/v1733336060/p5ydhyo0pkcltzcjtlql.png'}
      alt={isSpeaking ? 'Speaking' : 'Not Speaking'}
      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
    />
  </div>
</div>
)
  };
  export default Wave;