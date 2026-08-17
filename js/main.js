(function(){
 var header=document.getElementById("siteHeader");
 var toggle=document.getElementById("navToggle");
 var nav=document.getElementById("siteNav");
 function onScroll(){
 if(!header)return;
 if(window.scrollY>10)header.classList.add("is-solid");
 else header.classList.remove("is-solid");
 }
 window.addEventListener("scroll",onScroll,{passive:true});
 onScroll();
 if(toggle&&nav){
 toggle.addEventListener("click",function(){
 var open=document.body.classList.toggle("nav-open");
 toggle.setAttribute("aria-expanded",open?"true":"false");
 });
 nav.querySelectorAll("a").forEach(function(a){
 a.addEventListener("click",function(){
 document.body.classList.remove("nav-open");
 toggle.setAttribute("aria-expanded","false");
 });
 });
 }
 var stage=document.querySelector(".hero-stage");
 if(stage){
 stage.addEventListener("pointermove",function(e){
 var r=stage.getBoundingClientRect();
 var x=((e.clientX-r.left)/r.width-0.5)*8;
 var y=((e.clientY-r.top)/r.height-0.5)*8;
 stage.style.setProperty("--hx",x.toFixed(2)+"deg");
 stage.style.setProperty("--hy",(-y).toFixed(2)+"deg");
 });
 stage.addEventListener("pointerleave",function(){
 stage.style.setProperty("--hx","0deg");
 stage.style.setProperty("--hy","0deg");
 });
 }
 if("IntersectionObserver" in window){
 var io=new IntersectionObserver(function(entries){
 entries.forEach(function(en){ if(en.isIntersecting){ en.target.classList.add("is-in"); io.unobserve(en.target);} });
 },{threshold:0.12});
 document.querySelectorAll(".reveal,.game-card,.media-panel,.odds-row,.bonus-box").forEach(function(el){ io.observe(el); });
 } else {
 document.querySelectorAll(".reveal").forEach(function(el){ el.classList.add("is-in"); });
 }
})();