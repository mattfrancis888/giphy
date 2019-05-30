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
      loading:true,
      searchFilter: null
    };
  }

  trackScrolling = (e, query = '') => {
    const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
    const body = document.body;
    const html = document.documentElement;
    const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
    const windowBottom = windowHeight + window.pageYOffset;
    {/* Scroll to bottom feautre retrieved from: https://gist.github.com/enqtran/25c6b222a73dc497cc3a64c090fb6700*/}
    let newOffset = this.state.offset + ITEM_LIMIT;
    let link;
    if (query != ''){
      console.log('searchFilter');
      link = `http://api.giphy.com/v1/gifs/search?q=${query}&offset=${newOffset}&limit=${ITEM_LIMIT}&api_key=${API_KEY}`;
    } else {
      link = `http://api.giphy.com/v1/gifs/trending?offset=${newOffset}&limit=${ITEM_LIMIT}&api_key=${API_KEY}`;
    }
    if (windowBottom >= docHeight) {
       let newOffset = this.state.offset + ITEM_LIMIT
       axios.get(link)
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
    window.scrollTo(0, 0);
    axios.get(`http://api.giphy.com/v1/gifs/search?q=${query}&limit=${ITEM_LIMIT}&api_key=${API_KEY}`)
    .then( (response) => {
      // handle success
      this.setState({
        gifs: response.data.data,
        loading: false,
        searchFilter: query
      });
      console.log('Response:', response);
      window.removeEventListener('scroll', this.trackScrolling);
      window.addEventListener('scroll', (e) => this.trackScrolling(e, this.state.searchFilter));
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
    window.addEventListener('scroll', this.trackScrolling);
  }

  componentWillUnmount() {
    if(this.state.searchFilter != null){
      window.removeEventListener('scroll', this.trackScrolling)
    }
    else{
      window.removeEventListener('scroll', (e) => this.trackScrolling(e, this.state.searchFilter));
    }
  }

  render(){
    return (
      <div className="App">
        <Header performSearch ={this.performSearch}/>
        {
          (this.state.loading) ? <Loading/> : <Body gifs={this.state.gifs} />
        }
      </div>
    );
  }
}

export default App;
