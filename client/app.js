const btn1 = document.querySelector('.btn-1')
const btn2 = document.querySelector('.btn-2')
const btn3 = document.querySelector('.btn-3')
const btn4 = document.querySelector('.btn-4')
const btn5 = document.querySelector('.btn-5')
const btn6 = document.querySelector('.btn-6')
const popup = document.querySelector('.popup')
const close = document.querySelector('.close-btn')
const body = document.body
const titlePopup = document.querySelector(".title-popup")
const _email = document.querySelector(".email")
const _pass = document.querySelector(".pass")

const textPopup = document.querySelector(".text-popup")

btn1.onclick = () => {
  popup.style.display = "flex"
}
btn2.onclick = () => {
  popup.style.display = "flex"
}
btn3.onclick = () => {
  popup.style.display = "flex"
}
btn4.onclick = () => {
  popup.style.display = "flex"
}
btn5.onclick = () => {
  popup.style.display = "flex"
}
btn6.onclick = () => {
  popup.style.display = "flex"
}

close.onclick = () => {
  if(_email.value == '' && _pass.value == ''){
    _email.style.border = "2px solid red"
    _pass.style.border = "3px solid red"
    textPopup.style.color = "red"
  }
  else{
    let body = {
      login: _email.value,
      password: _pass.value
    }
    axios.post('http://localhost:8080/register', body)
      .then(res => {
        titlePopup.textContent = "Success!"
        titlePopup.style.color = "#00FF00"
      })
  }
}