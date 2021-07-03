const startIcon = document.getElementById('start-icon')
const searchIcon = document.getElementById('search-icon')
const startMenu = document.getElementById('start-menu')
const searchBar = document.getElementById('search-bar')
const fileExplorerIcon = document.getElementById('file-explorer-icon')
const fileExplorer = document.getElementById('file-explorer')
const fileExplorerClose = document.getElementById('file-explorar-close')




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
    if(searchBar.classList.contains('search-bar-animation')){
        searchBar.classList.remove('search-bar-animation')

    }else{
        searchBar.classList.add('search-bar-animation')
        
    }
    // searchBar.classList.toggle('search-bar-animation')

})
fileExplorerIcon.addEventListener('click',() => {
    if(searchBar.classList.contains('search-bar-animation')){
        searchBar.classList.remove('search-bar-animation')
    }
    fileExplorer.classList.toggle('file-explorer-open') 
})

fileExplorerClose.addEventListener('click', () => {
    fileExplorer.classList.remove('file-explorer-open')
})
