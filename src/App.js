import React, { Component } from 'react'
import Person from './components/person';



export default class App extends Component {
   constructor(props){
    super(props)
    this.state={show:false}
   }
   handleclick=()=>this.setState({show:!this.state.show})
  render() {
    return (
      <div>
        <h2>check point state</h2>
        <button onClick={this.handleclick}>show/hide </button>
        {this.state.show ? <Person/> : null}

      </div>
    )
  }
}

