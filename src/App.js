import React from 'react';
import HealerContainer from './HealerContainer';
import SearchBar from './SearchBar';
import healers from './healer-data.js'
import NewHealerForm from './NewHealerForm'
import { tsThisType } from '@babel/types';

class App extends React.Component {

  constructor(){
    super()
    this.state = {
        healers : healers,
        searchTerm: ""
      }
  }

  handleSearch= (e) => {
    console.log("e.target", e.target.value)
    //get the search term
    //set state to new search term

    this.setState({searchTerm: e.target.value})

  }

  handleSubmit = (e) => {
    //to finish for tomorrow's lecture
    this.state({})

  }

  filteredHealers(){

    //based of search term 
    //filter state to reflect search
    //return filtered array 
    return this.state.healers.filter(healer => healer.description.toLowerCase().includes(this.state.searchTerm))
  }



  render(){
    return (
      <div className="App">
        <SearchBar handleSearch={this.handleSearch}/> 
        <NewHealerForm />  
        <HealerContainer healers = {this.filteredHealers()}/> 
      </div>
    );
  }


}


export default App;
