import React from 'react';


const Gif = (props) => {
  return (
    <li className="gif-wrap col-12 col-md-6 col-lg-4 border-dark">
      <img src={props.url} className="h-100 w-100" alt=""/>
    </li>
  );
}

export default Gif;
