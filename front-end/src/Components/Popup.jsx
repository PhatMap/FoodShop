import React, {useState} from 'react'

const Popup = () => {

  const [popup, setPopup] = useState(false);

  const togglePopup = () => {
    setPopup(!popup);
  }

  return (
    <div>
      <button onClick={togglePopup}>Manage</button>
      {popup && 
        <div className='popup'>
         <div className='popup-inner'>
           <button className='close-btn' onClick={togglePopup}>Close</button>
         </div>
        </div>
      }
    </div>   
  )
}

export default Popup