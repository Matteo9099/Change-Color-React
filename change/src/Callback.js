import React, {useState} from 'react';

const Callback = ({getColor}) => {

    const [activeColor, setActiveColor] = useState(null);

    const handleChange = (e) => {
        const {value} = e.target;
        setActiveColor(value);
        getColor(value);
    };


    const input = document.querySelector('.input_type');
        if(activeColor == 'black' || activeColor == '#000'){
            input.classList.add('text-white');
        }
  return (
    <>
        <input
            type="text"
            className="input_type"
            onChange={handleChange}
            value={activeColor}
            placeholder="Scegli colore"
        />
    </>
  )
}

export default Callback;
