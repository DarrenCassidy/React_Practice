import React from 'react';
import './App.css';
import pic from './images/building.jpg';


export class App extends React.Component {
  render () {
    return (
      <div>
        <h1>Hello</h1>
        <img
          src={pic}
          width="200px"
        />
      </div>
    );
  }
}


