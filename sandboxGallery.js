/* JS Libraries */
"use strict";
console.log('SCRIPT: Creating and loading Sandbox Gallery  JS library')

// photo = {
//     photoName: {photoPath, caption, time}
// }
function GalleryGenerator(template, caption, date) {
    this.photos = []
    this.template = template
    this.caption = caption
    this.date = date
}

GalleryGenerator.prototype = {

    makeGallery: function(photoList) {
        const gallery = document.createElement('div');
        gallery.id = 'sandboxgallery';
        // gallery.style.cssText = 'width: 100%; display: flex; justify-content: space-between; flex-wrap: wrap; margin-left: 1.5%;';
        // gallery.style.cssText = 'width: 800px; display: flex; justify-content: space-between; flex-wrap: wrap; margin-left: auto; margin-right: auto;';

        const body = $('body');
		body.append(gallery);
        this.setImage(photoList);
        if (this.caption) {
            this.showCaption();
        }
        if (this.date) {
            this.showDate();
        }
        this.setTemplate(this.template);
    },

    setImage: function(photoList) {
        this.photos = photoList;
        const gallery = document.getElementById('sandboxgallery');
        gallery.querySelectorAll('*').forEach(n => n.remove());
        this.photos.map(photo => {
            const div = document.createElement('div');
            const img = document.createElement('img');
            div.id = photo.name;
            img.id = photo.name + '_img';
            img.src = photo.path;
            div.style.cssText = 'width: 350px; height: 350px'
            img.style.cssText = 'width: 350px';
            gallery.appendChild(div);
            div.append(img);
        });
    },

    showCaption: function() {
        this.photos.map(photo => {
            const img_div = document.getElementById(photo.name);
            const caption = document.createElement('span');
            caption.innerHTML = photo.caption;
            caption.id = photo.name + '_caption';
            img_div.append(caption);
        });
    },

    showDate: function() {
        this.photos.map(photo => {
            const img_div = document.getElementById(photo.name);
            const date = document.createElement('span');
            date.innerHTML = photo.date;
            date.id = photo.name + '_date';
            img_div.append(date);
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
    setTemplate: function(templateName) {
        this.templates = templateName;
        if (templateName === 'mosaic') {
            this.templateMosaic();
        }
        else if (templateName === 'grid') {
            this.templateGrid();
        }
        else if (templateName === 'monsonry') {
            this.templateMansonry();
        }
        else {
            this.templateDefault();
        }
    },

    showTemplate: function() {
        const gallery = document.getElementById('sandboxgallery');
        if (gallery) {
            gallery.style = 'display: block';
        }
    },

    templateDefault: function() {
        const gallery = document.getElementById('sandboxgallery');
        gallery.style.cssText = 'width: 800px; display: flex; justify-content: space-between; flex-wrap: wrap; margin-left: auto; margin-right: auto;';

        this.photos.map(photo => {
            const div = document.getElementById(photo.name);
            const img = document.getElementById(photo.name + '_img');
            const caption = document.getElementById(photo.name + '_caption');
            const date = document.getElementById(photo.name + '_date');
            // if (div) {
            //     div.style.cssText = 'background-color: pink;'
            // }
            if (img) {
                img.style.cssText = 'width: 350px; border-radius: 10%;'
            }
            if (caption) {
                caption.style.cssText = 'display: block; width: 100%; color: gray; letter-spacing: 1px; text-align: right; font-size: 15px; font-weight: 400;';
            }
            if (date) {
                date.style.cssText = 'display: block; width: 100%; color: darkgray; letter-spacing: 1px; text-align: right; font-size: 10px; font-weight: 200;';
            }      
        })
        console.log('template default');
    },

    templateMosaic: function() {
        const gallery = document.getElementById('sandboxgallery');
        gallery.style.cssText = 'width: 100%; display: flex; justify-content: space-between; flex-wrap: wrap;';
        console.log('template mosaic');
    },

    templateGrid: function() {
        console.log('template grid');
    },

    templateMansonry: function() {
        console.log('template mansonry');
    }
}