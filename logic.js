let button = document.getElementById('button')
let button2 = document.getElementById('button2')
let button3 = document.getElementById('button3')
let text1 = document.getElementById('text1')
let catataninput = document.getElementById('catataninput')
let savetext = document.getElementById("savetext")
let saveklik = -1
let editinput = document.getElementById('editinput')


function tambah() {

    if(catataninput.value.trim() === ''){
    alert ('TIDAK BISA KOSONG')
    return}
    let allcatatan = JSON.parse(localStorage.getItem('catatan')) || []
    allcatatan.push({ catatan: catataninput.value })
    text1.innerHTML = catataninput.value
    localStorage.setItem('catatan', JSON.stringify(allcatatan))
    catataninput.value = ''
}

function saved() { 
    let allcatatan = JSON.parse(localStorage.getItem('catatan')) || []
    // if (allcatatan.length === 0) return
     if (allcatatan.length===0) {
        savetext.innerHTML = 'TIDAK ADA CATATAN'
        return
    }
    saveklik = saveklik + 1
    if (saveklik >= allcatatan.length) {
        saveklik = 0 
        //       button3.style.display = 'none'
        //  savetext.innerHTML = 'Tidak ada catatan lagi'    
    }
    // button2.style.display = 'block'

    console.log(saveklik);
    savetext.innerHTML = allcatatan[saveklik].catatan
}

function back() {
    let allcatatan = JSON.parse(localStorage.getItem('catatan')) || []
    // if (allcatatan.length === 0) return
     if (allcatatan.length===0) {
        savetext.innerHTML = 'TIDAK ADA CATATAN'
         return
    }
    saveklik = saveklik - 1
    if (saveklik < 0) {
        saveklik = allcatatan.length -1
        //   savetext.innerHTML = 'Tidak ada catatan lagi'
        //   button2.style.display = 'none'    
    }
    // button3.style.display = 'block'
    console.log(saveklik);
    savetext.innerHTML = allcatatan[saveklik].catatan
}
function hapus() {
let allcatatan = JSON.parse(localStorage.getItem('catatan')) ||[]


if (allcatatan.length === 0) {
savetext.innerHTML = 'TIDAK ADA CATATAN'
return
}
if (confirm ('apakah yakin DIHAPUS?'))
{allcatatan.splice(saveklik,1)

}
if (saveklik === allcatatan.length) {
saveklik = saveklik -1

}

localStorage.setItem('catatan', JSON.stringify(allcatatan))

if (allcatatan.length === 0) {
savetext.innerHTML = 'TIDAK ADA CATATAN LAGI'
return
}

if (saveklik < 0) {
saveklik =0

}
savetext.innerHTML = allcatatan[saveklik].catatan
// if (saveklik >= allcatatan.length) {
// saveklik === allcatatan.length -1
// savetext.innerHTML = allcatatan[savelink].catatan
// return
// }

}
function pilih() {
    let allcatatan = JSON.parse(localStorage.getItem('catatan'))||[]
    if (saveklik < 0) {
    savetext.innerHTML = 'PILIH CATATAN DULU (klik BERIKUTNYA)'
    return
}
    if (allcatatan.length===0) {
        savetext.innerHTML = 'TIDAK ADA CATATAN YANG BISA DIPILIH'
         return
    }
    editinput.value = allcatatan[saveklik].catatan
}


function simpan() {
    let allcatatan = JSON.parse(localStorage.getItem('catatan'))||[]
   if (saveklik < 0) {
    savetext.innerHTML = 'PILIH CATATAN DULU (klik BERIKUTNYA)'
    return
}
   
    if (allcatatan.length===0) {
        savetext.innerHTML = 'BELUM ADA CATATAN, TIDAK ADA YANG BISA DIEDIT'
        return
    }
if(editinput.value.trim() === ''){
    alert ('TIDAK BISA KOSONG')
    return}
    if (confirm ('apakah yakin diedit?'))
  {allcatatan[saveklik].catatan = editinput.value
localStorage.setItem('catatan',JSON.stringify(allcatatan))

    savetext.innerHTML = editinput.value

    editinput.value = ''
    alert ('CATATAN BERHASIL DISIMPAN')
  }

    
}
