const checkButton = document.querySelector('#add-btn-popup');
const boxHide = document.querySelector('#box-hide');
const mainPage = document.querySelector('#main-page');
const blurPage = document.querySelector('.blur-popup');
const addPopup = document.querySelector('.add-btn-popup');

checkButton.addEventListener("click", () => {

    setTimeout(function(){  
         
            blurPage.style.filter = `none`;   
     

            boxHide.style.display = `none`;
            
}, 1000);
addPopup.innerText ="Almost there!"
});




const formPopUp = document.querySelector('.wrapper');
const contatcBtn = document.querySelector('#contact-btn');
const submitForm = document.querySelector('#submit-form');
const formHide = document.querySelector('.form-hide');
const conHead = document.querySelector('#contact-head');

contatcBtn.addEventListener("click", () => {
    formPopUp.style.display = `block`;
});

submitForm.addEventListener("click", () => { setTimeout(function(){          
    formPopUp.style.display = `none`;       
}, 3000);

formHide.style.display = `none`; 
conHead.innerText ="Thank You For Contacting, I'll reach to you Shortly!!"
});



