import React from 'react';
import HealerContainer from './HealerContainer'; 
import SearchBar from './SearchBar';
import NewHealerForm from './NewHealerForm'


class App extends React.Component {

  constructor(){
    super()
    this.state = {
        healers : [],
        searchTerm: ""
      }
  }

  componentDidMount(){
    //this is where I do my initial fetch
    console.log("App component did mount ran!")

    fetch('http://localhost:3000/healers')
    .then(res => res.json())
    .then(data => this.setState({healers:data}))

  }

  handleSearch = (e) => {
    //get the search term
    //set state to new search term
    this.setState({searchTerm: e.target.value})
  }

  addNewHealer = (newHealerObject) => {
    //be able to create a new healers array out of the previous one

    let newHealers = [...this.state.healers, newHealerObject]
    
    this.setState({healers: newHealers}, this.persistHealer(newHealerObject))

  }
  
  persistHealer(newObject){
    //fetch for POST 
    //try completing this part on your own!

  }

  filteredHealers(){
    //based of search term 
    //filter state to reflect search
    //return filtered array 
    return this.state.healers.filter(healer => healer.description.toLowerCase().includes(this.state.searchTerm))
  }

  componentDidUpdate(){
    console.log("App component did update ran!")
  }

  render(){
    return (
      <div className="App">
        <SearchBar handleSearch={this.handleSearch}/> 
        <NewHealerForm addNewHealer={this.addNewHealer}/>  
        <HealerContainer healers = {this.filteredHealers()}/> 
      </div>
    );
  }


}


export default App;
