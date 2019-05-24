import React from 'react';
import Gif from './Gif';

const GifList = (props) => {
  let gifs = props.data.map( gif =>

     <Gif url={gif.images.fixed_height.url} key={gif.id}/>
   );
  return (
    <ul className="gif-list-ul">
      <div className="row">
        {gifs}
      </div>
    </ul>
  );
}

export default GifList;
