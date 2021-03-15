//Movement animation to happen
const card = document.querySelector('.card');
const container = document.querySelector('.container');
//Items
const buba = document.querySelector('.buba #pokemon')
const info = document.querySelector('.info h1')
const texto = document.querySelector('.info h3')

//Moving Animation Event
container.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) /25;
    let yAxis = (window.innerHeight / 2 - e.pageY) /25;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
//Animate In
container.addEventListener("mouseenter", (e) => {
    card.style.transition = "none";
    //Popout
 buba.style.transform = "translateZ(150px) rotateZ(5deg)";
 info.style.transform = "translateZ(50px)";
 texto.style.transform = "translateZ(0px)";

})
//Animate Out 
container.addEventListener("mouseleave", (e) => {
    card.style.transition = "all 0.5 ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    //Popback
 buba.style.transform = "translateZ(0px)";
 info.style.transform = "translateZ(0px)";
 texto.style.transform = "translateZ(0px)";

});