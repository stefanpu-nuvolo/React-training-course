import React, { Component } from 'react';
import './App.css';
import UserOutput from './Components/UserOutput/UserOutput'

class App extends Component {
  state = {
    users: [
      { name: 'Stefan', age: 22, nationality: 'Bulgaria', id: 11 },
      { name: 'Georgi', age: 42, nationality: 'Bulgaria', id: 12 },
      { name: 'Niko', age: 39, nationality: 'Greece', id: 13 }
    ]
  }

  onNameChanged = (newName, userId) => {
    const usersCopy = [...this.state.users]

    const changedUserIndex = usersCopy.findIndex(u => userId === u.id);
    usersCopy[changedUserIndex].name = newName;

    this.setState(usersCopy);
  }

  render() {
    return (
      <div className="App">
        <ol>
          <li>Create TWO new components: UserInput and UserOutput</li>
          <li>UserInput should hold an input element, UserOutput two paragraphs</li>
          <li>Output multiple UserOutput components in the App component (any paragraph texts of your choice)</li>
          <li>Pass a username (of your choice) to UserOutput via props and display it there</li>
          <li>Add state to the App component (=> the username) and pass the username to the UserOutput component</li>
          <li>Add a method to manipulate the state (=> an event-handler method)</li>
          <li>Pass the event-handler method reference to the UserInput component and bind it to the input-change event</li>
          <li>Ensure that the new input entered by the user overwrites the old username passed to UserOutput</li>
          <li>Add two-way-binding to your input (in UserInput) to also display the starting username</li>
          <li>Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets</li>
        </ol>

        <div>
          Solution:
          <div>
            {this.state.users.map((u, i) => {
              return (
                <React.Fragment key={i}>
                  <UserOutput user={u}
                    onNameChanged={this.onNameChanged} />
                  <br />
                </React.Fragment>
              )
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
