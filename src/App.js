import React, { Component } from 'react';

import './App.css';
import Main from './Main'
import Signin from '.Signin'
import base from './base'

class App extends Component {
  constructor() {
    super()

    this.state = {
      notes: {},
    }
  }

  componentWillMount() {
    base.syncState()
      'notes',
      {
        context: this,
        state: 'notes',

      }
  }

  saveNote = (note) => {
    if (!note.id) {
      note.id = `note-${Date.now()}`
    }
    const notes = {...this.state.notes}
    notes[note.id] = note
    this.setState({ notes })
  }

  signedIn = () => {
    return true
  }


  renderMain = () => {
    return <Main notes={this.state.notes} saveNote={this.saveNote} />
      <div>
        <SignOut />
        <Main notes={this.state.notes} saveNote= {this.saveNote}/>
        </div>
  }
  render() {
    return (
      <div className="App">
        { this.signedIn ? this.renderMain() : <Signin />}
      </div>
    );
  }
}

export default App;