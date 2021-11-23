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
        gallery.id = 'sandboxgallery';
        gallery.style.cssText = 'width:40px; height: 40px; background-color: Aqua;';

        const body = $('body');
		body.append(gallery);
        this.setImage();
    },

    // parameter = array of image?
    setImage: function() {
        const gallery = document.getElementById('sandboxgallery');
        this.photos.map(photo => {
            const div = document.createElement('div');
            const img = document.createElement('img');
            div.id = photo.name;
            img.src = photo.path;
            div.style.cssText = 'width: 350px;'
            img.style.cssText = 'height: 350px';
            gallery.appendChild(div);
            div.append(img);
        });
    },

    showCaption: function() {
        this.photos.map(photo => {
            const img_div = document.getElementById(photo.name);
            const caption = document.createElement('span');
            caption.style.cssText = 'display: block; color: blue; width: 100%;'
            caption.innerHTML = photo.caption;
            img_div.append(caption);
            console.log(photo.caption);
        });
    },

    showDate: function() {
        this.photos.map(photo => {
            const img_div = document.getElementById(photo.name);
            const date = document.createElement('span');
            date.style.cssText = 'display: block; color: red; width: 100%;'
            date.innerHTML = photo.date;
            img_div.append(date);
            console.log(photo.date);
        });
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

    templateMosaic: function() {
        console.log('template mosaic');
    },

    templateGrid: function() {
        console.log('template grid');
    },

    templateMansonry: function() {
        console.log('template mansonry');
    }
}