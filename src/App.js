import React, { Component } from 'react';
import { Button, Icon, BottomNavigation, BottomNavigationAction   } from '@material-ui/core';
import logo from './logo.svg';
import List from './List';
import { Home, Face, Favorite } from '@material-ui/icons';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    }
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };
  render() {
    const { value } = this.state;
    return (
      <div className="App">
      {/*
        <header className="App-header">
          <Button  variant="contained" color="primary">hello</Button>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <Icon>home</Icon>
        <Button variant="contained" color="primary">hello</Button>
      */}
      <List/>
      <BottomNavigation
        value={value}
        onChange={this.handleChange}
        showLabels
        style={{position: 'fixed', bottom: '0', width: '100%'}}
        // className={classes.root}
      >
        <BottomNavigationAction
        label="home" icon={<Home />}
        />
        <BottomNavigationAction
        label="favorite" icon={<Favorite />}
        />
        <BottomNavigationAction
        label="me" icon={<Face />}
        />
      </BottomNavigation>
      </div>
    );
  }
}

export default App;
