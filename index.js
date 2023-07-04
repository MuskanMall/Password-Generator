const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


passwordEl1 =  document.querySelector("#password-el1");
passwordEl2 = document.querySelector("#password-el2");
displayLimit = document.querySelector("#display-limit");
limit = document.querySelector("#limit");
alph = document.querySelector("#alphabets");
num = document.querySelector("#numbers");
chars = document.querySelector("#characters");

document.querySelector("#input-length").addEventListener("click", function(event){
    event.preventDefault()
    getLimit()
})

let l = null
function getLimit(){
   l = limit.value
   l = parseInt(l)
   displayLimit.textContent = l
}

let password1= ""
let password2 = ""
len = characters.length;
console.log(len);
function generatePassword(){
    password1= ""
    password2 = ""
    if (l === null){
        l = 15
    }
    console.log(l)
    if ((alph.checked && num.checked && chars.checked) || (alph.checked == false && num.checked==false && chars.checked== false)){
        for (let i = 0; i<l; i++){
            password1 += characters[Math.floor(Math.random() * len)]
            password2 += characters[Math.floor(Math.random() * len)]
        }
    }
    else if(alph.checked && num.checked==false && chars.checked== false){
        for (let i = 0; i<l; i++){
            alphabet = characters.slice(0,52)
            password1 += alphabet[Math.floor(Math.random() * 52)]
            password2 += alphabet[Math.floor(Math.random() * 52)]
        }
    }
    else if(alph.checked == false && num.checked && chars.checked== false){
        for (let i = 0; i<l; i++){
            nums = characters.slice(52,62)
            password1 += nums[Math.floor(Math.random() * 10)]
            password2 += nums[Math.floor(Math.random() * 10)]
        }
    }
    else if(alph.checked == false && num.checked==false && chars.checked){
        for (let i = 0; i<l; i++){
            charas = characters.slice(62)
            password1 += charas[Math.floor(Math.random() * 29)]
            password2 += charas[Math.floor(Math.random() * 29)]
        }
    }
    else if(chars.checked && num.checked){
        for (let i = 0; i<l; i++){
            nac = characters.slice(52)
            password1 += nac[Math.floor(Math.random() * 39)]
            password2 += nac[Math.floor(Math.random() * 39)]
        }
    }
    else if(alph.checked && num.checked){
        for (let i = 0; i<l; i++){
            naa = characters.slice(0,62)
            password1 += naa[Math.floor(Math.random() * 62)]
            password2 += naa[Math.floor(Math.random() * 62)]
        }
    }
    else if(alph.checked && chars.checked){
        for (let i = 0; i<l; i++){
            caa = characters.slice(0,52).concat(characters.slice(62,91))
            password1 += caa[Math.floor(Math.random() * 81)]
            password2 += caa[Math.floor(Math.random() * 81)]
        }
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

    
