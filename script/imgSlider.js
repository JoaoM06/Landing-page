const relacionados = document.querySelector(".relacionados")
const relacionadosContainer = document.querySelector(".relacionadosContainer")
const relacionadosContainerWidth = document.querySelector(".relacionadosContainer").clientWidth
const itemWidth = document.querySelector(".relacionados .img").clientWidth
const arrowRight = document.querySelector("#arrowRight")
const arrowLeft = document.querySelector("#arrowLeft")


function moveRight(){
    relacionadosContainer.scrollLeft += itemWidth

    if(relacionadosContainer.scrollLeft >= (relacionadosContainerWidth + (2*itemWidth))){
        relacionadosContainer.classList.add("noAnimation")
        relacionadosContainer.scrollLeft = 0
        relacionadosContainer.classList.remove("noAnimation")
        relacionadosContainer.scrollLeft += itemWidth
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