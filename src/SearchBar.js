import React from 'react'

class SearchBar extends React.Component{

    componentDidUpdate(){
        console.log("search bar updated? ")
    }

    render(){
        return(
            <div className="ui three item menu">

                <div class="item" >
                    <h3>
                        <a>Natural Healing Directory</a>
                    </h3>
                </div>

                <div class="item" >
                    <h3>
                        <a>Add Healer</a>
                    </h3>
                </div>

                <div className="ui large icon input">
                    <i class="search icon"></i>
                    <input onChange = {this.props.handleSearch }name="search" type="text" placeholder="Search..."/>
                </div>
            </div>
        )
    }
}


export default SearchBar;