
let navbar = document.getElementsByClassName("container-md")[0]
let block1 = document.getElementsByClassName("block1")[0]

const resizeBlock1 = () => {
    //if (document.width >= )

    let navbarWidth = navbar.offsetWidth
    let navbarMarginLeft = window.getComputedStyle(navbar).marginLeft

    let block1Width = navbarMarginLeft + navbarWidth
    block1.offsetWidth = block1Width
    block1.style.marginLeft = navbarMarginLeft
}

window.addEventListener('resize', (e) => {
    resizeBlock1()
})


document.addEventListener('DOMContentLoaded', () => {
    resizeBlock1()
})
