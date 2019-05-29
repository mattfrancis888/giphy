import React, {Component} from 'react';
import axios from 'axios';
import { API_KEY, ITEM_LIMIT } from './constants';
import Header from './components/Header.js';
import Body from './components/Body.js';
import Loading from './components/Loading.js';

class App extends Component {

  constructor(){
    super();
    this.state={
      gifs:[],
      offset: 0,
      loading:true
    };
  }


  trackScolling = () => {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
       //show loading spinner and make fetch request to api
       let newOffset = this.state.offset + ITEM_LIMIT
       axios.get(`http://api.giphy.com/v1/gifs/trending?offset=${newOffset}&limit=${ITEM_LIMIT}&api_key=${API_KEY}`)
       .then( (response) => {
         // handle success
         this.setState( prevState => {
           return{
             gifs: prevState.gifs.concat(response.data.data),
             offset: newOffset,
             loading: false
          }
         });
         console.log('Response:', response);
       })
       .catch(function (error) {
         // handle error
         console.log('Error:', error);
       })
     }
   }


  performSearch = query =>{
    console.log('performSearch');
    window.scrollTo(0, 0);
    axios.get(`http://api.giphy.com/v1/gifs/search?q=${query}&limit=${ITEM_LIMIT}&api_key=${API_KEY}`)
    .then( (response) => {
      // handle success
      this.setState({
        gifs: response.data.data,
        loading: false
      });
      console.log('Response:', response);
    })
    .catch(function (error) {
      // handle error
      console.log('Error:', error);
    })
  }


  trendingSearch = () => {
    axios.get(`http://api.giphy.com/v1/gifs/trending?limit=${ITEM_LIMIT}&api_key=${API_KEY}`)
    .then( (response) => {
      // handle success
      this.setState({
        gifs: response.data.data,
        loading: false
      });
      console.log('Response:',this.state.gifs);
    })
    .catch(function (error) {
      // handle error
      console.log('Error:', error);
    })
  }


  componentDidMount(){
    this.trendingSearch();
    window.addEventListener('scroll', this.trackScolling);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.trackScolling);
  }

  render(){
    return (
      <div className="App" onScroll={this.handleScroll}>
        <Header performSearch ={this.performSearch}/>
        {
          (this.state.loading) ? <Loading/> : <Body gifs={this.state.gifs} />
        }
      </div>
    );
  }
}

export default App;
