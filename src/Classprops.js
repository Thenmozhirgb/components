import React, {Component} from 'react';
 
class Classprops extends Component {
  render() {
    const data = 'Hello class Component!';
    return(
     
      <Child Value={data} />
    )
  }
}
 class Child extends Component{
  render(){
    return(
     <h1> {this.props.value} </h1>
    )
  }
} 
  
 
export default Classprops;
