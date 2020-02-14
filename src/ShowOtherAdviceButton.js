import React from 'react';

class ShowOtherAdviceButton extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};
    }
  
    render() {
      return (
        <div className="App">
        <button
          className="Advice-other-advice-button"
          onClick={this.props.onClick}
        >
          Show other advice
        </button>
      </div>
      );
    }
  }

export default ShowOtherAdviceButton;