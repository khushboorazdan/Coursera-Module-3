const btnEl=document.querySelector(".btn")

btnEl.addEventListener("mouseover",(event) => {
const Xcordinate= event.pageX-btnEl.offsetLeft;
const Ycordinate= event.pageY-btnEl.offsetTop;
btnEl.style.setProperty("--Xpos", Xcordinate+ "px");
btnEl.style.setProperty("--Ypos", Ycordinate+ "px");

//pseudo class cannot be used insid for the dom operation
//but we can create variable in the css to access them
//catch here is the setproperty method how did it use mouse over etc
});