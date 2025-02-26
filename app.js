const contactBtn = document.querySelector('#contact-btn')
const contactIns = document.querySelector('.conact-insides')
const contactOverlay = document.querySelector('.conact-insides-overlay')

function addActiveClass() {
    contactIns.classList.add('active-modal')
    contactOverlay.style.display = 'block'
}

function remActiveClass() {
    contactIns.classList.remove('active-modal')
    contactOverlay.style.display = 'none'
}

contactBtn.addEventListener('click', () => {
    addActiveClass()
})

contactOverlay.addEventListener("click", ()=> {
    remActiveClass()
})