import React, { Component } from 'react';

class Classcomponentfunctiondeclaration extends Component {
 handleClick() {
        console.log('click happened');
    }
    render() {
        return (
            <div>
                <h2>Class component function declaration</h2>
                <input type='button' onClick={this.handleClick} value='Click'></input>
            </div>

        )
    }
}
export default Classcomponentfunctiondeclaration;
