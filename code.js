window.addEventListener("load", function(){
    window.lastScrollY= 0;
    var parent = document.querySelector("h1");
    var txt = parent.innerText;
    parent.innerText = "";

    for (let i = 0; i < txt.length; i++) {
        var letter = document.createElement("span");
        letter.speed = Math.floor(Math.random()*10)+2;
        letter.y = Math.floor(Math.random()*400) +2;
        letter.originY = letter.y;
        letter.opacity = 1;
        letter.innerText = txt[i];
        letter.style.top = letter.y+"px";
        parent.appendChild(letter);  
    }
    
});