const startIcon = document.getElementById('start-icon')
const searchIcon = document.getElementById('search-icon')
const startMenu = document.getElementById('start-menu')
const searchBar = document.getElementById('search-bar')
const fileExplorerIcon = document.querySelectorAll('#file-explorer-icon')
const fileExplorer = document.getElementById('file-explorer')
const fileExplorerImg = document.querySelector('#file-explorer img')
const fileExplorerClose = document.getElementById('file-explorar-close')
const fileExplorerMax = document.getElementById('file-explorar-max')
const fileExplorerNormal = document.getElementById('file-explorar-normal')
const fileExplorerMin = document.getElementById('file-explorar-min')
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
fileExplorerIcon.forEach(icon => {
    icon.addEventListener('click',() => {
        if(searchBar.classList.contains('search-bar-animation')){
            searchBar.classList.remove('search-bar-animation')
        }
        fileExplorerImg.src = 'img/file-explorer.png'
        if(startMenu.classList.contains('start-menu-animation')){
            startMenu.classList.remove('start-menu-animation')
        }
        if(fileExplorer.classList.contains('file-explorer-open')){
            fileExplorer.classList.remove('file-explorer-open')
            fileIconStart.style.display = "none"
        }else{
            fileExplorer.classList.add('file-explorer-open')
            fileIconStart.style.display = "inline-block"
        }
    
    })
})


fileExplorerClose.addEventListener('click', () => {
    fileExplorer.classList.remove('file-explorer-open')
    fileExplorer.classList.remove('file-explorer-max-open')
    fileIconStart.style.display = "none"
})
fileExplorerMax.addEventListener('click', () => {
    fileExplorerImg.src = 'img/file-explorer-max.png'
    fileExplorer.classList.add('file-explorer-max-open')
    
})

fileExplorerNormal.addEventListener('click', () => {
    fileExplorerImg.src = 'img/file-explorer.png'
    fileExplorer.classList.remove('file-explorer-max-open')
    fileExplorer.classList.add('file-explorer-open')
})

fileExplorerMin.addEventListener('click', () => {
    fileExplorer.style.top = '100vh'
    fileExplorer.style.transform = 'translate(-50%, 0) scale(.2)'
})
fileIconStart.addEventListener('click', () => {
    if(fileExplorer.hasAttribute('style') && fileExplorerImg.getAttribute('src') === 'img/file-explorer.png'){
        fileExplorer.removeAttribute('style')
    }
    else if(fileExplorerImg.getAttribute('src') === 'img/file-explorer.png'){
        fileExplorer.style.top = '100vh'
        fileExplorer.style.transform = 'translate(-50%, 0) scale(.2)'
    }
    else if(fileExplorer.hasAttribute('style') && fileExplorerImg.getAttribute('src') === 'img/file-explorer-max.png'){
        fileExplorer.removeAttribute('style')
    }
    else if(fileExplorerImg.getAttribute('src') === 'img/file-explorer-max.png'){
        fileExplorer.style.top = '100vh'
        fileExplorer.style.transform = 'translate(-50%, 0) scale(.2)'
    }
})