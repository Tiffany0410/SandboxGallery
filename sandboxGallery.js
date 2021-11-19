/* JS Libraries */
"use strict";
console.log('SCRIPT: Creating and loading Sandbox Gallery  JS library')

function GalleryGenerator() {
    this.numPhoto = 0
    this.templates = null
    this.photos = []
}

GalleryGenerator.prototype = {

    makeGallery: function() {
        const gallery = document.createElement('div');
        gallery.id = "sandboxgallery";
        gallery.style.cssText = 'display: none';
        
        const body = $('body');
		body.append(gallery);
    },

    
    // parameter = image: (imageName, imagePath, caption)
    addImage: function() {

    },

    // parameter = array of image?
    setImage: function() {

    },

    // parameter = image: (imageName, newcaption)
    updateCaption: function() {

    },

    // parameter = templateName
    setTemplate: function() {

    },

}