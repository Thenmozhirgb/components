import React, { Component } from 'react';

export class Classlifecyclemethod extends Component {

    constructor(props) {
        super(props)
        this.state = { Data: "Thenmozhi" }
    }

    static getDerivedStateFromProps(props, state) {
        return {Data: props.nameFromParent} 
      }
    
    render() {
        return (
            <div>
                <h1> Hello {this.state.Data}</h1>
                

            </div>
        )
    }
}

 

export default class Staticmethod extends Component{
    render(){
        return(
            <div>
                <Classlifecyclemethod nameFromParent= "This is staticgetDerivedStateFromProps"/>
            </div>
        )
    }
}



