import React, { Component } from 'react'

export default class person extends Component {
    constructor(props){
        super(props)
        this.Person={
            Fullname:"omar",
            bio:"fullstack web",
            profession:'developper',
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm867dYtFueB_ladMNmJib7WDYnpcge3HvZQ&s"
        }
        this.state={count:0};
        }
        componentDidMount(){
            setInterval(()=>{
                this.setState(prevstate=>({
                    count:prevstate.count+1
                }))
            },10)
        }
    render() {
    return (
      <div>
        <h2>{this.Person.Fullname}</h2>
        <h2>{this.Person.bio}</h2>
        <h2>{this.Person.profession}</h2>
        <img src={this.Person.image} alt='developper'/>
        <h2>{this.state.count}</h2>
    </div>
    )
  }
}
