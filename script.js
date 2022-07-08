const  $gallery = document.getElementById('gallery')

const  gallery =[]

for (let  i = 0; i <=12; i++) {
    gallery.push('<img src="images/${i}.jpg' alt = "Pexel image">)
}
$gallery.innerHTML = gallery.join('')