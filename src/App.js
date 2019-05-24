import React, {Component} from 'react';
import Header from './components/Header.js';
import Body from './components/Body.js';

class App extends Component {

  render(){
    return (
      <div className="App">
        <Header/>
        <Body/>
      </div>
    );
  }
}

export default App;
