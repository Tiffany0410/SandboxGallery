"use strict"; 

var template = "default";
var hover_effect = "shrink"
var fullscreen_view = true

const photoList = [
    {name: "photo", path: 'photos/a.jpg', caption: 'Los Angeles', date: 'December 2018'},
    {name: "photo1", path: 'photos/a1.jpg', caption: 'Sunset and Tree', date: 'December 2018'},
    {name: "photo2", path: 'photos/a2.jpg', caption: 'Lantern Man', date: 'December 2018'},
    {name: "photo3", path: 'photos/a3.jpg', caption: 'San Francisco', date: 'December 2018'},
    {name: "photo4", path: 'photos/a4.jpg', caption: 'San Diego', date: 'January 2019'},
    {name: "photo5", path: 'photos/a5.jpg', caption: 'Death Valley', date: 'January 2019'},
    {name: "photo6", path: 'photos/a6.jpg', caption: 'Death Valley', date: 'January 2019'},
    {name: "photo7", path: 'photos/a7.jpg', caption: 'Death Valley', date: 'January 2019'},
    {name: "photo8", path: 'photos/a8.jpg', caption: 'Death Valley', date: 'January 2019'},
    {name: "photo9", path: 'photos/a9.jpg', caption: 'Death Valley', date: 'January 2019'},
    {name: "photo10", path: 'photos/a10.jpg', caption: 'Death Valley', date: 'January 2019'},
    {name: "photo11", path: 'photos/a11.jpg', caption: 'Death Valley', date: 'January 2019'},
    {name: "photo12", path: 'photos/a12.jpg', caption: 'Black & White Film', date: 'January 2019'},
    {name: "photo13", path: 'photos/a13.jpg', caption: 'Black & White Film', date: 'January 2019'},
    {name: "photo14", path: 'photos/a14.jpg', caption: 'Black & White Film', date: 'January 2019'},
    {name: "photo15", path: 'photos/a15.jpg', caption: 'Black & White Film', date: 'January 2019'},
];

function templateDefault(hover) {
    template = "default";
    const default_gallery = new GalleryGenerator('default', photoList.slice(1,15), true, true, hover, fullscreen_view);
    default_gallery.makeGallery();
    const div = document.getElementsByClassName('template-description');
    const h5 = div[0].children[0];
    h5.innerText = 'Default Template: Here all thumbnails have the same size and aligned horizontally'
};

function templateMosaic(hover) {
    template = "mosaic";
    const mosaic_gallery = new GalleryGenerator('mosaic', photoList.slice(0, 12), false, false, hover, fullscreen_view);
    mosaic_gallery.makeGallery();
    const div = document.getElementsByClassName('template-description');
    const h5 = div[0].children[0];
    h5.innerText = 'Mosaic Template: Here all thumbnails are placed in nice responsive justified grid in mosaic style'
};

function templateGrid(hover) {
    template = "grid";
    const grid_gallery = new GalleryGenerator('grid', photoList.slice(0 ,6), true, true, hover, fullscreen_view);
    grid_gallery.makeGallery();
    const div = document.getElementsByClassName('template-description');
    const h5 = div[0].children[0];
    h5.innerText = 'Grid Template: Here all thumbnails have the same size in this grid layout'
};

function templateMasonry(hover) {
    template = "masonry";
    const masonry_gallery = new GalleryGenerator('masonry', photoList.slice(0,11), false, false, hover, fullscreen_view);
    masonry_gallery.makeGallery();
    const div = document.getElementsByClassName('template-description');
    const h5 = div[0].children[0];
    h5.innerText = 'Masonry Template: Here all thumbnails are placed in nice responsive justified grid in masonry style (layout based on columns)'
};

function templateAlbum(hover) {
    template = "album";
    const album_gallery = new GalleryGenerator('album', photoList.slice(7,13), true, false, hover, fullscreen_view);
    album_gallery.makeGallery();
    const div = document.getElementsByClassName('template-description');
    const h5 = div[0].children[0];
    h5.innerText = 'Album Template: Here all thumbnails have the same size in this grid layout, with caption on the right'
}

function enableFullscreen(enable) {
    fullscreen_view = enable
    if (template === 'default') {
        templateDefault(hover_effect)
    }
    else if (template === 'mosaic') {
        templateMosaic(hover_effect)
    }
    else if (template === 'grid') {
        templateGrid(hover_effect)
    }
    else if (template === 'masonry') {
        templateMasonry(hover_effect)
    }
    else {
        templateAlbum(hover_effect)
    }
}

function changeHover(hover) {
    hover_effect = hover
    if (template === 'default') {
        templateDefault(hover)
    }
    else if (template === 'mosaic') {
        templateMosaic(hover)
    }
    else if (template === 'grid') {
        templateGrid(hover)
    }
    else if (template === 'masonry') {
        templateMasonry(hover)
    }
    else {
        templateAlbum(hover)
    }
}

templateDefault('shrink', true);