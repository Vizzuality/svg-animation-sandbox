import React, { Component } from 'react';
import './App.css';
import lottie from 'lottie-web';

class App extends Component {
  componentDidMount() {
    lottie.loadAnimation({
      wrapper: this.wrapper,
      animType: 'svg',
      loop: true,
      path: './data.json'
    })
  }

  render() {
    return (
      <div className="App">
        <h3>
          Place your data.json file in the public folder and it will show below.
        </h3>
        <div ref={ref => this.wrapper = ref} id="svg-container"></div>
      </div>
    );
  }
}

export default App;
