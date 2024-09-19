const hamburger = document.querySelector('.hamburgerMenu')
const toogle = document.querySelector('.toogle__menu')

hamburger.addEventListener('click', () =>{
    const hamburgerClass = hamburger.classList
    const toogleClass = toogle.classList
    

    hamburgerClass.forEach((clas) => {
        if(clas !== 'hamburger__menu'){
            hamburgerClass.add('hamburger__menu')
            toogleClass.add('toogle__active')
            hamburger.style.position = "fixed"
        } else{
            hamburgerClass.remove('hamburger__menu')
            toogleClass.remove('toogle__active')
        }
    })
})