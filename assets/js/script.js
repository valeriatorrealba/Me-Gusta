// let btnClick = document.getElementById('sumarLike')
// let cantLike = document.getElementById('cantidadLike')

// btnClick.addEventListener('click', (sumarLike) => {
//     cantidadLike.innerText++
// })

function sumarLike(button) {
    let btnClick = button.previousElementSibling.querySelector('.cantidadLike')
    btnClick.innerText = parseInt(btnClick.innerText) + 1
}
