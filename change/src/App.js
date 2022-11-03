import React, {useState} from 'react';
import './App.css';
import Callback from './Callback';
import Navbar from './header/header';
import Select from './SelectColumn';

function App() {
  const [UIcolor, setUIcolor] = useState(null);
  const [UXcolor, setUXcolor] = useState(null);
  const [UScolor, setUScolor] = useState(null);

  const getColorA = (color) => {
    setUIcolor(color);
  };
  const getColorB = (color) => {
    setUXcolor(color);
  };
  const getColorC = (color) => {
    setUScolor(color);
  };


  return (
    <div className="App">
      <Navbar />
      <section className='d-flex flex-column align-items-center'>
          <div className='select_col mb-5'>
              <Select />
          </div>
          <div className='container d-flex'>
            <div className='color_container' style={{ background: `${UIcolor}` }}>
              <Callback getColor={getColorA} />
            </div>
            <div className='color_container' style={{ background: `${UXcolor}` }}>
              <Callback getColor={getColorB} />
            </div>
            <div className='color_container' style={{ background: `${UScolor}` }}> 
              <Callback getColor={getColorC} />
            </div>
          </div>
      </section>
    </div>
  );
}

export default App;
