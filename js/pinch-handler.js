AFRAME.registerComponent('pinch-handler', {
    init: function() {
        this.skyboxEl = document.querySelector('#skybox');
        this.skyboxTextures = ['#skyTexture1', '#skyTexture2', '#skyTexture3'];
        this.currentTextureIndex = 0;
        
        this.el.sceneEl.addEventListener('enter-vr', () => {
            const session = this.el.sceneEl.xrSession;
            if (session) {
                this.setupEventListeners(session);
            }
        });
    },
    
    setupEventListeners: function(session) {
        session.addEventListener('select', this.onSelect.bind(this));
    },
    
    onSelect: function(event) {
        if (event.inputSource.targetRayMode === 'transient-pointer') {
            this.changeSkybox();
        }
    },
    
    changeSkybox: function() {
        this.currentTextureIndex = (this.currentTextureIndex + 1) % this.skyboxTextures.length;
        const newTexture = this.skyboxTextures[this.currentTextureIndex];
        this.skyboxEl.setAttribute('src', newTexture);
    }
});