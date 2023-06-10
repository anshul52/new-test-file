var cur = document.querySelector("#cur");
var overlay = document.querySelector("#main");


overlay.addEventListener("mousemove",function(dets){
        cur.style.left = `${dets.x}px`;
        cur.style.top = `${dets.y}px`;
})

var h1 = document.querySelector("h1");
h1.addEventListener("mouseenter",function(){
    cur.style.scale = 19;
})
h1.addEventListener("mouseleave",function(){
    cur.style.scale = 1;
})