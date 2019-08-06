import React from 'react';
import HealerContainer from './HealerContainer';
import SearchBar from './SearchBar';
import healers from './healer-data.js'


class App extends React.Component {

  constructor(){
    super()
    this.state = {
        healers : healers
      }
  }

  render(){
    return (
      <div className="App">
        <SearchBar /> 
        <HealerContainer healers = {this.state.healers}/> 
      </div>
    );
  }


}


export default App;
