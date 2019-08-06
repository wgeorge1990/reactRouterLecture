import React from 'react'


function SearchBar(){

        return(
            <div className="ui two item menu">
                <h4 class="item">Natural Healing Directory</h4>

                <div className="ui large icon input">
                    <i class="search icon"></i>
                    <input name="search" type="text" placeholder="Search..."/>
                </div>
            </div>
        )
}


export default SearchBar;