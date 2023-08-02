# Sandbox Gallery

_SandboxGallery is the tool of choice for developers to create beautiful galleries with eye-catching templates and hover effects for the web. Developers can take control over the gallery design, hover effects, enable fullscreen lightbox and show image title or date. There are various templates available: default, mosaic, grid, masonry and album. Also, there are different hover effects: shrink, grow, fade, border and blur._

- Link to landing page: https://sandboxgallery.onrender.com/examples.html

## _Getting Started_

### Scripts needed: 
_jQuery, sandboxGallery.js, sandboxGallery.css_

### Code snippet:
There are 5 templates to choose from:

``template: {'default', 'mosaic', 'grid', 'masonry', 'album'}``

There are 5 hover effects to choose from:

``hover: {'shrink', 'grow', 'fade', 'border', 'blur'}``

Each image in a list contains information about name, path, caption and date as follow:

``photoList: [{name: "photo", path: 'photos/a.jpg', caption: 'Los Angeles', date: 'December 2018'},``

``{name: "photo1", path: 'photos/a1.jpg', caption: 'Sunset and Tree', date: 'December 2018'}]``

**Constructor:**  To initialize a GalleryGenerator instance with default template and shrink hover effect, show image caption and date, enable fullscreen lightbox:

``const defaultGallery = new GalleryGenerator(template: 'default', photos: photoList, caption: true, date: true, hover: 'shrink', fullscreen: true);``

**API method:** To generate a sandbox gallery:

``default_gallery.makeGallery();``

- Link to documentation: https://sandboxgallery.onrender.com/api.html
