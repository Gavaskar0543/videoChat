import React, { useEffect, useRef } from 'react';

function VBox({ cameraOn }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        videoRef.current.srcObject = stream;
      } catch (error) {
        console.error('Error accessing the camera:', error);
      }
    };

    const stopCamera = () => {
      const stream = videoRef.current.srcObject;
      if (stream) {
        const tracks = stream.getTracks();
        tracks.forEach((track) => track.stop());
        videoRef.current.srcObject = null;
      }
    };

    if (cameraOn) {
      startCamera();
    } else {
      stopCamera();
    }
  }, [cameraOn]);

  return (
    <div className="container border border-2 w-75 h-50 d-flex align-items-center justify-content-center">
      <video ref={videoRef} autoPlay={true} />
    </div>
  );
}

export default VBox;
