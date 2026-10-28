const button = document.querySelector ("#cheer");
const count = document.querySelector ("#count");
count.textContent="0 clicks :(";

let clicks=0;
button.addEventListener ("click", () =>{
    clicks = clicks + 1;
    count.textContent= clicks+" clicks :)";
});




