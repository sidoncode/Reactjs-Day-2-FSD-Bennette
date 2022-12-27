import React, { Component}from 'react';
import './App.css';

class App extends Component {

  constructor(){

    super();

    this.state = {

      data:
      [
        {

        },

        {

        },

        {

        }
      ]
    } 
  }
  render(){

    return (

      <div>


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
        <li> </li>
      </ul>
    )
  }

}

export default App;
