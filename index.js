let passwordLength = document.getElementById("passwordLength")
let password = document.getElementById("password")
let saveBtn = document.getElementById("saveBtn")


function generatePassword(panjang){
    const lowAlphabet = "abcdefghijklmnopqrstuvwxyz"
    const upAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const numerik = "0123456789"
    const simbol = "!@#$%^&*()_+=-{}[]';:/?.,<>~`"


    const data = lowAlphabet + upAlphabet + numerik + simbol
    let generator = ' '

    for (let index = 0; index < panjang; index++){
        generator += data[Math.floor(Math.random() * data.length)]
    }
    return generator
}

function getPassword(){
    const newPassword = generatePassword(passwordLength.value)
    password.value = newPassword
    setTimeout(() => {
        alert('password sudah dibuat!')
    },1000)
}

function save(){
    document.title = password.value
    saveBtn.setAttribute ('href', 'data:text/plain;charset=utf-8,' +encodeURIComponent(`password saya : ${document.title}`))
    saveBtn.setAttribute('download', 'myPassword.txt')
    setTimeout (() => {
        alert('data berhasil disimpan!')
    },1000)
}