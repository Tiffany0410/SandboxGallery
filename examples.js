photoList = [
    {name: "photo1", path: 'photos/a.jpg', caption: 'Los Angeles', date: 'December 2018'},
    {name: "photo2", path: 'photos/a1.jpg', caption: 'Sunset and Tree', date: 'December 2018'},
    {name: "photo3", path: 'photos/a2.jpg', caption: 'Lantern Man', date: 'December 2018'},
    {name: "photo4", path: 'photos/a3.jpg', caption: 'San Francisco', date: 'December 2018'},
    {name: "photo5", path: 'photos/a4.jpg', caption: 'San Diego', date: 'January 2019'},
]

const gallery = new GalleryGenerator('default', true, true);
gallery.makeGallery(photoList.slice(0, 4));

function templateDefault() {
    gallery.makeGallery(photoList.slice(0, 4));
    gallery.setTemplate('default');
}

function templateMosaic() {
    gallery.setImage(photoList.slice(0,5));
    gallery.setTemplate('mosaic');
}

function templateGrid() {
    gallery.setTemplate('grid');
}

function templateMansonry() {
    gallery.setTemplate('mansonry');
}