const styles = `
    
    height: auto;
    align-items: unset;
    width: 170px;
`

const styleNav = `
    display: flex;
    flex-direction: column;
    position: absolute;
    width: 300px;
    height: auto;
    align-items: start;
    background-color: white;
    padding-top: 10px;

`
const imgA = `
    padding-left: 5px;
`

const imgB = `
    padding-left: 0px;
`
function showMenu(){
    var navBar = document.getElementById("navBar")
    var menu = document.getElementsByClassName("link")
    var img = document.getElementById("img")
    var navInDiv = document.getElementById("navInDiv")
    
    if(menu[1].style.display != "block"){
        for(let i = 0; i < menu.length; i++){
            menu[i].style.display = "block"
        }
        navBar.style.cssText = styles
        navInDiv.style.cssText = styleNav
        img.style.cssText = imgA
    }
    else{
        for(let i = 0; i < menu.length; i++){
            menu[i].style.display = "none"
        }
        navInDiv.style.backgroundColor = "transparent" 
        navBar.style.alignItems = "center"
        navInDiv.style.alignItems = "center"
        img.style.cssText = imgB

    }
}