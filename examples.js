photoList = [
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
]

const gallery = new GalleryGenerator('default', true, true);
gallery.makeGallery(photoList.slice(3, 10));

function templateDefault() {
    // gallery.makeGallery(photoList.slice(0, 16));
    gallery.setTemplate('default');
    gallery.makeGallery(photoList.slice(3,10));
}

function templateMosaic() {
    gallery.setTemplate('mosaic');
    gallery.makeGallery(photoList.slice(5,16));
}

function templateGrid() {
    gallery.setTemplate('grid');
    gallery.makeGallery(photoList.slice(0 ,4));
}

function templateMansonry() {
    gallery.setTemplate('mansonry');
    gallery.makeGallery(photoList.slice(0,11));
}