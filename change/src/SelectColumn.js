import React, {useState} from 'react';

const Select = () => {
    const [selected, setSelected] = useState('');

    const changeSelectOptionHandler = (event) => {
        setSelected(event.target.value);
      };
    
      
      if(selected == 'Vertical'){
        document.querySelector('.container').classList.remove('d-flex');
      } else if (selected == 'Horizontal'){
        document.querySelector('.container').classList.add('d-flex');
      }

  return (
    <div className='d-flex'>
        <h4 className='me-4'>Select View</h4>
        <select onChange={changeSelectOptionHandler}>
            <option>Horizontal</option>
            <option>Vertical</option>
        </select>
    </div>
  )
}

export default Select;
