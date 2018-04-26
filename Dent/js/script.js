
//    MENU FIXED POSITION

$(document).ready(function() {   
   var nav = $('.menu');

    var totalSpaceFromTop = function() {
        var topPageSpace = $('.wrapper').css('marginTop');
        var topHeader = $('.topHeader').css('height');        
        if (topPageSpace && topHeader) {   
            var topPageSpaceNoPx = topPageSpace.replace("px","");
            var topHeaderNoPx = topHeader.replace("px","");
            return parseInt(topPageSpaceNoPx) + parseInt(topHeaderNoPx); // + parseInt(logoNoPx);            
        }
        return 0;
    };

    var totalSpaceFromTop = totalSpaceFromTop();

   $(window).scroll(function () {

       if ($(this).scrollTop() >= totalSpaceFromTop) {
          nav.addClass("f-menu");

       } else {
        nav.removeClass("f-menu");
       }

   });

//    var slides = [ [img1,dot1],[],[] ]

   //object oriented 

   //SLIDER IMAGE
   
    var stopButton = document.querySelector("#stopSlider"); 
    var playButton = document.querySelector(".playSlider");
    var rightButton = document.querySelector(".moveRight");
    var leftButton = document.querySelector(".moveLeft");
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    var slideIndex = 0;
    var slide = init();
    var switchDots = dot();
    var slideInterval = setInterval(init,3000);

    //this is the function that runs the images
    function init() {
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none"; 
        }
        slideIndex++;
        if (slideIndex > slides.length) {
        slideIndex = 1;
        }
        slides[slideIndex-1].style.display = "block"; 
    }

    //this function is changing the dots 
    function dot() {
        for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
        }
        dots[slideIndex-1].className += " active";
    }

    playButton.addEventListener("click", function(){
        setInterval(init,3000);
    });

    stopButton.addEventListener("click", function(){
        clearInterval(slideInterval);
    });


    rightButton.addEventListener("click", function(){
        var slide = init();
        //check if init in setinterval
        if(slide == slideInterval){
            //stop the slider
            clearInterval();
        } else {
        //move one to the right
            init();
        };
    });

    leftButton.addEventListener("click", function(){
        
    });

    $('#myForm').submit(function (e) {
  
        e.preventDefault();
        var inputsArray = ["firstName","lastName","phone","email"];
        inputsArray.forEach(function(inputName) {
            var element = $('.' + inputName);
            if(element.length) {
                var elementValue = element.val();
                if(elementValue) {
                    LegalChars = new RegExp("^[a-zA-Z\-\u0590-\u05FF ]+$");
                    var numberReg = /^[0-9]+$/;

                    // console.log(inputName + " value: " + elementValue); //test
                    if(inputName == inputsArray[0] || inputName == inputsArray[1]) { // firstName or lastName
                        if (!LegalChars.test(elementValue)){
                            // innerText someting went wrong
                            return false;
                        } else {
                        return elementValue;
                        }
                        
                    }
                    else if (inputName == inputsArray[2]) { // phone
                        debugger;
                        if (!numberReg.test(elementValue)) {
                            console.log("numbers only!");
                        } else {
                           console.log(elementValue);
                        }
                       
                    }
                    else if (inputName == inputsArray[3]) { // email
                        return;
                    }       
                    return;             
                }
            }
            else {
                console.log(inputName + " element not found");
            }
                        
        });




        
        // var firstNameElement = $('.firstName');
        // if(firstNameElement) {
        //     var firstNameValue = firstNameElement.val();
        // }
        

        
        // var fname = $('.firstName').val();
        // var lastName = $('.lastName').val();
        // var phone = $('.phone').val();
        // var fname = $('.email').val();
       
        // if(!fname) {
        //     $('.errorBox').css("visibility", "visible");
        //     $('.errorBox').innerText = "First name is required";
        //     return false;
        // }
        // if(!lastName) {
        //     alert("lastname not found");
        //     return false;
        // }
        // if(!phone) {
        //     alert("phone not found");
        //     return false;
        // }
        // if(!email) {
        //    alert("email not found");
        //     return false;
        // }
      });
}); //END READY

