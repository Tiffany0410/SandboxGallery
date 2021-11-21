/* JS Libraries */
"use strict";
console.log('SCRIPT: Creating and loading Sandbox Gallery  JS library')

// photo = {
//     photoName: {photoPath, caption, time}
// }
function GalleryGenerator(photos, template) {
    this.numPhoto = photos.length
    this.template = template
    this.photos = photos
}

GalleryGenerator.prototype = {

    makeGallery: function() {
        const gallery = document.createElement('div');
        gallery.id = "sandboxgallery";
        gallery.style.cssText = 'width:40px; height: 40px; background-color: Aqua;';
        
        const body = $('body');
		body.append(gallery);
    },

    // parameter = array of image?
    setImage: function() {

    },
    
    // parameter = image: (imageName, imagePath, caption)
    addImage: function() {

    },

    // parameter = image: (imageName)
    deleteImage: function() {

    },

    // parameter = image: (imageName, newcaption, time)
    editPhoto: function() {

    },

    // parameter = templateName
    changeTemplate: function() {

    },

    showTemplate: function() {
        const gallery = document.getElementById('sandboxgallery');
        if (gallery) {
            gallery.style = 'display: block';
        }
    },

    // Set style to template 1
    template1: function() {

    }
}