import React, { useState } from 'react';
import VBox from './components/VBox';

function App() {
  const [isCameraOn, setCameraOn] = useState(false);

  const toggleCamera = () => {
    setCameraOn(!isCameraOn);
  };

  return (
    <div className='container w-100 d-flex-col justify-content-center align-items-center'>
      <button onClick={toggleCamera}>
        {isCameraOn ? 'Turn Off Camera' : 'Turn On Camera'}
      </button>
      <VBox cameraOn={isCameraOn} />
    </div>
  );
}

export default App;
