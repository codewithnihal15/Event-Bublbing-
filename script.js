const grandparents = document.querySelector(".grandparent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");
// const body = document.querySelector(".body");
child.addEventListener("click", ()=>{
    console.log("you clicked on child");
});
parent.addEventListener("click", ()=>{
    console.log("you clicked on parent");
});
grandparents.addEventListener("click", ()=>{
    console.log("you clicked on grandparent");
});
document.body.addEventListener("click", ()=>{
    console.log("you clicked on body");
});
