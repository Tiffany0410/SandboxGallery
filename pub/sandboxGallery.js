/* JS Libraries */
"use strict";
console.log('SCRIPT: Creating and loading Sandbox Gallery JS library');

/* 
    Generates a Gallery

    @param template: describes which template is in used {default, mosaic, grid, masonry}
*/

(function(global, document, $) { 
	function GalleryGenerator(template, photos, caption, date, hover, fullscreen) {
        this.photos = photos
        this.template = template
        this.caption = caption
        this.date = date
        this.hover = hover
        this.fullscreen = fullscreen
	}

	GalleryGenerator.prototype = {
    /* 
        Modify DOM to show gallery according to template
    */
    makeGallery: function() {
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

        const modal = this._getModal();
        const body = $('body');
        body.append(gallery);
        gallery.append(photos_container);
        gallery.append(modal);
        
        if (this.template === 'mosaic') {
            this.caption = false;
            this.date = false;
            this._setImageMosaicMasonry(this.photos);
            this._setCaptionorDate();
            this._templateMosaic();
        }
        else if (this.template === 'grid') {
            this.caption = this.caption;
            this.date = this.date;
            this._setImageDefaultGrid(this.photos);
            this._setCaptionorDate();
            this._templateGrid();
        }
        else if (this.template === 'masonry') {
            this.caption = false;
            this.date = false;
            this._setImageMosaicMasonry(this.photos);
            this._setCaptionorDate();
            this._templateMasonry();
        }
        else if (this.template === 'album') {
            this.caption = this.caption;
            this.date = false;
            this._setImageDefaultGrid(this.photos);
            this._setCaptionorDate();
            this._templateAlbum();
        }
        else {
            this.caption = this.caption;
            this.date = this.date;
            this._setImageDefaultGrid(this.photos);
            this._setCaptionorDate();
            this._templateDefault();
        }
    },

    _setCaptionorDate: function() {
        if (this.caption) {
            this._showCaption();
        }
        if (this.date) {
            this._showDate();
        }
    },

    /* 
        Add images to gallery for default / grid template
    */
    _setImageDefaultGrid: function() {
        this.photos = this.photos;
        const gallery = document.getElementById('sandboxgallery');

        const modal = document.getElementById('modal');
        var modal_img = document.getElementById('modal-img');
        var modal_caption = document.getElementById("modal-caption");

        const photos_container = gallery.children[0];
        const container = document.createElement('div');
        container.className = 'image-default';
        photos_container.appendChild(container);

        photos_container.querySelectorAll('*').forEach(n => n.remove());
        this.photos.map(photo => {
            const div = document.createElement('div');
            const a_tag = document.createElement('a');
            const img = document.createElement('img');
            if (this.fullscreen) {
                img.onclick = function() {
                    console.log(modal);
                    modal_img.src = photo.path;
                    modal_caption.innerHTML = photo.caption;
                    modal.style.cssText = 'display: block;'
                }
            }
            div.id = photo.name;
            div.className = 'default-card';
            this._setHover(img);
            img.id = photo.name + '_img';
            img.src = photo.path;
            div.style.cssText = 'width: 350px; height: 350px;'
            img.style.cssText = 'width: 350px';
            photos_container.appendChild(div);
            a_tag.append(img);
            div.append(a_tag);
        });
    },

    /* 
        Add images to gallery for mosaic / masonry template
    */
    _setImageMosaicMasonry: function() {
        const cssStyle = [
            'grid-column: span 2; grid-row: 1 / 3;',
            'grid-column: span 2; grid-row: 1;',
            'grid-column: span 2; grid-row: 2;',
            'grid-column: span 1; grid-row: 3;',
            'grid-column: span 2; grid-row: 4;',
            'grid-column: 5 / 7; grid-row: 3 / 5;'
    ]
        this.photos = this.photos;

        const gallery = document.getElementById('sandboxgallery');
        const photos_container = gallery.children[0];

        const modal = document.getElementById('modal');
        const modal_img = document.getElementById('modal-img');
        const modal_caption = document.getElementById("modal-caption");

        photos_container.querySelectorAll('*').forEach(n => n.remove());

        const container = document.createElement('div');
        if (this.template === 'mosaic') {
            container.className = 'image-mosaic';
            container.style.cssText = 'display: grid; grid-template-rows: 300px 200px 250px 250px; grid-gap: 0.5rem;'
        }
        else {
            container.className = 'image-masonry';
        }

        photos_container.appendChild(container);

        this.photos.map((photo, idx) => {
            const div = document.createElement('div');
            const a_tag = document.createElement('a');
            const img = document.createElement('img');
            if (this.fullscreen) {
                img.onclick = function() {
                    console.log(modal);
                    modal_img.src = photo.path;
                    modal_caption.innerHTML = photo.caption;
                    modal.style.cssText = 'display: block;'
                }
            }
            if (this.template === 'mosaic') {
                div.className = 'mosaic_card';
                if (idx === 0) {
                    div.style.cssText = cssStyle[0];
                }
                else if (idx === 1 || idx === 2) {
                    div.style.cssText = cssStyle[1];
                }
                else if (idx === 3 || idx === 4) {
                    div.style.cssText = cssStyle[2];
                }
                else if (idx === 5 || idx === 6) {
                    div.style.cssText = cssStyle[3];
                }
                else if (idx === 7 || idx === 8) {
                    div.style.cssText = cssStyle[4];
                }
                else if (idx === 9) {
                    div.style.cssText = cssStyle[5];
                }
                
            }
            else {
                div.className = 'masonry_card';
            }
            div.id = photo.name;
            this._setHover(img);
            img.id = photo.name + '_img';
            img.src = photo.path;
            img.style.cssText = 'width: 100%; height: 100%; object-fit: cover;';
            container.appendChild(div);
            a_tag.append(img);
            div.append(a_tag);
        });
    },

    /* 
        Set hover effect for img
    */
    _setHover: function(img) {
        if (this.hover === "shrink") {
            img.className = 'images-class-shrink';
        }
        else if (this.hover === "grow") {
            console.log("grow");
            img.className = 'images-class-grow'
        }
        else if (this.hover === "fade") {
            console.log("fade");
            img.className = 'images-class-fade' 
        }
        else if (this.hover === 'border'){
            console.log('border');
            img.className = 'images-class-border';
        }
        else if (this.hover === 'blur') {
            console.log('blur');
            img.className = 'images-class-blur';
        }
    },

    /* 
        Add caption to gallery
    */
    _showCaption: function() {
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
    _showDate: function() {
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
    _getModal: function() {
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
    _templateDefault: function() {
        const gallery = document.getElementById('sandboxgallery');
        const photos_container = gallery.children[0];
        photos_container.style.cssText = 'width: 100%; height: 500px; display: flex; justify-content: center; align-items: center; flex-wrap: wrap; ';

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
    _templateMosaic: function() {
        const gallery = document.getElementById('sandboxgallery');
        const photos_container = gallery.children[0];
        photos_container.style.cssText = 'width: 100%; height: 100%; margin: auto;';
        console.log('template mosaic');
    },

    /* 
        Modify style for grid template
    */
    _templateGrid: function() {
        const gallery = document.getElementById('sandboxgallery');
        const photos_container = gallery.children[0];
        photos_container.style.cssText = 'width: 800px; display: flex; justify-content: space-between; flex-wrap: wrap; margin-left: auto; margin-right: auto;';

        this.photos.map(photo => {
            const div = document.getElementById(photo.name);
            const img = document.getElementById(photo.name + '_img');
            const caption = document.getElementById(photo.name + '_caption');
            const date = document.getElementById(photo.name + '_date');
            if (div) {
                div.style.cssText = 'width: 300px; height: 300px;'
            }
            if (img) {
                img.style.cssText = 'width: 300px; height: 220px;'
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
        Modify style for masonry template
    */
    _templateMasonry: function() {
        const gallery = document.getElementById('sandboxgallery');
        const photos_container = gallery.children[0];
        photos_container.style.cssText = 'width: 100%; height: 100%; margin: auto;';

        const cards = document.getElementsByClassName('masonry_card');
        for (let i = 0; i < cards.length; i++) {
            cards[i].style.cssText = 'grid-column: span 2;'
        }
        console.log('template masonry');
    },

    /* 
        Modify style for album template
    */
    _templateAlbum: function() {
        const gallery = document.getElementById('sandboxgallery');
        const photos_container = gallery.children[0];
        photos_container.style.cssText = 'width: 800px; display: flex; justify-content: space-between; flex-wrap: wrap; margin-left: auto; margin-right: auto;';

        this.photos.map(photo => {
            const div = document.getElementById(photo.name);
            const img = document.getElementById(photo.name + '_img');
            const caption = document.getElementById(photo.name + '_caption');
            const date = document.getElementById(photo.name + '_date');
            if (div) {
                div.style.cssText = 'width: 350px; height: 300px;'
            }
            if (img) {
                img.style.cssText = 'width: 300px; height: 220px; float: left'
            }
            if (caption) {
                caption.style.cssText = 'display: block; color: gray; letter-spacing: 1px; text-align: right; font-size: 15px; font-weight: 400; float: left; writing-mode: vertical-rl; text-orientation: mixed; padding-left: 10px; padding-top: 20px';
            }
            if (date) {
                date.style.cssText = 'display: block; color: darkgray; letter-spacing: 1px; text-align: right; font-size: 10px; font-weight: 200;';
            }      
        })
        console.log('template grid');
    }
}
	global.GalleryGenerator = global.GalleryGenerator || GalleryGenerator

})(window, window.document, $);