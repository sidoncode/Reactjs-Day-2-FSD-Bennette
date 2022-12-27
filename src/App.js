import React, { Component}from 'react';
import './App.css';
import {FirstComponent} from './myComponents/FirstComponent';
class App extends Component {
  // functional Components // 
  // Here in This Example We have Imported the - Functional Component - That is the
  // Named - First and Second

  render() {

    return(
      <div>
        <First/>
        <Second/>
        <FirstComponent />
      </div>
    )
  }
}

class First extends React.Component {
  render(){
    return(
      <div>
        <h1>First Component</h1>
      </div>
    )
  }

}

class Second extends React.Component {
  render(){
    return(
      <div>
      <h1>Second Component</h1>
    </div>
    )

  }

}
// we will be discussing more on HOC - Higer Order Component
export default App;


  /*constructor(){

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

}*/

