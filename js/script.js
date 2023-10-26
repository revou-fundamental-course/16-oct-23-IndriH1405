function replaceName() {
    let name = prompt("Siapakah nama anda?", "");
    document.getElementById("name").innerHTML = name

}
replaceName()

// banner-slideshow
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var imgList = document.getElementsByClassName('img-slideshow');
    if (n > imgList.length) slideIndex = 1;
    else if(n < 1) slideIndex = imgList.length;

    for(i = 0; i < imgList.length; i++) {
        imgList[i].style.display = 'none';
    }

    imgList[slideIndex - 1].style.display = 'block';
}

setInterval(() => {
    plusDivs(1);
}, 3000);

// message-us form
function validateForm(){
    const nama = document.forms ['form']['nameInput'].value;
    const bday = document.forms ['form']['birth-date'].value;
    const jeniskelamin = document.querySelector ('input[name="gender"]:checked');
    const pesan = document.forms ['form']['messages'].value;

    if (nama == '' || bday == '' || !jeniskelamin || pesan == '') {
        alert("Tidak Boleh Kosong!");
        return false;
    }

    document.getElementById('nama').innerHTML = nama;
    document.getElementById('bday').innerHTML = bday;
    document.getElementById('jeniskelamin').innerHTML = jeniskelamin.value;
    document.getElementById('pesan').innerHTML = pesan;
    return false;
}