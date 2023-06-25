const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


passwordEl1 =  document.querySelector("#password-el1");
passwordEl2 = document.querySelector("#password-el2");

document.querySelector("form").addEventListener("submit", function(event){
    event.preventDefault()
    getLimit()
})
let l = null
function getLimit(){
   l = document.querySelector("#limit").value 
   l = parseInt(l)
}

let password1= ""
let password2 = ""
len = characters.length;
function generatePassword(){
    password1= ""
    password2 = ""
    if (l === null){
        l = 15
    }
    console.log(l)
    for (let i = 0; i<l; i++){
        password1 += characters[Math.floor(Math.random() * len)]
        password2 += characters[Math.floor(Math.random() * len)]
        
    }
    passwordEl1.textContent = password1
    passwordEl2.textContent = password2
    
}

passwordEl1.addEventListener("click", ()=> {
    navigator.clipboard.writeText(passwordEl1.textContent)
    document.querySelector("#prompt").textContent = "password copied!"
    
})

passwordEl2.addEventListener("click", ()=> {
    navigator.clipboard.writeText(passwordEl2.textContent)
    document.querySelector("#prompt").textContent = "password copied!"
})

    
