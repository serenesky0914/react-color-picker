import './App.css';

import React from 'react';
// import PickColor from './components/main/PickColor';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; 
import Swatches from './components/swatches/Swatches';
import PickColor from './components/main/PickColor';

const state = {
  primaryColor: '#194D33',
}

function handleChangeComplete(data) {
  console.log(data);
  if (data.hsl !== state) {
    this.setState(data.hsl)
  }

  this.props.onChange && this.props.onChange(data.hex)
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2 className='title'>
          Color <span>Picker</span> App.
        </h2>
      </header>
      <div className="App container">
       
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-sm-4">
                <Swatches
                  color={ state }
                  onChangeComplete={ handleChangeComplete }
                />
              </div>
              <div className="col-sm-8 pb-2">
                <div className='color-board'>
                  sdfsdf
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
