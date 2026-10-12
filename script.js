const canvas = document.getElementById("rain");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let drops = [];
for(let i=0; i<200; i++){
  drops.push({x:Math.random()*canvas.width, y:Math.random()*canvas.height, speed:2+Math.random()*3});
}

function drawRain(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.strokeStyle = "rgba(255,255,255,0.6)";
  ctx.lineWidth = 1;
  for(let d of drops){
    ctx.beginPath();
    ctx.moveTo(d.x, d.y);
    ctx.lineTo(d.x, d.y+10);
    ctx.stroke();
    d.y += d.speed;
    if(d.y > canvas.height) d.y = 0;
  }
  requestAnimationFrame(drawRain);
}
drawRain();
