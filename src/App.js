import React, { Component}from 'react';
import './App.css';

class App extends Component {

  constructor(){

    super();

    this.state = {

      data:
      [
        {
            "name":"Abhishek"
        },

        {
          "name":"Rohan"
        },

        {
          "name":"Ajay"
        }
      ]
    } 
  }
  render(){

    return (

      <div>
        <StudentName/>
        <ul>
          {this.state.data.map((item) => <List data = {item}/>)}
          </ul>
      </div>

    )
  }

}


class StudentName extends React.Component {

    render(){

      return (

        <div>
          <h1> Student Name Details</h1>
        </div>
      )
    }


}

class List extends React.Component {

  render(){

    return (
      // UL -> STANDS FOR  unordered List.
      <ul>
        <li>{this.props.data.name} </li>
      </ul>
    )
  }

}

export default App;
