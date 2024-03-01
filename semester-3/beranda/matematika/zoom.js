let isZoomed = false;

function toggleZoom() {
    const zoomImage = document.getElementById('zoomImage');
    isZoomed = !isZoomed;
    if (isZoomed) {
        zoomImage.classList.add('zoomed');
    } else {
        zoomImage.classList.remove('zoomed');
    }
}

const imageContainer = document.getElementById('imageContainer');
imageContainer.addEventListener('click', toggleZoom);