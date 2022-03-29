 const lista = ["pio@gmail.com", "pippo@gmail.com", "zio@gmail.com", "zia@gmail.com", "maria@gmail.com"]
 let email = prompt("Inserisci email");



 for  (let i=0; i < lista.length; i++) {
     let output = "";

     if (email === lista[i]) {
         output += "entra";
       console.log(output);
     }
      else{
        output += "non puoi entrare";
        console.log(output);
     }
 } 

//Gioco dadi

const randomNum1 = Math.floor(Math.random() * 6) + 1;
const randomNum2 = Math.floor(Math.random() * 6) + 1; 

let output = "";

 if (randomNum1 > randomNum2) {
    document.querySelector("h1").innerHTML = "Il vincitore è l' utente"
    document.querySelector(".num1").innerHTML = randomNum1;
    document.querySelector(".num2").innerHTML = randomNum2;
   

 }else if (randomNum1 < randomNum2){
    document.querySelector("h1").innerHTML = "Il vincitore è il computer"
    document.querySelector(".num1").innerHTML = randomNum1;
    document.querySelector(".num2").innerHTML = randomNum2;
 }
 else if (randomNum1 === randomNum2){
    document.querySelector("h1").innerHTML = "E' un pareggio"
    document.querySelector(".num1").innerHTML = randomNum1;
    document.querySelector(".num2").innerHTML = randomNum2;
 }



