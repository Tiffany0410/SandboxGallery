/* JS Libraries */
"use strict";
console.log('SCRIPT: Creating and loading Sandbox Gallery  JS library')

function GalleryGenerator(template, caption, date) {
    this.photos = []
    this.template = template
    this.caption = caption
    this.date = date
}

GalleryGenerator.prototype = {

    makeGallery: function(photoList) {
        const gallery = document.createElement('div');
        const photos_container = document.createElement('div');
        photos_container.id = "photos_container";
        gallery.id = 'sandboxgallery';
        gallery.style.cssText = 'width: 100%; height: 100%; margin: auto;'

        // gallery.style.cssText = 'width: 100%; display: flex; justify-content: space-between; flex-wrap: wrap; margin-left: 1.5%;';
        // gallery.style.cssText = 'width: 800px; display: flex; justify-content: space-between; flex-wrap: wrap; margin-left: auto; margin-right: auto;';

        const body = $('body');
		body.append(gallery);
        gallery.append(photos_container);
        this.setImage(photoList);
        if (this.caption) {
            this.showCaption();
        }

        if (this.date) {
            this.showDate();
        }
        console.log(this.template);
        if (this.template === 'mosaic') {
            this.templateMosaic();
        }
        else if (this.template === 'grid') {
            this.templateGrid();
        }
        else if (this.template === 'monsonry') {
            this.templateMansonry();
        }
        else {
            this.templateDefault();
        }
    },

    setImage: function(photoList) {
        this.photos = photoList;
        const gallery = document.getElementById('sandboxgallery');
        const photos_container = gallery.children[0];
        photos_container.querySelectorAll('*').forEach(n => n.remove());
        this.photos.map(photo => {
            const div = document.createElement('div');
            const a_tag = document.createElement('a');
            const img = document.createElement('img');
            a_tag.href = photo.path;
            div.id = photo.name;
            img.id = photo.name + '_img';
            img.src = photo.path;
            div.style.cssText = 'width: 350px; height: 350px'
            img.style.cssText = 'width: 350px';
            photos_container.appendChild(div);
            a_tag.append(img);
            div.append(a_tag);
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
        this.template = templateName;
    },

    showTemplate: function() {
        const gallery = document.getElementById('sandboxgallery');
        if (gallery) {
            gallery.style = 'display: block';
        }
    },

    templateDefault: function() {
        const gallery = document.getElementById('sandboxgallery');
        const photos_container = gallery.children[0];
        photos_container.style.cssText = 'width: 100%; height: 500px; display: flex; justify-content: center; align-items: center';

        this.photos.map(photo => {
            const div = document.getElementById(photo.name);
            const img = document.getElementById(photo.name + '_img');
            const caption = document.getElementById(photo.name + '_caption');
            const date = document.getElementById(photo.name + '_date');
            if (div) {
                div.style.cssText = 'width: 200px; height: 200px;'
            }
            if (img) {
                img.style.cssText = 'width: 200px; height: 200px'
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
        const photos_container = gallery.children[0];
        photos_container.style.cssText = 'width: 100%; display: flex; flex-wrap: wrap;';
        console.log('template mosaic');
    },

    templateGrid: function() {
        const gallery = document.getElementById('sandboxgallery');
        const photos_container = gallery.children[0];
        photos_container.style.cssText = 'width: 800px; display: flex; justify-content: space-between; flex-wrap: wrap; margin-left: auto; margin-right: auto;';

        this.photos.map(photo => {
            const div = document.getElementById(photo.name);
            const img = document.getElementById(photo.name + '_img');
            const caption = document.getElementById(photo.name + '_caption');
            const date = document.getElementById(photo.name + '_date');
            if (div) {
                div.style.cssText = 'width: 350px; height: 350px;'
            }
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
        console.log('template grid');
    },

    templateMansonry: function() {
        console.log('template mansonry');
    }
}