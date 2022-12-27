import React, { Component}from 'react';
import './App.css';
class App extends Component {
  constructor(){
    // to set the state, it is required to call the super() method in the constructor, it is because,
    // this.state is unintialized before the super() method has been called.
    super();
    this.state = {displayBIO: true};
  }

  render(){
    const bio = this.state.displayBIO ? (
        <div>
            <p>
                <h3>
                  This is the Sample Code for Showing the Usage of States in ReactJS
                </h3>
            </p>
        </div>
    ):null;
    return (
      <div>
          <h1>Welcome to StateFull Component</h1>
          {bio}
      </div>
    )
  }
}
export default App;


  /*// functional Components // 
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

