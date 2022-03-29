 const lista = ["pio@gmail.com", "pippo@gmail.com", "zio@gmail.com", "zia@gmail.com", "maria@gmail.com"]
 let email = prompt("Inserisci email");



 for  (let i=0; i < lista.length; i++) {
    let  output = "Ti stavamo aspettando"

    if (email === lista[0]) {
        output += " " + "Pio benvenuto!" 
        console.log(output);
        break
    }
    else if(email === lista[1]) {
        output += " " + "Pippo benvenuto!" 
        console.log(output);
        break
    }
    else if(email === lista[2]) {
        output += " " + "Zio benvenuto!" 
        console.log(output);
        break
    }
    else if(email === lista[3]) {
        output += " " + "Zia benvenuto!" 
        console.log(output);
        break
    }
    else if(email === lista[4]) {
        output += " " + "Maria benvenuto!" 
        console.log(output);
        break
    }
    else{
        console.log("Mi dispiace, non puoi entrare");
        break
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



