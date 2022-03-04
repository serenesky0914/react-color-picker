import './App.css';
import React from 'react';
import { SwatchesPicker } from 'react-color';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2 className='title'>
          Color <span>Picker</span> App.
        </h2>
      </header>
      <div className="App container">
        <div class="card">
          <div class="card-body">
            <SwatchesPicker />  
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
