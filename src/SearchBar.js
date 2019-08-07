import React from 'react'
import { tsPropertySignature } from '@babel/types';


function SearchBar(props){

        return(
            <div className="ui two item menu">
                <h4 class="item">Natural Healing Directory</h4>

                <div className="ui large icon input">
                    <i class="search icon"></i>
                    <input onChange = {props.handleSearch }name="search" type="text" placeholder="Search..."/>
                </div>
            </div>
        )
}


export default SearchBar;