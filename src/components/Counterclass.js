import React, { Component } from 'react'

export default class Counterclass extends Component {
    constructor (props){
        super(props)
        this.state={
            counter:0
        }
    }
  render() {
    return (
      <div>Counterclass
        <h3>you clicked {this.state.counter}  times</h3>
        <button onClick={()=>
        this.setState({
            counter:this.state.counter+1
        })}>clickme</button>
      </div>
    )
  }
}
