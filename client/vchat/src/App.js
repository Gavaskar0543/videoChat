import React, { useState } from 'react';
import VBox from './components/VBox';
import chatContext from './Provider/contex';

function App() {
  const [isCameraOn, setCameraOn] = useState(false);

  const toggleCamera = () => {
    setCameraOn(!isCameraOn);
  };

  return (
    <div className='container w-100 d-flex justify-content-center align-items-center'>
      <button className={`btn ${isCameraOn ? 'btn-outline-danger' : 'btn-outline-success'}`} onClick={toggleCamera}>
        {isCameraOn ? 'Turn Off Camera' : 'Turn On Camera'}
      </button>
     <chatContext.Provider value={isCameraOn}>
       <VBox/>
      </chatContext.Provider>
    </div>
  );
}

export default App;
