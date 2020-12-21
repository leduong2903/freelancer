window.onscroll=function(){
     scrollFunction()     
}
function scrollFunction(){
     if(document.body.scrollTop>50 || document.documentElement.scrollTop>50){
          document.getElementById('header').style.height='80px'
          document.getElementById('menu').style.height='80px'
     }else{
          document.getElementById('header').style.height='100px'
          document.getElementById('menu').style.height='100px'
     }
}
window.addEventListener('scroll',function(){
     var header=document.querySelector('#header')
    header.classList.toggle('sticky',window.scrollY>0)
})