import React, { Component } from 'react';
import './App.css';
import './components/form-validation/form';
import './components/calculator/calculator';
import Form from './components/form-validation/form';
import Calculator from './components/calculator/calculator';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ishow: 'true'
    }

  }
  render() {
    let isShow = this.state.ishow;
    return (
      <div>
        <div className="page-wrapper bg-red p-t-180 p-b-100 font-robo">
          <div className="wrapper wrapper--w960">
            <div className="p-t-30 custom-button">
              <button className="btn btn-resg btn--radius btn--green" value="submit" type="submit">Regestration</button>
              <button className="btn btn--radius btn--green" value="submit" type="submit">Calculator</button>
            </div>
            <div className="card card-2">
              <div className="card-heading"></div>
              <Form isShow={isShow} />
              <Calculator />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;