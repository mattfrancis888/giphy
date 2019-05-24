import React from 'react';


const Gif = (props) => {
  return (
    <li className="col-12 my-1">
      <img src={props.url} className="w-100" alt=""/>
    </li>
  );
}

export default Gif;
