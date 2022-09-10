



window.addEventListener("scroll", () => {

    let mainDiv = document.querySelector(".main-header");

    let imgDiv = document.querySelector(".logo-main-img-fiexd");

    let imgDiv_1 = document.querySelector(".logo-main-img");

    let linkTag = document.querySelectorAll(".header-nav-tag");

    let humLogo = document.querySelector(".hum-logo");

    let humLogo_One = document.querySelector(".hum-logo_1");

    let navHeader = document.querySelector(".nav-header");

    let headerUl =document.querySelector('.header-nav-list');



    
    if (this.pageYOffset >= 30) {

        mainDiv.classList.add("dark-header");

        imgDiv_1.style.display = "none"

        imgDiv.style.display = "block"

        humLogo.style.display = 'none'

        navHeader.style.background = 'rgba(255, 255, 255, 55%)'

        navHeader.style.color = "black"
        
        navHeader.style.top = '75px'

        humLogo_One.style.display = 'block'

        linkTag[2].style.color = '#b02109'

        linkTag[0].style.color = 'black'

        linkTag[1].style.color = 'black'

      

    } else {

        mainDiv.classList.remove("dark-header");

        imgDiv_1.style.display = "block";

        imgDiv.style.display = "none";

        navHeader.style.background = ''

        navHeader.style.color = "white"

        navHeader.style.top = '70px'

        humLogo.style.display = 'block'

        humLogo_One.style.display = 'none'

        linkTag[2].style.color = 'white'

        linkTag[0].style.color = 'white'
        
        linkTag[1].style.color = 'white'
        

    }
    if (this.pageYOffset <= 100) {
        headerUl.style.background = 'transparent'
    } else {
        headerUl.style.background = ''
    }
})


    const navToggle = document.querySelector('.toggle-menu');

    const slider = document.querySelector('.nav-header');


   navToggle.addEventListener("click", () => {

        slider.classList.toggle("nav-active");

   })



   const getInfo = document.getElementById("get-info");

   const sliderBar = document.querySelector(".side_loing");

   const offBtn = document.querySelector(".close");



  
    getInfo.addEventListener("click", () => {
        sliderBar.classList.toggle("silder-show");
        function click() {
            offBtn.addEventListener("click", () => {
                sliderBar.classList.remove("silder-show")
            })
        }
       click()
    });
    
   
    
   


    




