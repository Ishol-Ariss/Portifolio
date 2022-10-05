const styles = `
    display: block;
    width: 100%;
    background-color: white;
    height: 100%;
    padding-top: 20px;
    transform: unset;
    align-items: center;
`
const navStyles = `
    display: flex;
    flex-direction: column;
    align-items: center;
    transform: unset;
`


function showMenu(){
    var navBar = document.getElementById("navBar")
    var menu = document.getElementsByClassName("link")
    var img = document.getElementById("img")
    console.log("a")
    if(menu[1].style.display != "block"){
        for(let i = 0; i < menu.length; i++){
            menu[i].style.display = "block"
        }
        navBar.style.cssText = styles
        navInDiv.style.cssText = navStyles
    }
    else{
        for(let i = 0; i < menu.length; i++){
            menu[i].style.display = "none"
        }
        img.style.cssText = `
            display: block;
            margin-right: 55px;
        `
        navBar.style.backgroundColor = "transparent" 
        navBar.style.display = "block"
        navInDiv.style.alignItems = "center"
    }
    
    console.log("asddad")
}