let camera = document.getElementById('cameraFeed');
let toggle = false;

document.getElementById('callbtn').onclick = () => {
    toggle = !toggle; // Toggle the flag
    if (toggle) {
        // Turn on the camera
        navigator.mediaDevices.getUserMedia({ video: true })
            .then(stream => {
                camera.srcObject = stream;
            })
            .catch(error => {
                console.error('Error accessing the camera:', error);
            });
    } else {
        // Turn off the camera
        const stream = camera.srcObject;
        if (stream) {
            const tracks = stream.getTracks();
            tracks.forEach(track => track.stop());
            camera.srcObject = null;
        }
    }
    alert("Call toggled!");
};
