import React, { Component}from 'react';
class App extends Component {

  render(){

    return (
      <div>
          <h1> Welcome to {this.props.name}</h1>
      </div>

    )
  }


}
export default App;

  /*
  constructor(){
    // to set the state, it is required to call the super() method in the constructor, it is because,
    // this.state is unintialized before the super() method has been called.
    super();
    this.state = {displayBIO: false};
    console.log('Component this',this);
    // this is where we have intialized a new state //
    this.toggleDisplayBio = this.toggleDisplayBio.bind(this);
  }
  toggleDisplayBio(){
    this.setState(
      {displayBIO: !this.state.displayBIO}
    )
  }

  render(){
    return (
      <div>
          <h1>
            Welcome to the State Changing Excercise
            {
              this.state.displayBIO ? (
                <div>
                    <p>
                        <h4>
                          This is the Content Which will be Available When we have - Clicked on the Button - Named
                          as Read More...
                        </h4>
                    </p>
                </div>
              ):
               (
                  <div>
                    <button onClick={this.toggleDisplayBio}>Read More</button>
                  </div>
              )
            }
          </h1>
      </div>
    )
  }
}
export default App;
*/

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

