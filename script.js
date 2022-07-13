const  $gallery = document.getElementById('gallery')
const  $modal = document.querySelector('.modal')
const  $modalimage = document.querySelector('.modal-image')
const  $button = document.querySelector('.button')


const  gallery =[]

for (let  i = 1; i <=12; i++) {
    gallery.push(`<img src="images/${i}.jpg" alt="Pexel image" class="each-img">`)
}
$gallery.innerHTML = gallery.join('')

function interactiveGallery(e) {

    const $selectedImages = e.target.closest('.each-img')
    console.log($selectedImages)
    $modalimage.src = $selectedImages.src
    $modal.classList.add('show')

    function returnButton() {
        $modal.classList.remove('show')
    }
    $button.addEventListener('click', returnButton)

}
$gallery.addEventListener('click', interactiveGallery)

