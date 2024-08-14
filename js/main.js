document.addEventListener('DOMContentLoaded', function() {
    const skybox = document.querySelector('#skybox');
    const portal1 = document.querySelector('#portal1');
    const portal2 = document.querySelector('#portal2');
    const cursor = document.querySelector('[cursor]');

    const skyboxTextures = ['#skyTexture1', '#skyTexture2', '#skyTexture3'];
    let currentTextureIndex = 0;

    function changeScene(portalElement) {
        currentTextureIndex = (currentTextureIndex + 1) % skyboxTextures.length;
        skybox.setAttribute('src', skyboxTextures[currentTextureIndex]);
        
        // Toggle visibility of portals
        portal1.setAttribute('visible', !portal1.getAttribute('visible'));
        portal2.setAttribute('visible', !portal2.getAttribute('visible'));
    }

    function handleGaze(event) {
        const gazedElement = event.detail.intersectedEl;
        if (gazedElement.classList.contains('portal')) {
            changeScene(gazedElement);
        }
    }

    cursor.addEventListener('fusing', handleGaze);
});