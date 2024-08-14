// You can add any additional JavaScript here
// For example, you might want to add event listeners or other functionality
document.addEventListener('DOMContentLoaded', function() {
    console.log('VR Scene loaded');
});

const video = document.querySelector('#360-video');
const playButton = document.querySelector('#playButton');

playButton.addEventListener('click', function() {
  video.play();
  playButton.style.display = 'none';
});