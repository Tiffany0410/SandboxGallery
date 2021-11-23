const gallery = new GalleryGenerator([
    {name: "photo1", path: 'photos/a.jpg', caption: 'Los Angeles', date: 'December 2018'},
    {name: "photo2", path: 'photos/a1.jpg', caption: 'Sunset', date: 'December 2018'},
    {name: "photo3", path: 'photos/a2.jpg', caption: 'San Francisco', date: 'December 2018'},
    {name: "photo4", path: 'photos/a3.jpg', caption: 'San Francisco', date: 'December 2018'}], null);
gallery.makeGallery();
gallery.showCaption();
gallery.showDate();

function templateMosaic() {
    gallery.templateMosaic();
}

function templateGrid() {
    gallery.templateGrid();
}

function templateMansonry() {
    gallery.templateMansonry();
}