import React, { Component } from 'react';
import Modal from './Modal';

class App extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <Counter/>
    );
  }
}
class Counter extends Component {

  state = {
    count: 0
  };
  handleClick = () => {
    this.setState({
      count: 0
    });
    
  };
  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  
    this.setState((prevState, { count }) => ({
      count: prevState.count + 1
    }));
  }
  closeModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });

  }

  render() {
    return (
      <div className="App">
        {this.state.count}
        <button onClick={this.toggleModal}>
          Open the modal
        </button>
        <br/><br/>
        <button onClick={this.handleClick}>Reset</button>
        <div className="App">
      </div>
        <Modal show={this.state.isOpen}
          onClose={this.closeModal} counter1={this.state.count}>
          NumerOfClicks# {this.state.count}
        </Modal>
      </div>

      );
  }
}
export default App;