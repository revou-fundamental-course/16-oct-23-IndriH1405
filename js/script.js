function replaceName() {
    let name = prompt("Siapakah nama anda?", "");
    document.getElementById("name").innerHTML = name

}
replaceName()

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