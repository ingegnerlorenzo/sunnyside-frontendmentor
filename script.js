const btn = document.getElementById("hamburger");
const menu = document.getElementById("menu");

btn.addEventListener("click", () => {
   if(menu.classList.contains("active")) {  
        menu.classList.remove("active")
   } else {
     menu.classList.add("active")
   }
 })
 
 
