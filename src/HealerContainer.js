import React from 'react'
import HealerCard from './HealerCard'

function HealerContainer(props){

        return(
            <div className="ui two column centered grid">  {props.healers.map(healer=> <div className="five wide column"><HealerCard healer={healer}/> </div>)}
            </div>
        )

    }



export default HealerContainer;