

class Header {

    selectors = {
        root: '.header',
        overlay: '.header_overlay',
        burgerButton: '.header__burger-button'
    }

    stateClasses = {
        isActive: 'is-active',
        isLock: 'is-lock'
    }

    constructor() {
        this.rootElement = document.querySelector(this.selectors.root),
        this.overlayElement = this.rootElement.querySelector(this.selectors.overlay),
        this.burgerButtonElement = this.rootElement.querySelector(this.selectors.burgerButton),
        this.bindEvents()
    }

    onBurgerButtonClick = () => {
        this.burgerButtonElement.classList.toggle(this.stateClasses.isActive)
        
        this.overlayElement.classList.toggle(this.stateClasses.isActive)
        document.documentElement.classList.toggle(this.stateClasses.isLock)
    }

    bindEvents() {
        this.burgerButtonElement.addEventListener('click', this.onBurgerButtonClick)
    }

}

new Header();

function popupInteractive() {
    const popupBtn = document.querySelector('.header_contacts');
    const popupCloser = document.querySelector('.popup_closer');
    const overlay = document.querySelector('.popup_contacts_overlay');

    const togglepopup = (show) => {
        overlay.classList.toggle('is-active', show);
        document.body.style.overflow = show ? 'hidden' : ''
    }

    popupBtn.addEventListener('click', () => { togglepopup(true) })

    popupCloser.addEventListener('click', () => { togglepopup(false) })

    overlay.addEventListener('click', (e) => {
        if(e.target === overlay) { togglepopup(false) }
    })

    document.addEventListener('keydown', (e) => {
    if (e.code === 'Escape') { togglepopup(false) }
    });
}

popupInteractive()

function getTabs() {

    const tabs = document.querySelector('.tabs_block')

    tabs.addEventListener('click', (e) => {
        const clickedElement = e.target.closest('.tab-button')
        console.log(clickedElement);
        
        if(!clickedElement) return

        const tabId = clickedElement.dataset.tab

        tabs.querySelectorAll('.tab-button').forEach(item => item.classList.remove('is-active-head'))
        tabs.querySelectorAll('.tab_content').forEach(item => item.classList.remove('is-active-tab'))

        clickedElement.classList.add('is-active-head')
        tabs.querySelector(`.tab_content[data-tab="${tabId}"]`).classList.add('is-active-tab')
    })
    
}

function startFeedbackPage() {
    const currentURL = window.navigation.currentEntry.url
    if(currentURL.includes('feedback')) {
        getTabs()
    }
    return
}

startFeedbackPage()





















