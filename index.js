let camera = document.getElementById('cameraFeed');
navigator.mediaDevices.getUserMedia({ video: true })
    .then(stream => {
        camera.srcObject = stream;
    })
    .catch(error => {
        console.error('Error accessing the camera:', error);
    });
