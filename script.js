const btns = document.getElementsByClassName("nav-link")
const title = document.getElementById("title")
const dialog = document.querySelector("dialog")

for (i=0 ; i<btns.length ; i++){
    btns[i].addEventListener("click",(e)=>{
        title.innerText = `${e.target.innerText} Content`
    })
}

window.onload = ()=> dialog.showModal()