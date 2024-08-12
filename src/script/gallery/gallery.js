import Images from '../../asset/images/propertywide/*.png';
import PhotoSwipeLightbox from 'photoswipe/dist/photoswipe-lightbox.esm.js';
import 'photoswipe/dist/photoswipe.css';

const gallery = document.querySelector('#gallery');

const lightbox = new PhotoSwipeLightbox({
    gallery: '#gallery',
    children: 'a',
    pswpModule: () => import('photoswipe')
});

const createGalleryItem = (url, text) => {
    return (
        `<a href="${ url }" class="anchor card__link" target="_blank"
            data-pswp-src="${ url }" data-pswp-width="360" data-pswp-height="638">
            ${ text }
        </a>`
    );
};

lightbox.init();

Object.entries(Images).forEach(([key, value], index) => {
    const text = index === 0 ? 'View Gallery' : '';
    gallery.innerHTML += createGalleryItem(value, text);
});
