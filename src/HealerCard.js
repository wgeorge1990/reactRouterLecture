import React from 'react'


class HealerCard extends React.Component{

    constructor(){
        super()
        this.state = {

            name: "Patrica",
            description: "Reiki Specialist",
            image: "randomsrc.jpg"
        }
    }

    render(){
        return(
        <div>

            <img class= "hey" src= {this.state.image} />
            <h1> {this.state.name} </h1>
            <p> {this.state.description}</p>

        </div>
        )



    }


}

export default HealerCard;