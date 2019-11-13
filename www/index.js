function byId(id) { return document.getElementById(id); }
function webCam(video) {
  navigator.mediaDevices.getUserMedia({audio: true, video: { facingMode: "user" }}).then(stream => {
    video.srcObject = null;
    video.srcObject = window.localStream = stream;
    video.onloadedmetadata = function(e) { e.srcElement.play(); }
  });
}
