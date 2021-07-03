const startIcon = document.getElementById('start-icon')
const searchIcon = document.getElementById('search-icon')
const startMenu = document.getElementById('start-menu')
const searchBar = document.getElementById('search-bar')
const fileExplorerIcon = document.getElementById('file-explorer-icon')
const fileExplorer = document.getElementById('file-explorer')
const fileExplorerClose = document.getElementById('file-explorar-close')
const fileIconStart = document.getElementById('file-start')


startIcon.addEventListener('click', () => {
    if(searchBar.classList.contains('search-bar-animation')){
        searchBar.classList.remove('search-bar-animation')
    }
    startMenu.classList.toggle('start-menu-animation')
})

searchIcon.addEventListener('click', () => {
    if(startMenu.classList.contains('start-menu-animation')){
        startMenu.classList.remove('start-menu-animation')
    }
    searchBar.classList.toggle('search-bar-animation')

})
fileExplorerIcon.addEventListener('click',() => {
    if(searchBar.classList.contains('search-bar-animation')){
        searchBar.classList.remove('search-bar-animation')
    }
    if(fileExplorer.classList.contains('file-explorer-open')){
        fileExplorer.classList.remove('file-explorer-open')
        fileIconStart.style.display = "none"
    }else{
        fileExplorer.classList.add('file-explorer-open')
        fileIconStart.style.display = "inline-block"
    }

})

fileExplorerClose.addEventListener('click', () => {
    fileExplorer.classList.remove('file-explorer-open')
    fileIconStart.style.display = "none"
})
