let soir = true
let message = document.querySelector("h1")
function change(){
    if(soir == true){

        //object // HTMLNODE
        message.innerHTML = "Bonjour !";
        message.style.color = "orange"
        soir = false
    }else{
        message.innerHTML = "Bonsoir !"
        message.style.color = "black"
        soir = true
    }
}