const moreContent= document.querySelectorAll('.more-content');
let modal = document.querySelector('.modal-wrap ');
let modalInfo = document.querySelector('.modal-wrap_info');
const imgZoom = document.querySelectorAll('#img-click');
const popUp= document.querySelector('.container .pop-up')

//Модальные окна
{
moreContent.forEach(function(item){
  item.onclick = (event)=>{
    let target = event.target
    

if(target.dataset.content ==='studio'){
//Студийная модалка
  modalInfo.classList.remove('modal_close');
  openModal(modalInfo)


}else{
  //Галерея
  
  modal.classList.remove('modal_close');
 
  openModal(modal)
      }

    }
   
  }
)

const openModal= function(modalElement){
  modalElement.onclick = (event)=>{
 
    let target = event.target
    if (target === modalElement || target.classList.contains('close-Item')){
      modalElement.classList.add('modal_close')
    
  }
}

}
}
    
//pop-up
{


imgZoom.forEach((item)=>{
 
  item.onclick=()=>{

    document.querySelector('.container').style.display  = 'block';
    document.querySelector('.container .pop-up img').src = item.getAttribute('src');

  }

})
popUp.onclick=(item)=>{
  let target = item.target

if(target === document.querySelector('.container .pop-up span') || target === popUp){
  document.querySelector('.container').style.display  = 'none';

}

  
  

}

}
