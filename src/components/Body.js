import React, {Component} from 'react';
import axios from 'axios';
import GifList from './GifList';
class Body extends Component {

  constructor(){
    super();
    this.state={
      gifs:[]
    };
    console.log('construcotr');
  }

  componentDidMount(){
    axios.get('http://api.giphy.com/v1/gifs/trending?api_key=Oxs1ob3ME12hvlDy2s9xs3VhOkJeu2nF')
    .then( (response) => {
      // handle success
      this.setState({
        gifs: response.data.data
      });
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log('Error:', error);
    })
  }


  render(){
    console.log('render');
    return (
      <body className="body-container">
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <GifList data={this.state.gifs}/>
            </div>
          </div>
        </div>
      </body>
    );
  }
}

export default Body;
