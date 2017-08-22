

function loadImage() {
    var size = 13;
    var obj = [];
    for(var i = 1; i <= size; i++){
        obj.push({
            imageUrl : "img/gallery/" + i + ".jpg"
        });
    }
    $('#gallery > div.container-fluid > div.row-fluid > div > div#lightbox').loadTemplate('img/image.html', obj)
}