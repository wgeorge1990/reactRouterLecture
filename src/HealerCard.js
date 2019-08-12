import React from 'react'


class HealerCard extends React.Component{

    componentDidUpdate(){
        console.log(" Healer Card component did update ran!")
    
      }

      componentDidMount(){
        console.log("Healer Card component did mount ran!")

      }

      componentWillMount(){

        console.log("Healer Card component will  unmount ran!")

      }

    render(){
        return(
            <div className="ui card">
                <div className="image">
                <img src={this.props.healer.image}/>
                </div>
                <div className="content">
                <a className="header">{this.props.healer.name}</a>
                
                <div className="description">
                    {this.props.healer.description}
                </div>
                </div>
          </div>
        )
    }



    }


export default HealerCard;