const tBody = document.querySelector("#tBody")
const btn = document.querySelector("#btn")

btn.onclick = () => {
    tBody.innerHTML = ''
  axios.get('http://localhost:8080/user')
    .then(res => {
      for(u of res.data) {
        tBody.innerHTML += `
        <tr>
          <th scope="col">${u.id}</th>
          <td>${u.login}</td>
          <td>${u.password}</td>
        </tr>` 
      }
    })
}