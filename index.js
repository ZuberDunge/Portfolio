const checkButton = document.querySelector('#add-btn-popup');
const boxHide = document.querySelector('#box-hide');
const mainPage = document.querySelector('#main-page');
const blurPage = document.querySelector('.blur-popup');
const welcomeGif = document.querySelector('.welcome-gif');

checkButton.addEventListener("click", () => {

    setTimeout(function(){  
         
            blurPage.style.filter = `none`;
            
            welcomeGif.style.display=`none`;
     

        
}, 2000);
boxHide.style.display = `none`;
welcomeGif.style.display=`block`;
// subheading.innerHTML="Welcome Groot! Hang on your phone is slow";

});