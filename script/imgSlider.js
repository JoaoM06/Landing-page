const relacionados = document.querySelector(".relacionados")
const relacionadosContainer = document.querySelector(".relacionadosContainer")
const relacionadosContainerWidth = document.querySelector(".relacionadosContainer").clientWidth
const relacionadosContainerScrlWidth = document.querySelector(".relacionadosContainer").scrollWidth
const itemWidth = document.querySelector(".relacionados .img").clientWidth
const bodyWidth = document.querySelector("body").clientWidth
const arrowRight = document.querySelector("#arrowRight")
const arrowLeft = document.querySelector("#arrowLeft")


function moveRight(){
    relacionadosContainer.scrollLeft += (itemWidth + 70)

    if(relacionadosContainer.scrollLeft >= (relacionadosContainerScrlWidth - relacionadosContainerWidth - 1)){
        relacionadosContainer.classList.add("noAnimation")
        relacionadosContainer.scrollLeft = 0
        relacionadosContainer.classList.remove("noAnimation")
        if(bodyWidth > 480){
            relacionadosContainer.scrollLeft += (itemWidth + 70)
        }
    }
}

function moveLeft(){
    relacionadosContainer.scrollLeft -= itemWidth

    if(relacionadosContainer.scrollLeft == 0){
        relacionadosContainer.classList.add("noAnimation")
        relacionadosContainer.scrollLeft = 9999
        relacionadosContainer.classList.remove("noAnimation")
        relacionadosContainer.scrollLeft -= itemWidth
    }
}

intervalId = setInterval(moveRight, 6000)


arrowRight.addEventListener("click", moveRight)
arrowLeft.addEventListener("click", moveLeft)


// Navbar e voltar ao topo:

const voltarInicio = document.querySelector(".footerUpIcon img")
const bodyScrl = document.querySelector("*")
const home = document.querySelector("#home")
const services = document.querySelector("#services")
const info = document.querySelector("#info")
const contact = document.querySelector("#contact")

const servicesPosition = document.querySelector(".servicosContainer").getBoundingClientRect()
const clientesPosition = document.querySelector(".clientesContainer").getBoundingClientRect()
const contatoPosition = document.querySelector(".contatoContainer").getBoundingClientRect()



voltarInicio.addEventListener("click", ()=>{bodyScrl.scrollTop = 0})
home.addEventListener("click", ()=>{bodyScrl.scrollTop = 0})
services.addEventListener("click", ()=>{bodyScrl.scrollTop = servicesPosition.top})
info.addEventListener("click", ()=>{bodyScrl.scrollTop = clientesPosition.top})
contact.addEventListener("click", ()=>{bodyScrl.scrollTop = contatoPosition.top})