import React, {Component} from 'react';
import axios from 'axios';
import { API_KEY } from './constants';
import Header from './components/Header.js';
import Body from './components/Body.js';
class App extends Component {

  constructor(){
    super();
    this.state={
      gifs:[]
    };
    console.log('construcotr');
  }

  performSearch = query =>{
    axios.get(`http://api.giphy.com/v1/gifs/search?q=${query}&limit=30&api_key=${API_KEY}`)
    .then( (response) => {
      // handle success
      this.setState({
        gifs: response.data.data
      });
      console.log('Response:', response);
    })
    .catch(function (error) {
      // handle error
      console.log('Error:', error);
    })
  }

  componentDidMount(){
    axios.get(`http://api.giphy.com/v1/gifs/trending?limit=30&api_key=${API_KEY}`)
    .then( (response) => {
      // handle success
      this.setState({
        gifs: response.data.data
      });
      console.log('Response:', response);
    })
    .catch(function (error) {
      // handle error
      console.log('Error:', error);
    })
  }

  render(){
    return (
      <div className="App">
        <Header performSearch ={this.performSearch}/>
        <Body gifs={this.state.gifs} />
      </div>
    );
  }
}

export default App;
