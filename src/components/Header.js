import React, {Component} from 'react';
import Search from './Search.js';

class Header extends Component {
  render(){
    return (
      <header>
        <nav className="navbar navbar-light bg-light justify-content-md-around border-bottom fixed-top py-4">
          <a className="navbar-brand">GIPHY</a>
          <Search performSearch={this.props.performSearch}/>
        </nav>
       </header>
    );
  }
}

export default Header;
