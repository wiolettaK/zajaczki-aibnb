import React, { useState } from 'react';
import "./home.scss";

class clickCounter extends React.Component<{}, { adults: number; children: number}> {
  constructor(props) {
    super(props);
    this.state = {adults: 0, children: 0};
    this.buttonClickedAdults = this.buttonClickedAdults.bind(this);
    this.buttonClickedChildren = this.buttonClickedChildren.bind(this);
  }
  
  buttonClickedAdults(event) {
    this.setState({adults: this.state.adults+1});
  }
  buttonClickedChildren(event) {
    this.setState({children: this.state.children+1});
  }

  render() {
    return (
      <div className="couter-flex">
        <div>
          <div>Dorośli
            <div>Od 3 lat</div>
          </div>
          <div>Dzieci
            <div>Od 0 do 3 lat</div>
          </div>
        </div>
        <div>
          <div>
            <button className="button-clik-counter" onClick={this.buttonClickedAdults}>+</button>
            {this.state.adults}
            <button className="button-clik-counter" onClick={this.buttonClickedAdults}>-</button>
          </div>
          <div>
            <button className="button-clik-counter" onClick={this.buttonClickedChildren}>+</button>
            {this.state.children}
            <button className="button-clik-counter">-</button>
          </div>
        </div>
      </div>
    );
  }
}

export default clickCounter