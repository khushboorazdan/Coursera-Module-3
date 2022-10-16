const num1 =Math.floor(Math.random()*10);// generate random number between 1-10
const num2 =Math.floor(Math.random()*10);

const formEl=document.getElementById("form");// this method is called to find the element 
const inputEl=document.getElementById("input");
const scoreEl=document.getElementById("score");


var marks= JSON.parse(localStorage.getItem("marks")); // the recieved item will be in the string format this is how to get the method and set it in integer format
if (!marks){ //you have to put those double inverted commas bitch it works like a hash function
    marks =0; 
}




document.getElementById("question").innerHTML = "Multiply " +num1+" by " +num2+", what is answer?";


const orgAns= num1*num2;
formEl.addEventListener("submit", ()=>{
const usrAnswer = +inputEl.value; // that "+" helps in type conversion as the input value recoieved in the string format 
//console.log(usrAnswer, typeof usrAnswer);
if(usrAnswer === orgAns){
    marks++;
    updateLocalStorage();
}
else{
    marks--;
    updateLocalStorage(); // console
}
});

scoreEl.innerText ="score: "+marks; 

//very important so the user evry time get a new quetsion the page refreshes and 
// the variable score is set to zero to update the score
//we need to save the score in the local storage of browser in the with the set item method

function updateLocalStorage() {
    localStorage.setItem("marks", JSON.stringify(marks));
  }// call the above function from the function where the score is being changed




