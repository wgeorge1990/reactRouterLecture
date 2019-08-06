import React from 'react'


function HealerCard(props){

        return(
            <div className="ui card">
                <div className="image">
                <img src={props.healer.image}/>
                </div>
                <div className="content">
                <a className="header">{props.healer.name}</a>
                
                <div className="description">
                    {props.healer.description}
                </div>
                </div>
              
          </div>
        )



    }


export default HealerCard;