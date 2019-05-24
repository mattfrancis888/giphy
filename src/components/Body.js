import React from 'react';

import GifList from './GifList';

const Body = (props) => {
  return (
    <body className="body-container">
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <GifList data={props.gifs}/>
          </div>
        </div>
      </div>
    </body>
  );
}

export default Body;
