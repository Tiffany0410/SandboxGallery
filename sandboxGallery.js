/* JS Libraries */
"use strict";
console.log('SCRIPT: Creating and loading Sandbox Gallery JS library')

/* 
    Generates a Gallery

    @param template: describes which template is in used {default, mosaic, grid, mansonry}
*/
function GalleryGenerator(template) {
    this.photos = []
    this.template = template
    this.caption = false
    this.date = false
}

GalleryGenerator.prototype = {

    /* 
        Modify DOM to show gallery according to template

        @param photoList: array of photos for gallery, photo has structure of {name, path, caption, date}
    */
    makeGallery: function(photoList) {
        const head = document.getElementsByTagName('HEAD')[0]; 
        const link = document.createElement('link');
        link.rel = 'stylesheet'; 
        link.type = 'text/css';
        link.href = 'sandboxGallery.css'; 
        head.appendChild(link); 

        const prev_gallery = document.getElementById('sandboxgallery');
        if (prev_gallery !== null) {
            prev_gallery.remove();
        }
        const gallery = document.createElement('div');
        const photos_container = document.createElement('div');
        photos_container.id = "photos_container";
        gallery.id = 'sandboxgallery';

        const modal = this.getModal();
        const body = $('body');
		body.append(gallery);
        gallery.append(photos_container);
        gallery.append(modal);
        
        if (this.template === 'mosaic') {
            this.caption = false;
            this.date = false;
            this.setImageMosaicMansonry(photoList);
            this.setCaptionorDate();
            this.templateMosaic();
        }
        else if (this.template === 'grid') {
            this.caption = true;
            this.date = true;
            this.setImageDefaultGrid(photoList);
            this.setCaptionorDate();
            this.templateGrid();
        }
        else if (this.template === 'mansonry') {
            this.caption = false;
            this.date = false;
            this.setImageMosaicMansonry(photoList);
            this.setCaptionorDate();
            this.templateMansonry();
        }
        else {
            this.caption = true;
            this.date = false;
            this.setImageDefaultGrid(photoList);
            this.setCaptionorDate();
            this.templateDefault();
        }
    },

    setCaptionorDate: function() {
        if (this.caption) {
            this.showCaption();
        }
        if (this.date) {
            this.showDate();
        }
    },

    setTemplate: function(templateName) {
        this.template = templateName;
    },

    /* 
        Add images to gallery for default / grid template
    */
    setImageDefaultGrid: function(photoList) {
        this.photos = photoList;
        const gallery = document.getElementById('sandboxgallery');

        const modal = document.getElementById('modal');
        var modal_img = document.getElementById('modal-img');
        var modal_caption = document.getElementById("modal-caption");

        const photos_container = gallery.children[0];
        photos_container.querySelectorAll('*').forEach(n => n.remove());
        this.photos.map(photo => {
            const div = document.createElement('div');
            const a_tag = document.createElement('a');
            const img = document.createElement('img');
            img.onclick = function() {
                console.log(modal);
                modal_img.src = photo.path;
                modal_caption.innerHTML = photo.caption;
                modal.style.cssText = 'display: block;'
            }
            div.id = photo.name;
            img.className = 'images-class';
            img.id = photo.name + '_img';
            img.src = photo.path;
            div.style.cssText = 'width: 350px; height: 350px'
            img.style.cssText = 'width: 350px';
            photos_container.appendChild(div);
            a_tag.append(img);
            div.append(a_tag);
        });
    },

    /* 
        Add images to gallery for mosaic / mansonry template
    */
    setImageMosaicMansonry: function(photoList) {
        this.photos = photoList;

        const gallery = document.getElementById('sandboxgallery');
        const photos_container = gallery.children[0];

        const modal = document.getElementById('modal');
        const modal_img = document.getElementById('modal-img');
        const modal_caption = document.getElementById("modal-caption");

        photos_container.querySelectorAll('*').forEach(n => n.remove());

        const container = document.createElement('div');
        if (this.template === 'mosaic') {
            container.className = 'image-mosaic';
        }
        else {
            container.className = 'image-mansonry';
        }

        photos_container.appendChild(container);

        this.photos.map(photo => {
            const div = document.createElement('div');
            const a_tag = document.createElement('a');
            const img = document.createElement('img');
            img.onclick = function() {
                console.log(modal);
                modal_img.src = photo.path;
                modal_caption.innerHTML = photo.caption;
                modal.style.cssText = 'display: block;'
            }
            if (this.template === 'mosaic') {
                div.className = 'mosaic_card';
            }
            else {
                div.className = 'mansonry_card';
            }
            div.id = photo.name;
            img.className = 'images-class';
            img.id = photo.name + '_img';
            img.src = photo.path;
            img.style.cssText = 'width: 100%; height: 100%; object-fit: cover;';
            container.appendChild(div);
            a_tag.append(img);
            div.append(a_tag);
        });
    },

    /* 
        Add caption to gallery
    */
    showCaption: function() {
        this.photos.map(photo => {
            const img_div = document.getElementById(photo.name);
            const caption = document.createElement('span');
            caption.innerHTML = photo.caption;
            caption.id = photo.name + '_caption';
            img_div.append(caption);
        });
    },

    /* 
        Add date to gallery
    */
    showDate: function() {
        this.photos.map(photo => {
            const img_div = document.getElementById(photo.name);
            const date = document.createElement('span');
            date.innerHTML = photo.date;
            date.id = photo.name + '_date';
            img_div.append(date);
        });
    },

    /* 
        Generates a picture modal when user click on the picture
    */
    getModal: function() {
        const photo_modal = document.createElement('div');
        photo_modal.className = 'modal';
        photo_modal.id = 'modal';
        const img = document.createElement('img');
        img.className = 'modal-content';
        img.id = 'modal-img';

        const caption = document.createElement('div');
        caption.className = 'caption';
        caption.id = 'modal-caption';

        photo_modal.appendChild(img);
        photo_modal.appendChild(caption);

        photo_modal.onclick = function(e) {
            if (e.target === img)
              return;
            
            photo_modal.style.display = 'none';
        }
        return photo_modal;
    },

    /* 
        Modify style for default template
    */
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


    /* 
        Modify style for mosaic template
    */
    templateMosaic: function() {
        const gallery = document.getElementById('sandboxgallery');
        const photos_container = gallery.children[0];
        photos_container.style.cssText = 'width: 100%; height: 100%; margin: auto;';
        console.log('template mosaic');
    },

    /* 
        Modify style for grid template
    */
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

    /* 
        Modify style for mansonry template
    */
    templateMansonry: function() {
        const gallery = document.getElementById('sandboxgallery');
        const photos_container = gallery.children[0];
        photos_container.style.cssText = 'width: 100%; height: 100%; margin: auto;';

        const cards = document.getElementsByClassName('mansonry_card');
        for (let i = 0; i < cards.length; i++) {
            cards[i].style.cssText = 'grid-column: span 2;'
        }
        console.log('template mansonry');
    }
}