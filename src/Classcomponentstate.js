import React, { Component } from 'react';

class Classcomponentstate extends Component {
  constructor(props) {
    super(props)
    this.state = { Data: "Thenmozhi" }
  }

  changeState() {
    this.setState({ Data: "Sundar" });
  }

  render() {
    return (
      <div>
        <h1> Hello {this.state.Data}</h1>
        <h2><a onClick={this.changeState.bind(this)} >Press Here!</a></h2>

      </div>
    )
  }

}

export default Classcomponentstate;