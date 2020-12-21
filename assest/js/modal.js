const modalsContent=document.querySelector('.modals')
const close=document.querySelector('.modals__close')
const modalsImage=document.querySelector('.modals__view-img')
const productList=document.querySelectorAll('.selection__box-col')
const title=document.querySelector('.modals__view-title')
const modalsTitle=['log cabin','tasty cake','circus tent','controller','locked safe','submarine']

// Lấy image
productList.forEach((list,index)=>{
     const view=list.querySelector('.selection__box-col--middel .fas')
     const productImg=list.querySelector('.selection__box-col img').getAttribute('src') ;
     console.log(productImg)
     view.addEventListener('click',()=>{
         modalsContent.classList.add('modals--show') 
         modalsImage.setAttribute('src',productImg)
         title.innerHTML=modalsTitle[index] 
     });
  
});
close.addEventListener('click',()=>{
     modalsContent.classList.remove('modals--show') 
});
