import PhotoSwipeLightbox from 'photoswipe/dist/photoswipe-lightbox.esm.js';
import 'photoswipe/dist/photoswipe.css';

const lightbox = new PhotoSwipeLightbox({
    gallery: '#gallery',
    children: 'a',
    pswpModule: () => import('photoswipe')
});

lightbox.init();
