const btns = document.getElementsByClassName("nav-link")
const title = document.getElementById("title")
const dialog = document.querySelector("dialog")
const acceptBtn = document.querySelector(".btn")
const closeBtn = document.querySelector("#close")
const localCookie = document.cookie


acceptBtn.addEventListener("click",acceptedDialog)
closeBtn.addEventListener("click",closeDialog)
for (i=0 ; i<btns.length ; i++){
    btns[i].addEventListener("click",(e)=>{
        title.innerText = `${e.target.innerText} Content`
    })
}

function closeDialog (){
    dialog.close()
}
function acceptedDialog (){
    document.cookie = "cookie_accepted = 1"
    closeDialog()
}


if (localCookie == "cookie_accepted=1" ){
    dialog.close()
}else{
    window.onload = ()=> dialog.showModal()
}