import React, {Component} from 'react';

class Search extends Component {
  constructor(){
    super();
    this.searchRef = React.createRef();
  }

  submitSearch = e =>{
    e.preventDefault();
    this.props.performSearch(this.searchRef.current.value);
    this.searchRef.current.value = '';
  }

  render(){
    return (
      <div className="border p-2 bg-white">
        <form className="form-inline"  onSubmit={this.submitSearch}>
          <input className="form-control border-0"
              type="search"
              placeholder="Search..."
              aria-label="Search"
              name="search"
              ref={this.searchRef}
              />
          <svg className="search-icon-img" aria-labelledby="search-title"
          xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"
          onClick={this.submitSearch}>
            <title>Search</title>
            <path d="M4.08248,12.75007a6.93485,6.93485,0,0,1-2.12785-1.43759A6.65729,6.65729,0,0,1,.52014,9.20309,6.42066,6.42066,0,0,1,0,6.625,6.42494,6.42494,0,0,1,.52014,4.04681,6.68571,6.68571,0,0,1,4.08248.51563,6.57947,6.57947,0,0,1,6.68318,0,6.69587,6.69587,0,0,1,9.29931.51563a6.49882,6.49882,0,0,1,2.12785,1.4218,7.0382,7.0382,0,0,1,1.43449,2.10939A6.2715,6.2715,0,0,1,13.39771,6.625a6.26733,6.26733,0,0,1-.53607,2.57814,7.01967,7.01967,0,0,1-1.43449,2.10939,6.69362,6.69362,0,0,1-2.12785,1.43759,6.51767,6.51767,0,0,1-2.61613.53117A6.40481,6.40481,0,0,1,4.08248,12.75007ZM2.69527,2.67189A5.3642,5.3642,0,0,0,1.04028,6.625a5.364,5.364,0,0,0,1.655,3.95331A5.45975,5.45975,0,0,0,6.68318,12.2189a5.45863,5.45863,0,0,0,3.98741-1.64063,5.364,5.364,0,0,0,1.655-3.95331,5.3642,5.3642,0,0,0-1.655-3.95306A5.45863,5.45863,0,0,0,6.68318,1.03126,5.45975,5.45975,0,0,0,2.69527,2.67189ZM15.2732,15.95312A0.38035,0.38035,0,0,1,15.1,15.8125l-3.87741-4.37494a0.57509,0.57509,0,0,1-.12643-0.375,0.39187,0.39187,0,0,1,.18914-0.34367,0.49849,0.49849,0,0,1,.72521.03109l3.87741,4.37519a0.60748,0.60748,0,0,1,.1105.39054,0.56012,0.56012,0,0,1-.17371.35946,0.40354,0.40354,0,0,1-.15729.09375A0.61218,0.61218,0,0,1,15.47827,16,0.52423,0.52423,0,0,1,15.2732,15.95312Z"></path>
          </svg>
        </form>
      </div>
    );
  }
}

export default Search;
