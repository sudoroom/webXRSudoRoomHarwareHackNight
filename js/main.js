// You can add any additional JavaScript here
// For example, you might want to add event listeners or other functionality
document.addEventListener('DOMContentLoaded', function() {
    const skybox = document.querySelector('#skybox');
    const portal1 = document.querySelector('#portal1');
    const portal2 = document.querySelector('#portal2');
    const portal3 = document.querySelector('#portal3');
    const textEntity = document.querySelector('a-text[value="SudoRoom & Fix-It Clinic"]');

    const skyboxTextures = ['#skyTexture1', '#skyTexture2', '#skyTexture3'];
    let currentTextureIndex = 0;

    function changeScene(nextTextureIndex) {
        currentTextureIndex = nextTextureIndex;
        skybox.setAttribute('src', skyboxTextures[currentTextureIndex]);
        
        // Update portal visibility
        portal1.setAttribute('visible', currentTextureIndex === 0);
        portal2.setAttribute('visible', currentTextureIndex === 1);
        portal3.setAttribute('visible', currentTextureIndex === 2);

        // Update text content based on the current scene
        if (currentTextureIndex === 1) {
        textEntity.setAttribute('value', "Math and Art SudoRoom Visits SF Moma with Noisebridge");
        textEntity.setAttribute('width', 8); // Increase width to accommodate longer text
        textEntity.setAttribute('position', '-4 1 -1.5'); // Adjust position if needed
        } else {
            textEntity.setAttribute('value', "SudoRoom & Fix-It Clinic");
            textEntity.setAttribute('width', 6); // Reset to original width
            textEntity.setAttribute('position', '-2.5 1 -1.5'); // Reset to original position
        }
    }

    function setupPortalListener(portal, nextTextureIndex) {
        portal.addEventListener('click', () => changeScene(nextTextureIndex));
    }

    // Set up portal listeners
    setupPortalListener(portal1, 1); // First portal takes us to skyTexture2
    setupPortalListener(portal2, 2); // Second portal takes us to skyTexture3
    setupPortalListener(portal3, 1); // Third portal takes us back to skyTexture2

    // Log to console when scene is loaded
    console.log('VR Scene loaded');
});

const video = document.querySelector('#360-video');
const playButton = document.querySelector('#playButton');

playButton.addEventListener('click', function() {
  video.play();
  playButton.style.display = 'none';
});